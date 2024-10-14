import React, { useState } from 'react';
import styles from './Payment.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Payment() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        amount: '',
        mobile: '',
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const updatedFormData = {
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        };
        setFormData(updatedFormData);
        validateForm(updatedFormData);
    };

    const validateForm = (data) => {
        let formErrors = {};
        let valid = true;

        if (!data.fullName) {
            formErrors.fullName = 'Full name is required';
            valid = false;
        }

        if (!data.email) {
            formErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            formErrors.email = 'Email address is invalid';
            valid = false;
        }

        if (!data.amount) {
            formErrors.amount = 'Amount is required';
            valid = false;
        } else if (isNaN(data.amount)) {
            formErrors.amount = 'Amount must be a number';
            valid = false;
        }

        if (!data.mobile) {
            formErrors.mobile = 'Mobile number is required';
            valid = false;
        } else if (!/^\d{10}$/.test(data.mobile)) {
            formErrors.mobile = 'Mobile number must be 10 digits';
            valid = false;
        }

        if (!data.termsAccepted) {
            formErrors.termsAccepted = 'You must accept the terms and conditions';
            valid = false;
        }

        setErrors(formErrors);
        setIsFormValid(valid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            // Handle payment logic
            console.log('Payment submitted', formData);
        }
    };

    return (
        <div className={styles.paymentContainer}>
            <form className={styles.paymentForm} onSubmit={handleSubmit}>
                <h2>Complete Your Payment</h2>

                <div className={styles.formGroup}>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={errors.fullName ? styles.errorInput : ''}
                        placeholder="Enter your full name"
                    />
                    {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? styles.errorInput : ''}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label>Amount:</label>
                    <input
                        type="text"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className={errors.amount ? styles.errorInput : ''}
                        placeholder="Enter the amount"
                    />
                    {errors.amount && <span className={styles.errorText}>{errors.amount}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label>Mobile Number:</label>
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className={errors.mobile ? styles.errorInput : ''}
                        placeholder="Enter your mobile number"
                    />
                    {errors.mobile && <span className={styles.errorText}>{errors.mobile}</span>}
                </div>

                <div className={styles.termsContainer}>
                    <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                    />
                    <label>I accept the <a data-toggle="modal" data-target="#exampleModal" href="#">Terms and Conditions</a></label>
                    {errors.termsAccepted && <span className={styles.errorText}>{errors.termsAccepted}</span>}
                </div>

                <button type="submit"  className={styles.payButton} disabled={!isFormValid}>
                    Pay Now
                </button>
            </form>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;

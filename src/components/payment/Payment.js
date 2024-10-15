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

                <button type="submit" className={styles.payButton} disabled={!isFormValid}>
                    Pay Now
                </button>
            </form>

            <div class="modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Terms and Conditions</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <ul>
                                <li>
                                    This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.
                                </li>
                                <li>
                                    This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of domain name https://www.veminds.com/ (“Website”), including the related mobile site and mobile application (hereinafter referred to as “Platform”).
                                </li>
                                <li>
                                    The Platform is owned by VENKATA BHARATHI CONSULTING PVT LTD, a company incorporated under the Companies Act, 1956 with its registered office at Plot No.265, Marthanda, NagarColony,New Hafeezpet, Kondapur, Serilingampally, K.V.Rangareddy- 500084, Telangana (hereinafter referred to as "Platform Owner", “we”, “us”, “our”).
                                </li>
                                <li>
                                    Your use of the Platform and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Platform including the applicable policies which are incorporated herein by way of reference. If You transact on the Platform, You shall be subject to the policies that are applicable to the Platform for such transaction. By mere use of the Platform, You shall be contracting with the Platform Owner and these terms and conditions including the policies constitute Your binding obligations, with Platform Owner. These Terms of Use relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, “Services”). Any terms and conditions proposed by You which are in addition to or which conflict with these Terms of Use are expressly rejected by the Platform Owner and shall be of no force or effect. These Terms of Use can be modified at any time without assigning any reason. It is your responsibility to periodically review these Terms of Use to stay informed of updates.
                                </li>
                                <li>
                                    For the purpose of these Terms of Use, wherever the context so requires "you", “your” or "user" shall mean any natural or legal person who has agreed to become a user/buyer on the Platform.
                                </li>
                                <li>
                                    ACCESSING, BROWSING OR OTHERWISE USING THE PLATFORM INDICATES YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE, SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING.
                                </li>
                                <li>
                                    The use of Platform and/or availing of our Services is subject to the following Terms of Use:
                                </li>
                                <li>
                                    To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account on the Platform.
                                </li>
                                <li>
                                    Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                                </li>
                                <li>
                                    Your use of our Services and the Platform is solely and entirely at your own risk and discretion for which we shall not be liable to you in any manner. You are required to independently assess and ensure that the Services meet your requirements.
                                </li>
                                <li>
                                    The contents of the Platform and the Services are proprietary to us and are licensed to us. You will not have any authority to claim any intellectual property rights, title, or interest in its contents. The contents include and is not limited to the design, layout, look and graphics.
                                </li>
                                <li>
                                    You acknowledge that unauthorized use of the Platform and/or the Services may lead to action against you as per these Terms of Use and/or applicable laws.
                                </li>
                                <li>
                                    You agree to pay us the charges associated with availing the Services.
                                </li>
                                <li>
                                    You agree not to use the Platform and/ or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.
                                </li>
                                <li>
                                    You agree and acknowledge that website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites. These links are provided for your convenience for provide further information.
                                </li>
                                <li>
                                    You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with the Platform Owner for the Services.
                                </li>
                                <li>
                                    You shall indemnify and hold harmless Platform Owner, its affiliates, group companies (as applicable) and their respective officers, directors, agents, and employees, from any claim or demand, or actions including reasonable attorneys’ fees, made by any third party or penalty imposed due to or arising out of Your breach of this Terms of Use, privacy Policy and other Policies, or Your violation of any law, rules or regulations or the rights (including infringement of intellectual property rights) of a third party.
                                </li>
                                <li>
                                    In no event will the Platform Owner be liable for any indirect, consequential, incidental, special or punitive damages, including without limitation damages for loss of profits or revenues, business interruption, loss of business opportunities, loss of data or loss of other economic interests, whether in contract, negligence, tort or otherwise, arising from the use of or inability to use the Services, however caused and whether arising in contract, tort, negligence, warranty or otherwise, exceed the amount paid by You for using the Services giving rise to the cause of action or Rupees One Hundred (Rs. 100) whichever is less.
                                </li>
                                <li>
                                    Not withstanding anything contained in these Terms of Use, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.
                                </li>
                                <li>
                                    These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.
                                </li>
                                <li>
                                    All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
                                </li>
                                <li>
                                    All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.
                                </li>
                                <li>
                                    Please note that due to the service-based nature of our business, our pricing is not fixed and may vary depending on the specific requirements of each client, project timelines, and various other factors. To obtain the exact pricing for your project, we kindly ask you to contact us before making any payment. Our service pricing ranges from 10,000 INR to 10 Crores INR.
                                </li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;

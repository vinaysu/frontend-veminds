import React, { useState } from 'react';
import styles from './SignUp.module.css'; // Import your CSS module

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    qualification: '',
    email: '',
    mobile: '',
    course: 'mern',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to the backend to save in MongoDB
    try {
      const response = await fetch('https://backend-veminds.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert('Registration successful!');
      } else {
        alert('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration');
    }

    // Reset Form
    setFormData({
      firstName: '',
      lastName: '',
      qualification: '',
      email: '',
      mobile: '',
      course: 'mern',
    });
  };

  return (
    <div id='signupContainer' className={styles.signupContainer}>
      <h2>Sign Up for a Course</h2>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className={styles.inputField}
          required
        />
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className={styles.selectField}
          required
        >
          <option value="mern">MERN Fullstack</option>
          <option value="data-science">Data Science</option>
          <option value="data-analytics">Data Analytics</option>
        </select>
        <button type="submit" className={styles.signupBtn}>Register</button>
      </form>
    </div>
  );
}

export default SignUp;

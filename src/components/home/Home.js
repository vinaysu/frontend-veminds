import React, { useState, useRef } from 'react';
import styles from './Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField, InputAdornment, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Icon for avatar
import PhoneIcon from '@mui/icons-material/Phone'; // Icon for phone input
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { FaWhatsapp } from 'react-icons/fa'; // Add this line at the top of your Home.js file
import { useNavigate, Link } from 'react-router-dom';


function Home() {

  const navigate = useNavigate()
  // Smooth scroll to the 'callback' section
  const scrollToCallbackSection = () => {
    const callbackSection = document.getElementById('callback');
    if (callbackSection) {
      window.scrollTo({
        top: callbackSection.offsetTop - 100, // Offset to adjust for any fixed headers
        behavior: 'smooth',
      });
    }
  };
  function navigation() {
    navigate('/Signup#signupContainer')
  }

  const companies = [
    { id: 1, name: 'Company 1', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDJrj-0ClYpDhbvQ7X1F6AGrrxGBnA2gf_w&s' },
    { id: 2, name: 'Company 2', img: 'data:image/png;base64,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' },
    { id: 3, name: 'Company 3', img: 'data:image/jpeg;base64,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' },
    { id: 4, name: 'Company 4', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgE5nJQj3yP-rA4ruPdgu8Vf0GWktODLXjrQ&s' },
    { id: 5, name: 'Company 5', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvqe39CNoIOIBAKInpRvBZhaexlw7rC3-Q4g&s' },
    { id: 6, name: 'Company 6', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOKrcEUNTxbHYm0s6ayuEIjvUQ114hx5sqQ&s' },
    { id: 7, name: 'Company 7', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavLAruYjKAK4gw-taT4VaLG00vvGN2azLbw&s' },
    { id: 8, name: 'Company 8', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iIkiPct_XwN4EBfQek-zcYYcryxtWysaeA&s' },
    { id: 9, name: 'Company 9', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmf_oqzQAOO6GATOAhvYjrlM7dcODdWfQ3Zg&s' },
    { id: 10, name: 'Company 10', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFP8M_hFXaKq2qMI1jc5DgUMrUhEbmuDNIg&s' },
    { id: 11, name: 'Company 11', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-dQW-M1cr71P0UTLNLsihy-oZaUvmieNfQ&s' },
    { id: 12, name: 'Company 12', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjG7O851ZxbaSjBbO-o2vnmuxSl2h4w2LpgDAPNW0_ZzeYyIvWjFhDDCkUFAEodurvydA&usqp=CAU' },
    { id: 13, name: 'Company 13', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIrYGtApIzun4j1d1OKODJnG3DIcMBbGD2g&s' },
    { id: 14, name: 'Company 14', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9T7GqMLnF9zexgDa3co-mBkBgTsg7kiw3rA&s' },
    { id: 15, name: 'Company 15', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvBfnKgk_7nu9-05R98s3hUqcgqaWBjNHww&s' },
    { id: 16, name: 'Company 16', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4HhRfM3pNSdga8QcorerPq7hH7xIjvDdyA&s' },
    { id: 17, name: 'Company 7', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Aspire_logo.png/120px-Aspire_logo.png' },
    { id: 18, name: 'Company 8', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Anadocslogo.JPG/120px-Anadocslogo.JPG' },
    { id: 19, name: 'Company 9', img: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Novatium_Logo.jpg' },
    { id: 20, name: 'Company 10', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/TOM-corpLogo.gif/120px-TOM-corpLogo.gif' },
    { id: 21, name: 'Company 11', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Trident_chennai.svg/120px-Trident_chennai.svg.png' },
    { id: 22, name: 'Company 12', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFOfillN9-zDhTjzl0PFrdN41GdNOhPTNQw&s' },
    { id: 23, name: 'Company 13', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIS2Pv2z_KTMcMM2owLDMoqLcpa8mpF49qhQ&s' },
    { id: 24, name: 'Company 14', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4CLJFWgV5xJ9l_rJDH0kz7intT2q8mczdg&s' },
    { id: 25, name: 'Company 15', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFTn0WO-Z_4IDF_JVWHmR3Xrx9qxXJhxgAA&s' },
    { id: 26, name: 'Company 16', img: 'https://cdn.prod.website-files.com/638aec50b9a23cec17b8c4d1/66f0e8abeb5ca025b4257b93_64197c75f6da20afa68b3465_RGB-SELECTED.png' },
    { id: 27, name: 'Company 7', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPVFROxdkrrWE5Uac12dsKuzMUpJVBUVMsg&s' },
    { id: 28, name: 'Company 8', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTxF4lzOuv4sPRXb_nX7RNSPVi28HIgf1Cg&s' },
    { id: 29, name: 'Company 9', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdK_asFWOO7-iaXjZyqtfHIZCJ7jrmqIEa6w&s' },
    { id: 30, name: 'Company 10', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61mmwPn29TlIDXmO8RoQOpHnk29_3upVKiQ&s' },
    { id: 31, name: 'Company 11', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMoqIegQOKtHA8YZflTiUdIsiJor5zAqnOg&s' },
    { id: 32, name: 'Company 12', img: 'data:image/png;base64,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' },
    { id: 33, name: 'Company 13', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIS2Pv2z_KTMcMM2owLDMoqLcpa8mpF49qhQ&s' },
    { id: 34, name: 'Company 14', img: 'data:image/png;base64,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' },
    { id: 35, name: 'Company 15', img: 'data:image/png;base64,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' },
    { id: 36, name: 'Company 16', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wQRV_NkrmbpvDDN_HG5mh85uyS1purqGqw&s' },
  ];

  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');

  // Create refs for the input fields
  const fullNameRef = useRef();
  const mobileRef = useRef();

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };


  const handleClick = async () => {
    console.log('Button clicked'); // Debugging

    // Validate full name (no special characters or numbers)
    const fullNamePattern = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
    if (!fullName) {
      fullNameRef.current.focus();
      alert('Please enter your full name.');
      return;
    } else if (!fullNamePattern.test(fullName)) {
      fullNameRef.current.focus();
      alert('Full name should contain only letters and spaces.');
      return;
    }

    // Validate mobile number (should be 10 digits)
    const mobilePattern = /^[0-9]{10}$/; // Only 10 digits allowed
    if (!mobile) {
      mobileRef.current.focus();
      alert('Please enter your mobile number.');
      return;
    } else if (!mobilePattern.test(mobile)) {
      mobileRef.current.focus();
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Proceed with the form submission if validations pass
    try {
      const response = await fetch('https://backend-veminds.onrender.com/payafterplacement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, mobile }),
      });

      const data = await response.json();
      console.log('Received data:', data);

      if (data.success) {
        console.log(data.message);
        alert('Successfully applied');
        setFullName(''); // Clear full name field
        setMobile(''); // Clear mobile field
      } else {
        console.error(data.message);
        alert('Not successfully applied');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error in the method');
    }
  };


  const handleWhatsapp = () => {
    const phoneNumber = '919390577569'; // Replace with the target phone number
    const message = 'Hello, I would like to inquire about the courses.'; // Default message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');
  };






  return (
    <div className={`${styles.home}`}>
      <div
        id="carouselExampleIndicators"
        className={`carousel slide ${styles.customCarousel}`} // Apply custom carousel styles
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Items */}
        <div className={`carousel-inner ${styles.customCarouselInner}`}>
          <div className={`carousel-item active ${styles.customCarouselItem}`}>
            <img
              src="/images/slider/slider-1.jpg"
              className="d-block w-100"
              alt="First Slide"
            />
            {/* Text Overlay */}
            <div className={`${styles.carouselText}`}>
              <h2>Transform your career with expert training and job assurance.</h2>
              <div className={styles.whatsappButtons} >
                <button
                  className={`btn btn-primary ${styles.sliderButton} ${styles.button} `}
                  onClick={scrollToCallbackSection} // Trigger smooth scroll on click
                >
                  Request a callback
                </button>
                <button onClick={handleWhatsapp} className={styles.whatsapp_button}>
                  <FaWhatsapp className={styles.whatsapp_icon} ></FaWhatsapp>
                  Contact Us on WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className={`carousel-item ${styles.customCarouselItem}`}>
            <img
              src="/images/slider/slider-2.jpg"
              className="d-block w-100"
              alt="Second Slide"
            />
            {/* Text Overlay */}
            <div className={`${styles.carouselText}`}>
              <h2>Learn from best Mentors and Instructors</h2>
              <div className={styles.whatsappButtons} >
                <button
                  className={`btn btn-primary ${styles.sliderButton} ${styles.button} `}
                  onClick={scrollToCallbackSection} // Trigger smooth scroll on click
                >
                  Request a callback
                </button>
                <button onClick={handleWhatsapp} className={styles.whatsapp_button}>
                  <FaWhatsapp className={styles.whatsapp_icon} ></FaWhatsapp>
                  Contact Us on WhatsApp
                </button>
              </div>
            </div>
          </div>
          <div className={`carousel-item ${styles.customCarouselItem}`}>
            <img
              src="/images/slider/slider-3.jpg"
              className="d-block w-100"
              alt="Third Slide"
            />
            {/* Text Overlay */}
            <div className={`${styles.carouselText}`}>
              <h2>You need to learn industry-relevant skills taught by the best mentors in today's competitive world</h2>
              <div className={styles.whatsappButtons} >
                <button
                  className={`btn btn-primary ${styles.sliderButton} ${styles.button} `}
                  onClick={scrollToCallbackSection} // Trigger smooth scroll on click
                >
                  Request a callback
                </button>
                <button onClick={handleWhatsapp} className={styles.whatsapp_button}>
                  <FaWhatsapp className={styles.whatsapp_icon} ></FaWhatsapp>
                  Contact Us on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className={styles.titleSection}>
        <div className={styles.leftTitleSection}>
          <h1 className={styles.caption}>
            <span className={styles.textColorBlue}>Empowering</span> your future with hands-on <span className={styles.textColorBlue}>IT training</span> and <span className={styles.textColorBlue}>guaranteed job</span> opportunities.
          </h1>
          <div className={styles.courses}>
            <Link to={'/Courses#fullStack'} ><span>MERN Stack Development</span></Link>
            <Link to={'/Courses#dataScience'} > <span>Data Science</span></Link>
            <Link to={'/Courses#dataAnalysis'} > <span>Data Analytics</span></Link>
          </div>
          <div className={styles.buttons}>
            <Link to={'/SignUp#signupContainer'} className={`btn btn-primary ${styles.button}   ${styles.atag}  `}>
              Enroll Now
            </Link>

            <button className={`btn btn-primary ${styles.button}`}>Know more</button>
          </div>
        </div>

        <div className={styles.rightTitleSection}>
          <div id="callback" >
            <div className={styles.startForFree}>
              <div className={styles.top_startForFree}>
                <h2>Start learning for FREE</h2>
                <p>Lectures & Assignments curated by Top Tech Professionals</p>
              </div>
              <div className={styles.bottom_startForFree}>

                <TextField
                  value={fullName}
                  inputRef={fullNameRef}
                  onChange={handleFullNameChange}
                  className={styles.input_startForFree} // Keep your className here
                  label="Full Name"
                  variant="outlined"
                  placeholder="Enter the FullName"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Avatar>
                          <AccountCircleIcon />
                        </Avatar>
                      </InputAdornment>
                    ),
                    style: {
                      borderColor: 'white',
                      marginBottom: '30px'// This applies the border color to the input field
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#3BE1E4', // This sets the initial border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'yellow', // This sets the hover state border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'green', // This sets the focused border color
                      },
                    },
                  }}
                />



                <TextField
                  value={mobile}
                  inputRef={mobileRef}
                  onChange={handleMobileChange}
                  className={styles.input_startForFree} // Keep your custom class if needed
                  label="Mobile Number"
                  variant="outlined"
                  placeholder="Enter the WhatsApp Number"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        +91
                      </InputAdornment>
                    ),
                    style: {
                      borderColor: 'red',
                      marginBottom: '30px' // This applies the border color to the input field
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#3BE1E4', // Initial border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'yellow', // Hover border color
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'green', // Focused border color
                      },
                    },
                  }}
                />
                <div className={styles.buttonContainer_StartForFree}>
                  <button onClick={handleClick} className={`btn btn-light btn-lg w-100 ${styles.button_startForFree}`}>
                    Apply Now For Free
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.companiesContainer}>
        <div className={styles.bigText} >
          <h1>Get the amazing offers from the top companies</h1>

        </div>
        {/* Row 1 - Scroll Left to Right */}
        <div className={`${styles.companiesRow} ${styles.scrollLeftToRight}`}>
          {companies.slice(0, 9).map((company) => (
            <div key={company.id} className={styles.companyCard}>
              <img src={company.img} alt={company.name} className={styles.companyLogo} />
            </div>
          ))}
        </div>

        {/* Row 2 - Scroll Right to Left */}
        <div className={`${styles.companiesRow} ${styles.scrollRightToLeft}`}>
          {companies.slice(9, 18).map((company) => (
            <div key={company.id} className={styles.companyCard}>
              <img src={company.img} alt={company.name} className={styles.companyLogo} />
            </div>
          ))}
        </div>
        {/* Row 1 - Scroll Left to Right */}
        <div className={`${styles.companiesRow} ${styles.scrollLeftToRight}`}>
          {companies.slice(18, 27).map((company) => (
            <div key={company.id} className={styles.companyCard}>
              <img src={company.img} alt={company.name} className={styles.companyLogo} />
            </div>
          ))}
        </div>
        {/* Row 2 - Scroll Right to Left */}
        <div className={`${styles.companiesRow} ${styles.scrollRightToLeft}`}>
          {companies.slice(27, 36).map((company) => (
            <div key={company.id} className={styles.companyCard}>
              <img src={company.img} alt={company.name} className={styles.companyLogo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;




import React from 'react';
import styles from './Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField, InputAdornment, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Icon for avatar
import PhoneIcon from '@mui/icons-material/Phone'; // Icon for phone input

function Home() {
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
              <button
                className={`btn btn-primary ${styles.sliderButton} ${styles.button} `}
                onClick={scrollToCallbackSection} // Trigger smooth scroll on click
              >
                Request a callback
              </button>
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
              <button
                className={`btn btn-primary ${styles.sliderButton} ${styles.button} `}
                onClick={scrollToCallbackSection} // Trigger smooth scroll on click
              >
                Request a callback
              </button>
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
              <button
                className={`btn btn-primary ${styles.sliderButton} ${styles.button} `}
                onClick={scrollToCallbackSection} // Trigger smooth scroll on click
              >
                Request a callback
              </button>
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
            <span>MERN Stack Development</span>
            <span>Data Science</span>
            <span>Data Analytics</span>
          </div>
          <div className={styles.buttons}>
            <button className={`btn btn-primary ${styles.button}`}>Enroll Now</button>
            <button className={`btn btn-primary ${styles.button}`}>Know more</button>
          </div>
        </div>

        <div className={styles.rightTitleSection}>
          <div id="callback" className={styles.snakeBorder}>
            <div className={styles.startForFree}>
              <div className={styles.top_startForFree}>
                <h2>Start learning for FREE</h2>
                <p>Lectures & Assignments curated by Top Tech Professionals</p>
              </div>
              <div className={styles.bottom_startForFree}>
                {/* Name Input Field with Avatar Icon */}
                <TextField
                  className={styles.input_startForFree}
                  label="Full Name"
                  variant="outlined"
                  placeholder="Enter the Full Name"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Avatar>
                          <AccountCircleIcon />
                        </Avatar>
                      </InputAdornment>
                    ),
                  }}
                  style={{ marginBottom: '20px' }} // Optional: add spacing between fields
                />

                {/* Mobile Number Input Field with +91 Prefix */}
                <TextField
                  className={styles.input_startForFree}
                  label="Mobile Number"
                  variant="outlined"
                  placeholder="Enter the WhatsApp Number"
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                  }}
                />
                <div className={styles.buttonContainer_StartForFree}>
                  <button className={`btn btn-light btn-lg w-100 ${styles.button_startForFree}`}>Apply Now For Free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;




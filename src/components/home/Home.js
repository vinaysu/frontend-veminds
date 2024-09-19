import React from 'react';
import styles from './Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
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
              <button className={` btn btn-primary ${styles.button}`} >Enroll Now</button>
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
              <h2>Your Custom Text Here</h2>
              <button className={` btn btn-primary ${styles.button}`} >Enroll Now</button>
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
              <h2>Your Custom Text Here</h2>
              <button className={` btn btn-primary ${styles.button}`} >Enroll Now</button>
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
      <div className={styles.titleSection} >
        <div className={styles.leftTitleSection} >
          <h1 className={styles.caption} >
            <span className={styles.textColorBlue} >Empowering</span>  your future with hands-on <span className={styles.textColorBlue}  >IT training </span>  and <span className={styles.textColorBlue}  > guaranteed job </span> opportunities.
          </h1>
          <div className={styles.courses}>
            <span>Fullstack Development</span>
            <span>Data Science</span>
          </div>
          <div className={styles.buttons} >
            <button className={` btn btn-primary ${styles.button}`} >Enroll Now</button>
            <button className={` btn btn-primary ${styles.button}`} >Know more</button>
          </div>

        </div>
        <div className={styles.rightTitleSection}>
          <div className={styles.snakeBorder}>
            <img src='/images/navbar/Logo-Ve-Minds.jpg' alt="Logo" />
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;




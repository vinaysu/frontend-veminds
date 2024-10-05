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
    { id: 2, name: 'Company 2', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAABJlBMVEU1NjpBPkBKRUc1Nzo7Oj03NjoAgMkAgMcAf8UAf78AgcQAgcs3Nzo5NjkuPkc3MjIabJk2NDQHcaMvR1YAfLk1Njw4MzUsQU0ZY4g8Njk2MjQqU2klTGAvOj8zOTwAfLbrICX/wRcJcaAtMTtENTlTS0oxOkItXn4eaY8dX38vPEUkKjlxW0CPckKlf0aXdkE2KzkjUm4tQEUQfq8zMDvNoUTxuzT6xyD8xjTfmEqOMTRKNTogUmY5LS3lsjrKmTdbSTtfQDvHLjBgNTgvTll9YT+5jUDXMC+0MjJ3Nzk2QlEQaIiLZ0PiKSm+NDBpTz1TRD2JPj1oNjivhkSrNDImJzvbrEBWNDmgNDV1NDexRjLGQCybNDeERD9YP0B+S0ZqUUtlXFlUPE+mAAALlklEQVR4nO2ca3PbNhaGkcLgHYIgSpRISaRDuQ5pJ+kqSbvZ1G7TpK3jdp022XSbve/+/z+xL0jZ0SSenckZ7Yw7c54PjsU7Hp4DHEAZi08/YT4ecUtIwXwkCbQxH80ea6PA2kiwNhKsjQRrI8HaSLA2EqyNBGsjwdpIsDYSrI0EayPB2kiwNhKsjQRrI8HaSLA2EqyNBGsjwdpIsDYSrI0EayPB2kiwNhKsjQRrI8HaSLA2EqyNBGsjwdpIsDYSrI0EayPB2kiwNhKsjQRrI8HaSLA2EqyNBGsjwdpIsDYSrI0EayPB2kiwNhKsjQRrI8HaSLA2EqyNBGsjwdpIsDYSrI0EayPB2kiwNhKsjcT/QZu8/q8Pqut3XXe0uvqx2S/dz2vO3Tpu+9T/8XlH7Fiba11hjSkKnQiR6FwmiU4UtmstZK4TreRE57ma9O1RIkly7NYbJ9CjgFiBiZBKym6L1LYw1mZaJRvPChcSOsuKwmArtkl3k1JpLdUVUuPiydVHnSfdoTtgl9rw7CIzh/M7TdPODzMrdDkAJR7W7ZWJ7D4uB4Ojy9jRyRE+oWWX11BaiNVxfvfe/c/u/k6UUJ1LpbNi0c5w0aMsu2y3UtYere8MsXVpkm6b1MvBg8EW7lbbPBhM1GQnTd2lNrSoSJux73meH1XDqdFlHYXhaAkVLt6yphqHD39ownC8yHR/yrQKo2GRbOXS6tG9z7+4ffv27x//4cmXeBNaJHZdRe6q0biZbk4U0n5bj30/9nx/PEyzBOYSUYdV+I6obaIo2towrtJkN1m7Q21oomlDPwiCKEIbvbC1No2C0J9Zl7sqO4m8IGpPh7EfP1z2j59MceiwuLrGBNK+grMvvv7s6a1vnj17XiqpljUu6gdR4AXeeJ51oatNE+IebqPn41YuO4WtPPf5kvhOg53+uw1+lCY3L0l10UCM73CPG/h1adoo9KNvLboiPaiws8lMgz1+Y5LulF7bVQgcf+ekffVZfryaTPTLfXhLZO3DRoyrInb88cKdqEpsdMZAHMBnIxCFtoLfd9bi2TD2tgmiNLtx2pSZxXjscNQuFm0NgV6ValujHeNloqQdQlc1SLIhwsOLTozS6O6gze+jTUq1evS9i7T7Bys0TicHZ/v7L0TWxmjvqJ0v1sMqDvxRgXS07vp+OFyfzNtR6EKxMdg6wv1H77hzp//XD71x7X6p0+zGJWl2EnpBUE+N0Zk5TWuvmhZKH41haVggfyMvjOYG2nznbTzNXX+3pa1cPXWh9vXBI6dQ5cvz/f39s4Oy9vygtVmWGTOtPD9E/2RbF8/1oem2prDlh+tCFiPPrw7NFda6n6c/jAOvOXW/Zjq/cUPCYRUEcX14gF/LUlr5o8uIxKyRWsH6NEWvF/5ocoEkjVwojlxaqSttSq7uYiR4fP8XSCvRT5blC2i7eF6O/aASfUojngN/bfUA78JvCo0aA5szWSM3K1QpIz+ultvx5E5L0jDyhkbKiatRblq0FXOXhBOVSNWNnDJLSuRaboZBhCHMRUTlNphh7Pof328NuvF30Xb8x8dI0LvHQvTl7fLJRadtOfa8qsy7e+hFM2sWhW0x0NRGlhsH+VHlhfHciMp1CPIKN0wplUGb60tdcSd307XtUBv0oMfKXEGm0J2r/glRch6OMLhWUeCP0wwDoxmiZ0N4BOGi2Iq21Xew9tVT9Gp9GsnnF/tnLy/ODixOj4ZHpkgSlWtrLG6FAIzc2U4bQk6YNQJ9mNmRM2wdRVF0tTdI0siPh0Z0teKOZg270iYTG6LfKfWmjlWXsybEXjruxtWgNaqLNmQrgi/yK4wU0xDttUKufkKGfvHz6mpOpV89ef784OwNOkU3UobDNi2LzLrXoQchev5CduHj7oBwcyFZ2ArvZn6Jm5h09WKvTV4zFSOzI21KJg+gbdSXFVu4F6zayNVddff2O21RCpVR2BgMCVGMclcc/BnWflq5pmF6pMulfv3k5YuDl69LdQjFoasexqPZGuWuctVggPC5TDiMrGYEs0uD3tWLugoI9fZksxvavCttO2I32tyEcBB6cW0+fJuYGAqXk9UgdzG40XbaurbNzRTJC23Hf8IYeu8Y8y8lyqU4OH9zhp7trX4tXZbXAQbfyA0tfjgTuV6gqJ3ZfjwQXSaaURxFUyRpgNHGEXnVZPMKb7I2CW2oqcz7ezqN2QI5OkMk5n20eSg7be2hadMBmjksJj8jRb/+BfmHbH/+5AUKNowG+69KN7fClHTe1KGroyNMpxpbINq8xoorbUJmLtoGTluwiTZ0cjc+2lzfVo7RsXzwaN2yj0V4xDM8uLrSZpMBRol4NEVqD+3qPkqPpys3qxX6/KUbQh3npeu/JuikMrtM2yG6rsiL1maAQuyhvVpKkloeovscT9C3eVHbzjru/Ca0CTNCkxZFP4BqcdlhO4pOW9+HX2qTZu6SaeiaZB+hZ/v8GMGGGSgKtrdd6bF/8WuJbk5jWMRwmKCwtWkdROgJJPSMp1qJfnkIw9Ecc7TaoG5DkdNXusbK34A2uGlRxdaYXrplIlQFOrsatgokKaLN/dppw5Qag6dpMD/CWOEN7QFy9N7K1bmlUuWTs84aZggu+NJ23aa6q0qSbOBGzEOcibMy1xGKbjiSIy+KW+MKkPHy/Qe72drUUYgUaYpcd4mlivkPB5t1tGu1CV1iqtRpK35+fPvxN13fPlnmb/scvdh/5hYoMwQSzlVdhmtZxV54mKGkCFDPaFh1q5WmwdA6Xua9tvdHpZutTZgWHbLXlCbRKjNHTVBPkn4wu16bsKlb+3HaEG2PDybaRdvrZ720t385e4nAkVmKUXG0PM20TgpzgjuMbGJmfhiFs0mhE51lh7hiELdW/ya1JXYYokwYz9IHD9K28tHAon/Ua7UpJzrqtNnjz2/fvruSpfj1TR9qZ+dl+fy8dJ3+pIKUapYOltN5E8Jha6Se1HhFftX2t4pxr2EhddFpe790vOHaZF7WMOJWcbrFQwRJtq0t6w6S/SxBy4kWeVL7nTY3s/r+0Zfnl/n54sulWw9QbuadrX1XVEQhSpAYc6jRBLNLPa3iMIIut9nDPUeTXPTRdvh+tCGlPe/mahMqE66T6VZUXcVZH+b9m7cL3/NmmXIDqThtoCDNu0b0S5dDKyev//q3l88ugJN2Lsu9xM0mMYAm0q7Hfr9oi1j2R0fdqnixrF1x5io0BGD0o3R3spjKh9dog/Cbqw1jaF6sKxcDXhxH1brQ/VCHcjeK4402lSFJEW29ULeshFmCLvNf//7MTQwuzt7849NLPrl169be3p5Z1GGMS3phVLXS9s1P7EmFORe2e+FobhP3RuzD2P8w2pLU1YaFq6V3xi6T1IESvm3qGhNvgQJho00fLhbzgZtZdRXF4mRRbr7h02qxWKTJXglB/3z9j1ev/vXv/2zYEqft9M6wHtWzk2WRbIpc3Eos2mF3q0J13ykKmeJqH0zv3N0Xqb6p0ebWttAaXbhlVLfMIy61SZllmehrCByQuYUMsbVH5Hki9x6Ue7dK5+8TJ6sPtL095b6TQhFo3EptrvVlyHTfe5p+yfZydipVZosPtClVFIXd0XcvG3bat7kHx4vfLKFuLQl284Nem+i/Cd7scnmrdd9q9GX63dHbF+4nHG5UnVwtLJVCTcp+4QjX3bwGFHYf2HG7cfjlK9wN/H9ASLA2EqyNBGsjwdpIsDYSrI0EayPB2kiwNhKsjQRrI8HaSLA2EqyNBGsjwdpIsDYSrI0EayPB2kiwNhKsjQRrI8HaSLA2EqyNBGsjwdpIsDYSrI0EayPB2kiwNhKsjQRrI8HaSLA2EqyNBGsjwdpIsDYSrI0EayPB2kiwNhKsjQRrI8HaSLA2EqyNBGsjwdpIsDYSrI0EayPB2kiwNhKsjQRrI8HaSLA2EqyNBGsjwdpIsDYSrI0EayOxJzZ/dpT5KP4LMJD+wGHqwrIAAAAASUVORK5CYII=' },
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
    { id: 9, name: 'Company 9', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIrYGtApIzun4j1d1OKODJnG3DIcMBbGD2g&s' },
    { id: 10, name: 'Company 10', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9T7GqMLnF9zexgDa3co-mBkBgTsg7kiw3rA&s' },
    { id: 11, name: 'Company 11', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvBfnKgk_7nu9-05R98s3hUqcgqaWBjNHww&s' },
    { id: 12, name: 'Company 12', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4HhRfM3pNSdga8QcorerPq7hH7xIjvDdyA&s' },
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
          {companies.slice(0, 4).map((company) => (
            <div key={company.id} className={styles.companyCard}>
              <img src={company.img} alt={company.name} className={styles.companyLogo} />
            </div>
          ))}
        </div>

        {/* Row 2 - Scroll Right to Left */}
        <div className={`${styles.companiesRow} ${styles.scrollRightToLeft}`}>
          {companies.slice(4, 8).map((company) => (
            <div key={company.id} className={styles.companyCard}>
              <img src={company.img} alt={company.name} className={styles.companyLogo} />
            </div>
          ))}
        </div>
        {/* Row 1 - Scroll Left to Right */}
        <div className={`${styles.companiesRow} ${styles.scrollLeftToRight}`}>
          {companies.slice(8, 12).map((company) => (
            <div key={company.id} className={styles.companyCard}>
              <img src={company.img} alt={company.name} className={styles.companyLogo} />
            </div>
          ))}
        </div>
        {/* Row 2 - Scroll Right to Left */}
        <div className={`${styles.companiesRow} ${styles.scrollRightToLeft}`}>
          {companies.slice(12, 16).map((company) => (
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




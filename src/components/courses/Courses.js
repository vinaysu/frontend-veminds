import React, { useEffect, useState, useRef } from 'react'
import styles from './Courses.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField, InputAdornment, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Icon for avatar
import PhoneIcon from '@mui/icons-material/Phone'; // Icon for phone input
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SchoolIcon from '@mui/icons-material/School';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HandshakeIcon from '@mui/icons-material/Handshake';


function Courses() {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

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
        setFullName(''); // Clear full name field
        setMobile(''); // Clear mobile field
        alert('Successfully applied');
      } else {
        console.error(data.message);
        alert('Not successfully applied');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error in the method');
    }
  };

  return (
    <div className={styles.main_courseSection} >
      <div className={styles.bg_image} >
        <div className={styles.fullStack} >
          <div className={styles.left_fullStack} >
            <h1 className={styles.caption} >
              Launch your career with <br />  our <span className={styles.font_color} > Full Stack Developer  <br />   Course </span> and Pay after <br /> Placement
            </h1>
            <p className={styles.text} >
              Curriculum designed and taught by Alumni from IITs & Leading Tech Companies.
            </p>

          </div>
          <div id='startForFree' className={styles.right_fullstack} >

            <div className={styles.startForFree} >
              <div className={styles.top_startForFree} >
                <h2>Start learning for FREE</h2>
                <p>Lectures & Assignments curated by Top Tech Professionals</p>
              </div>
              <div className={styles.bottom_startForFree} >

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

                <div className={styles.buttonContainer_StartForFree} >
                  <button onClick={handleClick} className={` btn btn-light btn-lg w-100 ${styles.button_startForFree}`} >Start For Free</button>

                </div>
              </div>
            </div>


          </div>

        </div>
        <div className={styles.details_fullStack} >
          <div className={`${styles.topContainer}`}>
            <span className={`${styles.payAfterPlacement}`}>
              Pay after Placement Available
            </span>
            <h1 id='fullStack' className={styles.title_mern}>MERN Full Stack</h1>
            <span className={`${styles.access}`}>
              Life time Access
            </span>
          </div>


          <div className={styles.columns_mern} >

            <div className={`${styles.column_mern}`}>
              <div className={styles.item_eligibility}>
                <div className={styles.itemHeader}>
                  <SchoolIcon />
                  <span>Eligibility:</span>
                </div>
                <h6>All Degrees and Background eligible</h6>
                <hr />
              </div>

              <div className={styles.item_eligibility}>
                <div className={styles.itemHeader}>
                  <AvTimerIcon />
                  <span>Duration:</span>
                </div>
                <h6>6 Months</h6>
              </div>
            </div>

            <div className={styles.buttonAndArrow}>
              <p className={styles.upskill} >Up skill on the most in demand skills in the market</p>
              <div className={styles.technologyList}>
                <span className={styles.technology}>JavaScript</span>
                <span className={styles.technology}>React.js</span>
                <span className={styles.technology}>Node.js</span>
                <span className={styles.technology}>MongoDB</span>
                <span className={styles.technology}>Express.js</span>
              </div>
              <KeyboardArrowUpIcon className={styles.upArrow}></KeyboardArrowUpIcon>
              <a href='#startForFree' ><button className="btn btn-primary btn-lg">Apply Now</button> </a>
            </div>

            <div className={`${styles.column_mern}`}>
              <div className={styles.item_eligibility}>
                <div className={styles.itemHeader}>
                  <BusinessCenterIcon />
                  <span>Selection Process:</span>
                </div>
                <h6>Basic Aptitude Test</h6>
                <hr />
              </div>

              <div className={styles.item_eligibility}>
                <div className={styles.itemHeader}>
                  <HandshakeIcon />
                  <span>Placement Services:</span>
                </div>
                <h6>Avail anytime within 1 year post course completion.</h6>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.details_dataScience} >
          <div className={`${styles.topContainer}`}>
            <span className={`${styles.payAfterPlacement}`}>
              Pay after Placement Available
            </span>
            <h1 id='dataScience' className={styles.title_mern}>Data Science</h1>
            <span className={`${styles.access}`}>
              Life time Access
            </span>
          </div>


          <div className={styles.columns_mern} >

            <div className={`${styles.column_mern}`}>
              <div className={styles.item_eligibility}>
                <div className={styles.itemHeader}>
                  <SchoolIcon />
                  <span>Eligibility:</span>
                </div>
                <h6>All Degrees and Background eligible</h6>
                <hr />
              </div>

              <div className={styles.item_eligibility}>
                <div className={styles.itemHeader}>
                  <AvTimerIcon />
                  <span>Duration:</span>
                </div>
                <h6>6 Months</h6>
              </div>
            </div>

            <div className={styles.buttonAndArrow}>
              <p className={styles.upskill} >Up skill on the most in demand skills in the market</p>
              {/* <div className={styles.technologyList}>
                <span className={styles.technology}>JavaScript</span>
                <span className={styles.technology}>React.js</span>
                <span className={styles.technology}>Node.js</span>
                <span className={styles.technology}>MongoDB</span>
                <span className={styles.technology}>Express.js</span>
              </div> */}
              <KeyboardArrowUpIcon className={styles.upArrow}></KeyboardArrowUpIcon>
              <a href='#startForFree' ><button className="btn btn-primary btn-lg">Apply Now</button> </a>
            </div>

            <div className={`${styles.column_mern}`}>
              <div className={styles.item_eligibility}>
                <div className={styles.itemHeader}>
                  <BusinessCenterIcon />
                  <span>Selection Process:</span>
                </div>
                <h6>Basic Aptitude Test</h6>
                <hr />
              </div>

              <div className={styles.item_eligibility}>
                <div className={styles.itemHeader}>
                  <HandshakeIcon />
                  <span>Placement Services:</span>
                </div>
                <h6>Avail anytime within 1 year post course completion.</h6>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.details_dataAnalysis} >
          <div className={`${styles.topContainer}`}>
            <span className={`${styles.payAfterPlacement}`}>
              Pay after Placement Available
            </span>
            <h1 id='dataAnalysis' className={styles.title_mern}>Data Analytics</h1>
            <span className={`${styles.access}`}>
              Life time Access
            </span>
          </div>


          <div className={styles.columns_mern} >

            <div className={`${styles.column_mern}`}>
              <div className={styles.item_eligibility}>
                <div className={styles.itemHeader}>
                  <SchoolIcon />
                  <span>Eligibility:</span>
                </div>
                <h6>All Degrees and Background eligible</h6>
                <hr />
              </div>

              <div className={styles.item_eligibility}>
                <div className={styles.itemHeader}>
                  <AvTimerIcon />
                  <span>Duration:</span>
                </div>
                <h6>4 Months</h6>
              </div>
            </div>

            <div className={styles.buttonAndArrow}>
              <p className={styles.upskill} >Up skill on the most in demand skills in the market</p>
              {/* <div className={styles.technologyList}>
                <span className={styles.technology}>JavaScript</span>
                <span className={styles.technology}>React.js</span>
                <span className={styles.technology}>Node.js</span>
                <span className={styles.technology}>MongoDB</span>
                <span className={styles.technology}>Express.js</span>
              </div> */}
              <KeyboardArrowUpIcon className={styles.upArrow}></KeyboardArrowUpIcon>
              <a href='#startForFree' ><button className="btn btn-primary btn-lg">Apply Now</button> </a>
            </div>

            <div className={`${styles.column_mern}`}>
              <div className={styles.item_eligibility}>
                <div className={styles.itemHeader}>
                  <BusinessCenterIcon />
                  <span>Selection Process:</span>
                </div>
                <h6>Basic Aptitude Test</h6>
                <hr />
              </div>

              <div className={styles.item_eligibility}>
                <div className={styles.itemHeader}>
                  <HandshakeIcon />
                  <span>Placement Services:</span>
                </div>
                <h6>Avail anytime within 1 year post course completion.</h6>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
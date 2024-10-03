import React, { useEffect, useState } from 'react'
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

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };


  const handleClick = async () => {
    console.log('Button clicked'); // Add this for debugging
    window.alert('triggered');
    try {
      const response = await fetch('http://localhost:5000/payafterplacement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, mobile }),
      });

      const data = await response.json();
      if (data.success) {
        console.log(data.message);
        alert('successfully applied');
      } else {
        console.error(data.message);
        alert('not successfully applied');
        
      }
    } catch (error) {
      console.error('Error:', error);
      alert('error in the method');
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
                  onChange={handleFullNameChange}
                  className={styles.input_startForFree}
                  label="Full Name"
                  variant="outlined"
                  placeholder='Enter the FullName'
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
                  style={{ marginBottom: '20px' }}
                />


                <TextField
                  onChange={handleMobileChange}
                  className={styles.input_startForFree}
                  label="Mobile Number"
                  variant="outlined"
                  placeholder='Enter the WhatsApp Number'
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        +91
                      </InputAdornment>
                    ),
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
      </div>
    </div>
  )
}

export default Courses
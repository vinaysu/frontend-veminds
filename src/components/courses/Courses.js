import React from 'react'
import styles from './Courses.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField, InputAdornment, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Icon for avatar
import PhoneIcon from '@mui/icons-material/Phone'; // Icon for phone input


function Courses() {
  return (
    <div className={styles.main_courseSection} >
      <div className={styles.fullStack} >
        <div className={styles.left_fullStack} >
          <h1 className={styles.caption} >
            Launch your career with <br />  our <span className={styles.font_color} > Full Stack Developer  <br />   Course </span> and Pay after <br /> Placement
          </h1>
          <p className={styles.text} >
            Curriculum designed and taught by Alumni from IITs & Leading Tech Companies.
          </p>

        </div>
        <div className={styles.right_fullstack} >
          <div className={styles.snakeBorder}>
            <div className={styles.startForFree} >
              <div className={styles.top_startForFree} >
                <h2>Start learning for FREE</h2>
                <p>Lectures & Assignments curated by Top Tech Professionals</p>
              </div>
              <div className={styles.bottom_startForFree} >
                {/* Name Input Field with Avatar Icon */}
                <TextField
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
                  style={{ marginBottom: '20px' }} // Optional: add spacing between fields
                />

                {/* Mobile Number Input Field with +91 Prefix */}
                <TextField
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
                  <button className={` btn btn-light btn-lg w-100 ${styles.button_startForFree}`} >Start For Free</button>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Courses
import React from 'react'
import styles from './Contact.module.css'

export default function Background() {
  return (
    <div
      style={{
        background: `url(${'https://res.cloudinary.com/dkasinto0/image/upload/v1726806341/logo-Ve-Minds_bfc8ut.jpg'}) `,
       backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center', 
      }}
      height="200vh"
      width='100%'
      className={styles.trainer_coverPic}
    >
      <h1> Contact us </h1>
    </div >
  )
}
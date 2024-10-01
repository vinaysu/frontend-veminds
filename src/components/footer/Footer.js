import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div>
      <div className={styles.footerSection}>
        <div className={styles.footerContent}>
          <div className={styles.contactInfo}>
            <h2>Contact</h2>
            <p>Plot No 265, Marthandanagar Colony, New Hafeezpet, Kondapur, Hyderabad 500049</p>
            <p>Phone: <a href="tel:+919390577569">+91 9390577569</a></p>
            <p>Email: <a href="mailto:infoveminds@gmail.com">infoveminds@gmail.com</a></p>
          </div>

          <div className={styles.gallerySection}>
            <h2>Gallery</h2>
            <div className={styles.gallery}>
              <img src="/images/navbar/Logo-Ve-Minds.jpg" alt="Gallery Image 1" />
              <img src="/images/navbar/Logo-Ve-Minds.jpg" alt="Gallery Image 2" />
              <img src="/images/navbar/Logo-Ve-Minds.jpg" alt="Gallery Image 3" />
              <img src="/images/navbar/Logo-Ve-Minds.jpg" alt="Gallery Image 4" />
            </div>
          </div>

          {/* <div className={styles.newsletterSection}>
            <h2>Newsletter</h2>
            <p>veminds is the Knowledge Hub for Future.</p>
            <form className={styles.newsletterForm} >
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div> */}
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} veminds. All Rights Reserved.</p>
        </div>
      </div>



    </div>
  )
}

export default Footer
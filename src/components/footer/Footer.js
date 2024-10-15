import React from 'react'
import styles from './Footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div>
      <div className={styles.footerSection}>
        <div className={styles.footerContent}>
          <div className={styles.contactInfo}>
            <h2>Contact</h2>
            <p>Plot No 265, Marthandanagar Colony, New Hafeezpet, Kondapur, Hyderabad 500049</p>
            <p className={styles.inline} >Phone: <a href="tel:+919390577569">+91 9390577569</a></p>
            <p className={styles.inline} >Email: <a href="mailto:infoveminds@gmail.com">infoveminds@gmail.com</a></p>
          </div>

          {/* <div className={styles.gallerySection}>
            <h2>Gallery</h2>
            <div className={styles.gallery}>
              <img src="/images/navbar/Logo-Ve-Minds.jpg" alt="Gallery Image 1" />
              <img src="/images/navbar/Logo-Ve-Minds.jpg" alt="Gallery Image 2" />
              <img src="/images/navbar/Logo-Ve-Minds.jpg" alt="Gallery Image 3" />
              <img src="/images/navbar/Logo-Ve-Minds.jpg" alt="Gallery Image 4" />
            </div>
          </div> */}

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
          <p>&copy; {new Date().getFullYear()} veminds. All Rights Reserved.
            <span data-toggle="modal" data-target="#privacy" >Privacy Policy</span>
            <span data-toggle="modal" data-target="#refund" >Refund Policy</span>
          </p>

        </div>
      </div>

      <div class="modal fade" id="privacy" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Privacy Policy:</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

              <h5>This website is Owned & Operated by VENKATA BHARATHI CONSULTING PVT LTD</h5>
              <ol>
                <li>Information We Collect
                  <ul>
                    <li>
                      Personal Information: We collect personal details such as your name, email address, shipping address, phone number, and payment information when you make a purchase, create an account, or contact us.
                    </li>
                    <li>
                      Non-Personal Information: We may collect non-personal data such as browser type, operating system, and browsing behavior to improve our website and services.

                    </li>
                  </ul>
                </li>
                <li>
                  How We Use Your Information
                  <ul>
                    <li>
                      To Process Orders: We use your personal information to process and fulfill your orders.
                    </li>
                    <li>
                      To Communicate: We use your contact information to send you updates about your order, respond to inquiries, and send promotional materials if you have opted in.

                    </li>
                    <li>
                      To Improve Our Services: We analyze non-personal information to understand user behavior and enhance our website’s performance.

                    </li>
                  </ul>
                </li>
                <li>
                  Information Sharing

                  <ul>
                    <li>
                      Third-Party Service Providers: We may share your information with third-party service providers who assist us in operating our website, processing payments, and delivering orders.

                    </li>
                    <li>
                      Legal Requirements: We may disclose your information if required by law or to protect our rights.


                    </li>
                  </ul>
                </li>
                <li>
                  Data Security
                  <ul>
                    <li>
                      We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                    </li>

                  </ul>
                </li>
                <li>
                  Your Rights
                  <ul>
                    <li>
                      Access and Correction: You have the right to access and correct your personal information. You can update your account details through our website.
                    </li>
                    <li>
                      Opt-Out: You can opt-out of receiving promotional emails by following the unsubscribe instructions in the emails.
                    </li>
                  </ul>
                </li>
                <li>
                  Changes to This Policy
                  <ul>
                    <li>
                      We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised date will be indicated at the top of the policy.

                    </li>
                  </ul>
                </li>
              </ol>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="refund" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Refund Policy:</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ul>
                <li>
                  All purchases made on the https://www.veminds.com/ platform are final and non-refundable. Once a payment is completed, no refunds, cancellations, or chargebacks will be processed under any circumstances.

                </li>
                <li>
                  We recommend thoroughly reviewing all service details before purchasing. For any issues with the service, our team is available to assist and address concerns at infoveminds@gmail.com
                </li>
                <li>
                  By completing a transaction, you agree to this policy.
                </li>
              </ul>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Footer
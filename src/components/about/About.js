import React, { useEffect, useState } from 'react';
import styles from './About.module.css';

function About() {
  const [animate, setAnimate] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setAnimate(true);
  }, []);

  const mentors = [
    {
      name: 'John Doe',
      designation: 'Senior Mentor, Technology',
      image: 'https://res.cloudinary.com/dkasinto0/image/upload/v1726806341/logo-Ve-Minds_bfc8ut.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        facebook: 'https://facebook.com',
      }
    },
    {
      name: 'Jane Smith',
      designation: 'Lead Mentor, Leadership',
      image: 'https://res.cloudinary.com/dkasinto0/image/upload/v1726806341/logo-Ve-Minds_bfc8ut.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        facebook: 'https://facebook.com',
      }
    },
    {
      name: 'Michael Lee',
      designation: 'Expert Mentor, Project Management',
      image: 'https://res.cloudinary.com/dkasinto0/image/upload/v1726806341/logo-Ve-Minds_bfc8ut.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        facebook: 'https://facebook.com',
      }
    }
  ];

  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.title}>Our Mentors</h2>
      <div className={`${styles.mentorCards} ${animate ? styles.animateCards : ''}`}>
        {mentors.map((mentor, index) => (
          <div key={index} className={styles.mentorCard}>
            <img src={mentor.image} alt={mentor.name} className={styles.mentorImage} />
            <h3>{mentor.name}</h3>
            <p>{mentor.designation}</p>
            <div className={styles.socialIcons}>
              <a href={mentor.social.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin">linkedIn</i>
              </a>
              <a href={mentor.social.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter">twitter</i>
              </a>
             
              <a href={mentor.social.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;



import React, { useState } from 'react';
import jsPDF from 'jspdf';
import styles from './About.module.css';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon

function About() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedIn: '', // Add LinkedIn state
    education: [{ course: '', cgpa: '', stream: '' }],
    projects: [{ title: '', description: '' }],
    skills: [''], // Array for skills initialized with one empty string
    photo: null,
  });

  // Edit mode states
  const [editMode, setEditMode] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
    linkedIn: false, // Add edit mode for LinkedIn
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toggle edit mode for a specific field
  const toggleEdit = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({ ...prevData, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle education changes
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index][name] = value;
    setFormData((prevData) => ({ ...prevData, education: updatedEducation }));
  };

  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { course: '', cgpa: '', stream: '' }],
    }));
  };

  // Handle project changes
  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = [...formData.projects];
    updatedProjects[index][name] = value;
    setFormData((prevData) => ({ ...prevData, projects: updatedProjects }));
  };

  const addProject = () => {
    setFormData((prevData) => ({
      ...prevData,
      projects: [...prevData.projects, { title: '', description: '' }],
    }));
  };

  // Handle skill changes
  const handleSkillChange = (index, e) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = e.target.value;
    setFormData((prevData) => ({ ...prevData, skills: updatedSkills }));
  };

  const addSkill = () => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, ''],
    }));
  };

  // Handle LinkedIn input change
  const handleLinkedInChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      linkedIn: value,
    }));
  };

  return (
    <div className={styles.resumeContainer}>
      <form className={styles.form}>
        <div className={styles.topSection}>
          {/* Editable Details Section */}
          <div className={styles.topDetails}>
            {/* Name */}
            {editMode.name ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => toggleEdit('name')}
                autoFocus
                placeholder="Full Name" // Add placeholder
              />
            ) : (
              <h1 onClick={() => toggleEdit('name')}>{formData.name || 'Full Name'}</h1>
            )}
            <div className={styles.contactDetails}>
              {/* Email */}
              <EmailIcon />
              {editMode.email ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => toggleEdit('email')}
                  autoFocus
                  placeholder="Email" // Add placeholder
                />
              ) : (
                <p onClick={() => toggleEdit('email')}>{formData.email || 'Email'}</p>
              )}
              <LocalPhoneIcon />
              {/* Phone */}
              {editMode.phone ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={() => toggleEdit('phone')}
                  autoFocus
                  placeholder="Mobile" // Add placeholder
                />
              ) : (
                <p onClick={() => toggleEdit('phone')}>{formData.phone || 'Mobile'}</p>
              )}
            </div>
            {/* Address */}
            <div className={styles.contactDetails}>
              <LocationOnIcon />
              {editMode.address ? (
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  onBlur={() => toggleEdit('address')}
                  autoFocus
                  placeholder="Address" // Add placeholder
                />
              ) : (
                <p onClick={() => toggleEdit('address')}>{formData.address || 'Address'}</p>
              )}

              {/* LinkedIn Profile */}

              <LinkedInIcon />
              {editMode.linkedIn ? (
                <input
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleLinkedInChange}
                  onBlur={() => toggleEdit('linkedIn')}
                  autoFocus
                  placeholder="LinkedIn Profile" // Add placeholder
                />
              ) : (
                <p onClick={() => toggleEdit('linkedIn')}>{formData.linkedIn || 'LinkedIn'}</p>
              )}
            </div>

          </div>

          {/* Image Upload Section */}
          <div className={styles.photoUpload}>
            {formData.photo ? (
              <img
                src={formData.photo}
                alt="Profile"
                className={styles.profilePhoto}
                onClick={() => document.getElementById('imageUpload').click()}
              />
            ) : (
              <div
                className={styles.photoPlaceholder}
                onClick={() => document.getElementById('imageUpload').click()}
              >
                Upload Photo
              </div>
            )}
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
              className={styles.uploadInput}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        <div className={styles.skillSection}>
          {/* Left Column for Education and Projects */}
          <div className={styles.leftColumn}>
            <h2>Education</h2>
            <ul>
              {formData.education.map((edu, index) => (
                <li>
                  <div key={index} className={styles.educationEntry}>
                    <input
                      type="text"
                      name="course"
                      value={edu.course}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder="Course"
                      className={styles.courseInput}
                    />
                    <div className={styles.cgpaStreamContainer}>
                      <input
                        type="text"
                        name="cgpa"
                        value={edu.cgpa}
                        onChange={(e) => handleEducationChange(index, e)}
                        placeholder="CGPA"
                        className={styles.cgpaInput}
                      />
                      <input
                        type="text"
                        name="stream"
                        value={edu.stream}
                        onChange={(e) => handleEducationChange(index, e)}
                        placeholder="Stream"
                        className={styles.streamInput}
                      />
                    </div>
                  </div>
                </li>

              ))}
            </ul>
            <button className='btn btn-primary' type="button" onClick={addEducation}>+ Add Education</button>
            <hr />

            <h2>Projects</h2>
            <ul>
              {formData.projects.map((project, index) => (
                <li>
                  <div key={index} className={styles.projectEntry}>
                    <input
                      type="text"
                      name="title"
                      value={project.title}
                      onChange={(e) => handleProjectChange(index, e)}
                      placeholder="Project Title"
                    />
                    <textarea
                      name="description"
                      value={project.description}
                      onChange={(e) => handleProjectChange(index, e)}
                      placeholder="Project Description"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <button className='btn btn-primary' type="button" onClick={addProject}>+ Add Project</button>
          </div>

          {/* Right Column for Skills */}
          <div className={styles.rightColumn}>
            <h2>Skills</h2>
            <div className={styles.skillEntry}>
              {formData.skills.map((skill, index) => (
                <input
                  key={index}
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e)}
                  placeholder="Skill"
                />
              ))}
              <button className='btn btn-primary' type="button" onClick={addSkill}>+ Add Skill</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default About;



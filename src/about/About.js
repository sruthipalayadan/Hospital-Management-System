import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.abox}>
      <h1>
        <strong style={{ color: "green" }}>ABOUT US</strong>
      </h1>
      <br></br>
      <p>
        <h4>Welcome to Meditech Hospital</h4>
        <p>
          Meditech Hospital is a cornerstone of healthcare in our small town,
          providing top-notch medical services with a personal touch. Since our
          founding in [Year], we have grown to meet the needs of our community
          through compassionate and quality care.
        </p>
        <br></br>
        <p>
          <h4>Our Services</h4>
        </p>
        <p>
          Emergency Care: 24/7 emergency services. Inpatient and Outpatient
          Services: Comprehensive care, diagnostic imaging, and lab tests.
          Maternity and Childcare: Care for mothers and children. Specialty
          Clinics: Cardiology, orthopedics, gastroenterology, and more.
          Preventive Care: Wellness programs and vaccinations.
        </p>
        <br></br>
        <p>
          <h4>Our History</h4>
        </p>
        <p>
          Meditech Hospital was established in 2015 with a vision to serve the
          residents of our town and surrounding areas. Over the years, we have
          grown and evolved to meet the changing healthcare needs of our
          community. From our humble beginnings, we have expanded our
          facilities, introduced advanced medical technologies, and assembled a
          team of highly skilled healthcare professionals.
        </p>
        <br></br>
        <p>
          <h4>Our Team</h4>
        </p>
        <p>
          Our team includes experienced physicians, surgeons, nurses, and
          support staff dedicated to providing personalized care.
        </p>
        <p>
          <h4>Community Involvement</h4>
        </p>
        <p>
          We actively engage in community health initiatives and educational
          programs to promote wellness.
        </p>
        <p>
          We look forward to being your trusted healthcare partner. Thank you
          for choosing Meditech Hospital.
        </p>
      </p>
    </div>
  );
}
export default About;

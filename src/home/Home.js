import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.abox}>
      
      <h1>
        <strong style={{ color: "green" }}>Your Health, Our Priority</strong>
      </h1>
      <br></br>
      <p>
        <h4>Quality services with special focus on patient safety</h4>
        <p>
          Sreechand Speciality Hospital is an integrated hospital serving
          patients in Kannur, Kerala. Born through the vision of K S group to
          provide healthcare services where innovation and quality meets care
          and affordability. Combining the strengths of employees and physicians
          along with advanced practioners who serves our patients and community
          upholding our mission to make a healthy difference in people’s lives.
          Sreechand Speciality Hospital is guided by the values , quality and
          leadership provided by the KS group who have more than 6 decades of
          experience in successfully handling various business activities.
        </p>
        <br></br>
        <p>
          <img style={{ width:800,height:600,marginLeft:160}} src="https://media.istockphoto.com/id/1344779917/vector/medical-center-hospital-building-vector-design.jpg?s=612x612&w=0&k=20&c=_sZByueZhEZbK2WjQz1jqXy1_Rr5jYkgiVBj-2ls44s="></img>
        </p>
        <p>
          <h4 >Our Services</h4>
        </p>
        <ul  >
          <li>
            Emergency Services: Immediate care for urgent medical conditions.
          </li>
          <li>Inpatient Care: Quality care with comfortable facilities.</li>
          <li>
            Outpatient Services: Convenient diagnostic and treatment services.{" "}
          </li>
          <li>Specialty Clinics: Access to specialists in various fields.</li>
          <li>
            Maternity and Childcare: Specialized care for mothers and children.
          </li>
          <li>Preventive Care:Wellness programs and health screenings.</li>
        </ul>
        <br></br>

        <p>
          We look forward to serving you and ensuring your health and
          well-being. For any additional inquiries or to schedule an
          appointment, feel free to contact us.
        </p>
        <br></br>
      </p>
    </div>
  );
}
export default Home;

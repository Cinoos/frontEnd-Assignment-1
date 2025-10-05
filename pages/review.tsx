import React, { useState } from "react";
import Navbar from "./navbar";
import styles from "../styles/question.module.css";  // Adjust path as needed

function About() {
  const [submitted, setSubmitted] = useState(false);


  function handleSubmit(e ) {
    e.preventDefault();
    if (e.target[0].value == '')
    {
      setSubmitted(false);
    }
    else
    {
      setSubmitted(true);
    }
    
  }

  return (
    <div>

    <Navbar />
    <div className={styles.gameboard}>
      <h2 style={{ textAlign: "center", color: "#DBEDF3",fontSize:"2rem" }}>About This App</h2>
      <p style={{ textAlign: "center", color: "#DBEDF3" }}>
        Thank you for playing Nico's Quizeria
      </p>

      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <label style={{ color: "#DBEDF3", fontWeight: "bold" }}>Your feedback:</label><br />
        <input type="text" className={styles.formInput}
        /><br />
        <button
          type="submit"
          className={styles.submitButton}
        >
          Submit
        </button>
      </form>

        <p style={{ color: "#F7C59F", fontWeight: "bold", marginTop: "20px" }}>
          {submitted?"Thanks for your feedback!" : "you left it empty"}
        </p>
     
    </div>
    </div>
  );
}

export default About;

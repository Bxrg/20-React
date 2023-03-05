import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "600px" }}
            src="./assets/images/me.jpg"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Noah Borg"
          />
          <p style={{ fontSize: "30px", fontWeight: "bolder" }}>
            Hello, my name is Noah Borg and I am a graduate of Michigan State University's Full-Stack programming bootcamp. While attending, I learned many skills, and consider my stregnths to be in JavaScript and React! However, I also have experience in HTML, CSS, MySQL, MongoDB, and many other things! I am a eager coder, driven by my passion to further my understanding of code. 
          </p>
          <p style={{ fontSize: "30px", fontWeight: "bolder" }}>
            Without focusing on code, some of my other strengths include proficiency in computers, processing of information, and the ability to multi-task while prioritizing more important issues. I also consider myself to be a strong member of a team, capable of working together with other people!
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
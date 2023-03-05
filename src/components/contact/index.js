import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
        <h2 style={{fontWeight: "bold"}}> My Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src="./assets/images/me.png"
            class="pr-4 pb-3 img-fluid"
            alt="Noah Borg"
          />
          <h4 style={{fontWeight: "bolder"}}>
          Recently, I graduated from Michigan State Univeristy Full-Stack Coding Bootcamp. Now, I am working to further my skills with coding by working on my own projects. I am currently on an active job search, looking for a job as a junior web developer and hoping to make a company thrive with my abilities. Please feel free to contact me at either my phone number, or email, which ever is more convenient for you! I will do my best to respond as soon as possible.
          </h4>
          <hr className="hr-light w-25" />
          <h3 style={{fontWeight: "bolder "}}>CELL PHONE</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:313-398-9947"><MDBIcon icon="phone-alt" /> 313-398-9947</a>
          <hr className="hr-light w-25" />
          <h3 style={{fontWeight: "bolder"}}>EMAIL</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:noahborg122801@yahoo.com"><MDBIcon icon="envelope" />noahborg122801@yahoo.com</a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
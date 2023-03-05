import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="./assets/images/Weather_Challenge"
            alt="Weather App"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">What's the Weather?</MDBCardTitle>
            <MDBCardText>
             This is a basic weather app, which uses weather API to get information and post it for weather around the world. Just type in a city and get a 5-day forecast in seconds.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Bxrg/Weather-Challenge-06"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="./assets/images/README_Gen.png"
            alt="ReadME Generator"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">ReadME Generator</MDBCardTitle>
            <MDBCardText>
              An app that allows coders of all levels to quickly develop professional looking README files. 
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Bxrg/ReadMe-Generator-Challenge-09-"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src="./assets/images/E-Commerce"
            alt="E-Commerce Back-End"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">E-Commerce Back-End</MDBCardTitle>
            <MDBCardText>
            A console based app that allows a store to update its stock quickly and accurately.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Bxrg/Challenge-13-E-Commerce-Back-End"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="./assets/images/Note_Taker"
            alt="Note Taker"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Note Taker</MDBCardTitle>
            <MDBCardText>
            An Application allowing anyone to quickly write, delete, and view notes. Whether it's for school, or as a TODO list, store any note here!
            </MDBCardText>
            <MDBBtn
              href="https://github.com/Bxrg/Challenge-11--Note-Taker"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
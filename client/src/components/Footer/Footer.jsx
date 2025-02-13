
import React from "react";
import "./Footer.css";
import styled from "styled-components"; // Ensure you have styled-components installed

const FooterContainer = styled.div`
  padding: 20px;
  
  color: white;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
`;

const Heading = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  display: block;
  color: #ddd;
  text-decoration: none;
  margin-bottom: 5px;
  &:hover {
    color: #fff;
  }
`;

export const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <Row>
          
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahmedabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f"></i> Facebook
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram"></i> Instagram
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter"></i> Twitter
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube"></i> YouTube
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </footer>
  );
};

import React from 'react';
import classes from "../styles/Footer.module.css";
import Container from "./Container";

const Footer = () => {
    return (
        <footer className={classes.footer}>
          <Container>
              <div className={classes.footerInner}>
                  <h4>© Random Gallery</h4>
                  <h4>Made by Ivan Peshikov in 2023</h4>
              </div>
          </Container>
        </footer>
    );
};

export default Footer;
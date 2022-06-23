import React from "react";
import FooterDetails from "./FooterDetails";
import "../../Sass/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <section>
      <div className="d-flex">
        <div className="footer">
          <section className="MLogo">
            <a href="/home">MOON</a>
            <p>
              We are a team of designers and developers that create high quality
              Magento.
            </p>
          </section>
          <section className="phonesection">
            <div className="d-flex">
              <div className="phone-icon">
                <FontAwesomeIcon icon="fa-solid fa-phone-volume" />
              </div>
              <div>
                <p>Need Help?</p>
                <p>(+800) 345 678, (+800) 123 456</p>
              </div>
            </div>
          </section>
          <section className="social-icon">
            <FontAwesomeIcon
              className="icon"
              icon="fa-brands fa-facebook-square"
            />
            <FontAwesomeIcon
              className="icon"
              icon="fa-brands fa-twitter-square"
            />
            <FontAwesomeIcon
              className="icon"
              icon="fa-brands fa-instagram-square"
            />
            <FontAwesomeIcon className="icon" icon="fa-brands fa-youtube" />
          </section>
          <p>Copyright © 2022 MOON. All rights reserved</p>
        </div>
        <FooterDetails />
      </div>
    </section>
  );
}

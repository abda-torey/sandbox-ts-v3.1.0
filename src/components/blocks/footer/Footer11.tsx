"use client";
import { useState, useEffect } from "react";
// GLOBAL CUSTOM COMPONENTS
import SocialLinks from "components/reuseable/SocialLinks";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM DATA
import footerNav from "data/footer";

export default function Footer11() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial value
    setIsMobile(window.innerWidth < 768);

    // Update on resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-light">
      <div className="container pb-13 pb-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <img
                alt="logo"
                srcSet="/img/footerlogoblue.png"
                style={{
                  height: isMobile ? "18px" : "25px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />

              <p className="mb-4 mt-4">
                © 2020 BluePeakData. <br className="d-none d-lg-block" />
                All rights reserved.
              </p>

              <SocialLinks className="nav social" />
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title mb-3">Get in Touch</h4>
              <address className="pe-xl-15 pe-xxl-17">
                1920 McKinney Ave, Dallas, TX 75201, United States
              </address>
              <NextLink
                title="info@bluepeakdata.com"
                href="mailto:#"
                className="link-body"
              />
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title mb-3">Learn More</h4>
              <ul className="list-unstyled text-reset mb-0">
                {footerNav.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-12 col-lg-3">
            <div className="widget">
              <h4 className="widget-title mb-3">Work With Us</h4>
              <p className="mb-5">
                Ready to transform your data into business insights? Let's talk
                about your project.
              </p>

              <NextLink
                title="Request a Consultation"
                href="/#contact"
                className="btn btn-primary btn-gradient gradient-1"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
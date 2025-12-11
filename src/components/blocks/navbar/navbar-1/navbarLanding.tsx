"use client";

import { Fragment, useRef, useEffect } from "react";
import clsx from "clsx";
import useSticky from "hooks/useSticky";
import NextLink from "components/reuseable/links/NextLink";
import Link from "next/link";

export default function NavbarLanding({
  stickyBox = true,
  logoAlt = "logo-dark",
  navClassName = "navbar navbar-expand-lg transparent navbar-light",
}) {
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // Load Bootstrap JS only on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically import Bootstrap
      const loadBootstrap = async () => {
        try {
          await import("bootstrap/dist/js/bootstrap.bundle.min.js" as any);
        } catch (error) {
          console.error("Failed to load Bootstrap:", error);
        }
      };
      
      loadBootstrap();
    }
  }, []);

  const logo = sticky ? "logomine" : logoAlt;
  const navbarClassName = clsx(
    sticky ? navClassName.replace("navbar-dark", "navbar-light") : navClassName,
    { "navbar-clone fixed navbar-stick": sticky }
  );

  return (
    <Fragment>
      {stickyBox && (
        <div
          style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }}
        />
      )}

      <nav ref={navbarRef} className={navbarClassName}>
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link href="/" className="navbar-brand">
            {/* Mobile - show only on screens smaller than md (768px) */}
            <img
              alt="logo"
              srcSet="/img/highrestransparentlogo.png"
              className="d-block d-md-none"
              style={{
                height: "32px",
                width: "auto",
                objectFit: "contain",
              }}
            />
            {/* Desktop - show only on screens md (768px) and larger */}
            <img
              alt="logo"
              srcSet="/img/highrestransparentlogo.png"
              className="d-none d-md-block"
              style={{
                height: "40px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* Toggle Button (Mobile only) */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas-nav"
            aria-controls="offcanvas-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas / Menu */}
          <div
            id="offcanvas-nav"
            data-bs-scroll="true"
            className="offcanvas offcanvas-start d-lg-flex flex-lg-grow-1 align-items-lg-center justify-content-lg-end navbar-collapse"
          >
            {/* Header for Mobile */}
            <div className="offcanvas-header d-lg-none">
              <h3 className="text-white fs-30 mb-0">Menu</h3>
              <button
                type="button"
                aria-label="Close"
                data-bs-dismiss="offcanvas"
                className="btn-close btn-close-white ms-auto"
              />
            </div>

            {/* Menu Items */}
            <div className="offcanvas-body d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-end">
              <ul className="navbar-nav d-flex flex-column flex-lg-row">
                <li className="nav-item">
                  <NextLink href="/" title="Home" className="nav-link" />
                </li>
                <li className="nav-item">
                  <NextLink href="/#aboutus" title="About" className="nav-link" />
                </li>
                <li className="nav-item">
                  <NextLink href="/#services" title="Services" className="nav-link" />
                </li>
                <li className="nav-item">
                  <NextLink href="/#portfolio" title="Portfolio" className="nav-link" />
                </li>
                <li className="nav-item">
                  <NextLink href="/#contact" title="Contact" className="nav-link" />
                </li>
              </ul>
            </div>
          </div>

          {/* Optional right-side icons */}
          {/* <HeaderRight /> */}
        </div>
      </nav>
    </Fragment>
  );
}
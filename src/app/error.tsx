"use client";

import { Fragment } from "react";
// -------- CUSTOM COMPONENTS -------- //
import { Footer11 } from "components/blocks/footer";
import NavbarLanding from "components/blocks/navbar/navbar-1/navbarLanding";
import FigureImage from "components/reuseable/FigureImage";
import NextLink from "components/reuseable/links/NextLink";

// ==============================================================
interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}
// ==============================================================

export default function NotFound({ error, reset }: Props) {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <NavbarLanding
          navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
        />  
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-9 col-xl-8 mx-auto">
                <FigureImage width={800} height={316} className="mb-10" src="/img/illustrations/404.png" />
              </div>

              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                <h1 className="mb-3">Oops! Page Not Found.</h1>
                <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
                  The page you are looking for is not available or has been moved. Try a different page or go to
                  homepage with the button below.
                </p>

                <NextLink href="/" title="Go to Homepage" className="btn btn-primary rounded-pill" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer11 />
    </Fragment>
  );
}

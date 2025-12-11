import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Blog4 } from "components/blocks/blog";
import { Hero18 } from "components/blocks/hero";
import { Footer11 } from "components/blocks/footer";
import { Contact11 } from "components/blocks/contact";
import { Services20 } from "components/blocks/services";
import { About17, About18, About19 } from "components/blocks/about";
import NavbarLanding from "components/blocks/navbar/navbar-1/navbarLanding";
import { Portfolio10 } from "components/blocks/portfolio";
export default function Demo18() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper">
        <NavbarLanding navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none"/>
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero18 />

        <section className="wrapper bg-light">
          <div className="container pt-14 pt-md-17 pb-14 pb-md-18">
            {/* ========== what we do section ========== */}
            <Services20 />

            {/* ========== have perfect section ========== */}
            <About17 />

            {/* ========== what makes section ========== */}
            <About18 />
          </div>
        </section>

        <section className="wrapper bg-light">
          {/* ========== facts section ========== */}
          {/* <Facts12 /> */}

          <div className="container">
            {/* ========== testimonial section ========== */}
            {/* <Testimonial15 /> */}

            {/* ========== case study section ========== */}
            {/* <Blog4 /> */}

            {/* ========== who are we section ========== */}
            <Portfolio10 />

            {/* ========== contact section ========== */}
            <Contact11 />
          </div>
        </section>

        
      </main>

      {/* ========== footer section ========== */}
      <Footer11 />
    </Fragment>
  );
}

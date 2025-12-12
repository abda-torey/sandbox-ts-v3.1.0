"use client";

import { Fragment, useState, useEffect } from "react";
import dynamic from "next/dynamic";
// GLOBAL CUSTOM COMPONENTS
import { Footer11 } from "components/blocks/footer";
import FigureImage from "components/reuseable/FigureImage";
import NextLink from "components/reuseable/links/NextLink";
import NavbarLanding from "components/blocks/navbar/navbar-1/navbarLanding";

// Dynamically import LightBox with no SSR
const LightBox = dynamic(() => import("components/LightBox"), {
  ssr: false
});

export default function ProjectDetails() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Fragment>
      {/* USED FOR IMAGE LIGHTBOX - Only render on client */}
      {mounted && <LightBox />}

      {/* ========== HEADER SECTION ========== */}
      <header className="wrapper bg-soft-primary">
        <NavbarLanding navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none" />
      </header>

      <main className="content-wrapper">
        {/* ========== HERO SECTION ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <NextLink title="Data Engineering" href="#" className="hover" />
                  </div>

                  <h1 className="display-1 mb-3">
                    Supply Chain Insights Platform for a Global Distributor
                  </h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                    Developed an end-to-end Azure data solution integrating Power BI, Data Lake, and Data Factory
                    to monitor logistics KPIs and optimize delivery performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PROJECT DETAILS SECTION ========== */}
        <section className="wrapper bg-light wrapper-border">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-12">
                <article className="mt-n21 text-center">
                  {/* SINGLE FEATURE IMAGE */}
                  <div className="mx-auto" style={{ maxWidth: "900px" }}>
                    <FigureImage
                      width={400}
                      height={240}
                      src="/img/photos/pipeline2.jpg"
                      className="rounded mb-10 shadow-lg"
                    />
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="col-md-10 offset-md-1 text-justify">
                    <h2 className="mb-4 text-center">Project Overview</h2>
                    <p>
                      The project aimed to unify and automate logistics data management for a global distributor
                      struggling with fragmented systems and delayed reporting. We designed and deployed an
                      Azure-based data platform that consolidated operational data across ERP and IoT sources,
                      enabling real-time performance monitoring and data-driven decision-making across global
                      supply chains.
                    </p>

                    <h2 className="mt-6 mb-4">Client Needs</h2>
                    <p>
                      The client needed real-time visibility into logistics KPIs and delivery performance to
                      identify inefficiencies and reduce operational delays.
                    </p>

                    <h2 className="mt-6 mb-4 text-center">Challenges</h2>
                    <ul
                      style={{
                        paddingLeft: "1.2rem",
                        marginBottom: "1.5rem",
                        listStylePosition: "inside"
                      }}
                    >
                      <li>Data was siloed across ERP and IoT systems</li>
                      <li>Manual reporting and delayed insights</li>
                      <li>Lack of centralized data governance</li>
                    </ul>

                    <h2 className="mt-6 mb-4 text-center">Solution</h2>
                    <p>We implemented a modern, cloud-native Azure data pipeline that leveraged:</p>
                    <ul
                      style={{
                        paddingLeft: "1.2rem",
                        marginBottom: "1.5rem",
                        listStylePosition: "inside"
                      }}
                    >
                      <li>
                        <strong>Azure Data Factory</strong> for orchestration
                      </li>
                      <li>
                        <strong>Databricks + Spark</strong> for scalable transformation
                      </li>
                      <li>
                        <strong>Delta Lake</strong> for versioned, high-quality data storage
                      </li>
                      <li>
                        <strong>Power BI</strong> dashboards for real-time insights
                      </li>
                    </ul>

                    <h2 className="mt-6 mb-4 text-center">Outcome</h2>
                    <ul
                      style={{
                        paddingLeft: "1.2rem",
                        marginBottom: "1.5rem",
                        listStylePosition: "inside"
                      }}
                    >
                      <li>70% faster reporting cycle</li>
                      <li>Unified source of truth for logistics operations</li>
                      <li>Improved delivery efficiency and reduced bottlenecks</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ========== NAVIGATION SECTION ========== */}
        {/* <ProjectDetailsNavigation /> */}
      </main>

      {/* ========== FOOTER SECTION ========== */}
      <Footer11 />
    </Fragment>
  );
}
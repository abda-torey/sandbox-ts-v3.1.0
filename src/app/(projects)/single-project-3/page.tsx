import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Footer11 } from "components/blocks/footer";
import FigureImage from "components/reuseable/FigureImage";
import NextLink from "components/reuseable/links/NextLink";
import NavbarLanding from "components/blocks/navbar/navbar-1/navbarLanding";

export default function ProjectDetails3() {
  return (
    <Fragment>
      <header className="wrapper bg-soft-primary">
        <NavbarLanding navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none" />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-22 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <span className="text-uppercase text-muted">Healthcare Data Integration</span>
                  </div>

                  <h1 className="display-1 mb-3">
                    Data Warehouse Modernization for a Healthcare Tech Company
                  </h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                    Migrated legacy SQL Server data flows to Azure Data Factory and modernized the enterprise data
                    warehouse, improving reliability and time-to-insight for clinical analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light wrapper-border">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-12">
                <article className="mt-n21 text-center">
                  <div className="mx-auto" style={{ maxWidth: "900px" }}>
                    <FigureImage
                      width={400}
                      height={240}
                      src="/img/photos/datawarehousemodernization.jpg"
                      className="rounded mb-10 shadow-lg"
                    />
                  </div>

                  <div className="col-md-10 offset-md-1 text-justify">
                    <h2 className="mb-4 text-center">Project Overview</h2>
                    <p>
                      We re-architected the client&apos;s data platform to use Azure Data Factory, Azure SQL, and
                      Power BI, replacing fragile SSIS packages and manual processes with robust, parameterized
                      pipelines and reusable data models.
                    </p>

                    <h2 className="mt-6 mb-4 text-center">Key Outcomes</h2>
                    <ul
                      style={{
                        paddingLeft: "1.2rem",
                        marginBottom: "1.5rem",
                        listStylePosition: "inside"
                      }}
                    >
                      <li>Reduced ETL failures and re-runs through centralized orchestration.</li>
                      <li>Improved data quality and lineage for regulatory reporting.</li>
                      <li>Enabled self-service analytics for analysts and product teams.</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer11 />
    </Fragment>
  );
}



import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Footer11 } from "components/blocks/footer";
import FigureImage from "components/reuseable/FigureImage";
import NextLink from "components/reuseable/links/NextLink";
import NavbarLanding from "components/blocks/navbar/navbar-1/navbarLanding";

export default function ProjectDetails2() {
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
                    <span className="text-uppercase text-muted">Retail Analytics</span>
                  </div>

                  <h1 className="display-1 mb-3">
                    Sales Forecasting Dashboard for a Major U.S. Retailer
                  </h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                    Designed and deployed Power BI dashboards integrating Azure Synapse data pipelines to enhance
                    sales forecasting accuracy and performance insights across hundreds of stores.
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
                      src="/img/photos/myb4.jpg"
                      className="rounded mb-10 shadow-lg"
                    />
                  </div>

                  <div className="col-md-10 offset-md-1 text-justify">
                    <h2 className="mb-4 text-center">Project Overview</h2>
                    <p>
                      The client needed a unified analytics layer for daily and weekly sales performance, segmented by
                      region, store, and product category. We implemented Azure Synapse pipelines and Power BI models
                      that automated data ingestion, transformation, and reporting.
                    </p>

                    <h2 className="mt-6 mb-4 text-center">Key Outcomes</h2>
                    <ul
                      style={{
                        paddingLeft: "1.2rem",
                        marginBottom: "1.5rem",
                        listStylePosition: "inside"
                      }}
                    >
                      <li>Improved forecasting accuracy and demand planning.</li>
                      <li>Self-service analytics for merchandisers and regional leaders.</li>
                      <li>Faster decision-making using near real-time sales data.</li>
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



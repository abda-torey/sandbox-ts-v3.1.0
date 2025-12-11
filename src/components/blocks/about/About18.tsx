import CountUp from "components/reuseable/CountUp";
// CUSTOM ICON COMPONENT
import CloudGroup from "icons/solid-duo/CloudGroup";
import { Cloud, Database, BarChart3, ShieldCheck, Workflow } from "lucide-react";
export default function About18() {
  return (
    <div className="row gx-md-8 gy-10 align-items-center">
      <div className="col-lg-6 offset-lg-1 order-lg-2 position-relative">
        <figure className="rounded">
          <img className="img-fluid" src="/img/photos/aboutme.jpg" srcSet="/img/photos/aboutme@2x.jpg 2x" alt="" />
        </figure>

        <div
          className="card shadow-lg position-absolute d-none d-md-block"
          style={{ top: "15%", left: "-7%" }}
        >
          <div className="card-body py-4 px-5">
            <div className="d-flex flex-row align-items-center">
              <div className="me-3">
                <Workflow size={36} color="#2563EB" />
              </div>
              <div>
                <h3 className="fs-25 counter mb-0 text-nowrap">
                  <CountUp end={120} suffix="+" />
                </h3>
                <p className="fs-16 lh-sm mb-0 text-nowrap">End-to-End Pipelines</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="card shadow-lg position-absolute text-center d-none d-md-block"
          style={{ bottom: "10%", left: "-10%" }}>
          <div className="card-body p-6">
            <ShieldCheck size={40} color="#10B981" className="mb-3" />
            <h4 className="mb-0">Enterprise-Grade Security</h4>
          </div>
        </div>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">Why Partner With Us?</h2>
        <h3 className="display-4 mb-4 me-lg-n5">Building end-to-end Microsoft data solutions that unify your business intelligence.</h3>
        
      <p className="mb-6">
          We design and implement modern data architectures that connect every layer of your
          analytics ecosystem — from ingestion and transformation to visualization and governance.
          Our consultancy specializes in Microsoft’s full data stack, helping you harness insights faster.
        </p>
        <ul className="icon-list bullet-bg bullet-soft-primary">
          <li>
            <i className="uil uil-check" />
            Ingest and orchestrate data pipelines using Azure Data Factory (ADF).
          </li>
          <li>
            <i className="uil uil-check" />
            Transform and model data efficiently with Azure Databricks and Synapse Analytics.
          </li>
          <li>
            <i className="uil uil-check" />
            Store and manage large-scale data using Azure Data Lake and SQL Database.
          </li>
          <li>
            <i className="uil uil-check" />
            Visualize business insights with interactive Power BI dashboards.
          </li>
          <li>
            <i className="uil uil-check" />
            Maintain governance, lineage, and compliance with Microsoft Purview.
          </li>
        </ul>
      </div>
    </div>
  );
}

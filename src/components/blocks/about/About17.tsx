import ListColumn from "components/reuseable/ListColumn";
// CUSTOM DATA
import { aboutList1 } from "data/about";

export default function About17() {
  return (
    <div className="row gx-3 gy-10 mb-15 mb-md-18 align-items-center">
      <div className="col-lg-5 offset-lg-1">
        <figure>
          <img className="w-auto" src="/img/illustrations/3d2.png" srcSet="/img/illustrations/3d2@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5 offset-lg-1">
        <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">
          Data Confidence Starts Here
        </h2>
        <h3 className="display-4 mb-4">
          We help businesses unlock the full potential of their data.
        </h3>

        <p className="mb-6">
          Our consultancy empowers organizations to clean, organize, and modernize their data
          using Microsoft’s analytics ecosystem. From Azure data pipelines to Power BI dashboards,
          we design scalable data solutions that drive insights and smarter decisions.
        </p>

        <ListColumn list={aboutList1} />
      </div>
    </div>
  );
}

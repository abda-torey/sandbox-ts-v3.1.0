import { Fragment } from "react";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/portfolio";

export default function Portfolios() {
  return (
    <Fragment>
      
     

      

      <Block id={10}>
        <div className="container pb-13 pb-md-15">
          <All.Portfolio10 />
        </div>
      </Block>

    </Fragment>
  );
}

import { Fragment } from "react";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/services";

export default function Features() {
  return (
    <Fragment>


      <Block id={20}>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n17">
          <All.Services20 />
        </div>
      </Block>

  
    </Fragment>
  );
}

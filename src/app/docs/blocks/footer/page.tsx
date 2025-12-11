import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/footer";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";

export default function Footers() {
  return (
    <Fragment>



      <Block id={11}>
        <div className="pt-15 pt-md-17">
          <All.Footer11 />
        </div>
      </Block>
    </Fragment>
  );
}

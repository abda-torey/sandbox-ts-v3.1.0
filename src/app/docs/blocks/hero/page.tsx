import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/hero";
// LOCAL CUSTOM COMPONENTS
import Block from "./block";

export default function Heros() {
  return (
    <Fragment>
      




      <Block id={18}>
        <div className="pb-13 pb-md-15">
          <All.Hero18 />
        </div>
      </Block>
    </Fragment>
  );
}

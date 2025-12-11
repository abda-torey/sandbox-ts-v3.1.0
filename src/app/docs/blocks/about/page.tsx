import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Block from "./block";
// GLOBAL CUSTOM COMPONENTS
import * as All from "components/blocks/about";

export default function About() {
  return (
    <Fragment>

      <Block id={17} className="pb-13 pb-md-15 mb-n15 mb-md-n18">
        <All.About17 />
      </Block>

      <Block id={18} className="pb-13 pb-md-15">
        <All.About18 />
      </Block>

      <Block id={19} className="pb-13 pb-md-15 mb-n14 mb-md-n18">
        <All.About19 />
      </Block>

     

     
    </Fragment>
  );
}

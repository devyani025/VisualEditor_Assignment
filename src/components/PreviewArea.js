import React, { useContext, useState } from "react";
import CatSprite from "./CatSprite";
import Cloud from "./Common/Cloud";
import { AppContext } from "../App";


export default function PreviewArea() {

  let context = useContext(AppContext)
  return (
    <div id="PreviewArea" >
      <CatSprite />
      {context.showCloud && <Cloud text={context.cloudText} />}
    </div>
  );
}

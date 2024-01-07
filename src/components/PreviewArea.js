import React from "react";
import CatSprite from "./CatSprite";
import Cloud from "./Common/Cloud";

export default function PreviewArea() {
  return (
    <div id="PreviewArea" >
      <CatSprite />
      <Cloud text={"HELLOO!"} />
    </div>
  );
}

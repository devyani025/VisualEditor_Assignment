import React from "react";
import Icon from "./Icon";
import { Block } from "./Common/block";
import { Motions } from "./Motions/Motions";

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      
      <div className="font-bold"> {"Motion"} </div>
      <Motions/>
    </div>
  );
}

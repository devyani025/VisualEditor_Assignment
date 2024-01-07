import React from "react";
import { Motions } from "./Motions/Motions";
import { Looks } from "./Looks/Looks";

export default function Sidebar(props) {
  return (
    <div className="w-65 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"}

        <div className="font-bold"> {"Motion"} 
          <Motions list={props.list} />
        </div>
        <div className="font-bold"> {"Looks"} 
          <Looks list={props.looksList} />
        </div>
      </div >
    </div>
  );
}

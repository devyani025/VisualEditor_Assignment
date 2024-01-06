import React from 'react';
import Editable from './editable';
import Dropdown from './dropdown';

export const Block = (props) => {
  const MainBlock=()=>{

    switch (props.type) {
      case "randomDropdown":
        return RandomDropdown()
        break;
        case "randomDropdown1":
          return RandomBlock()
          break;
    
      default:
        return<></>
        break;
    }
  }
  
  const RandomDropdown=()=>{

    return(
      <>
      <div class="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" onClick={() => props.onclick()}>
      {"Move "}<Dropdown/>{" stepssteps"}
      </div>    
      </>
    )

  }
  const RandomBlock=()=>{
    return (
      <>
    <div class="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" onClick={() => props.onclick()}>
    {"Move "}<Editable/>{" stepssteps"}
    </div>    
    </>
  
    )
  }
  
  return <>{MainBlock()}</>
}

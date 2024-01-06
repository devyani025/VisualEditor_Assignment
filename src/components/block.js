import React from 'react'

export const Block = (props) => {

  const MainBlock=()=>{

    switch (props.type) {
      case "random":
        return RandomBlock()
        break;
    
      default:
        return<></>
        break;
    }
  }
  
  const RandomBlock=()=>{
    return (
      <>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
          {"Move 10 steps"}
      </div>
      </>
  
    )
  }
  
  return <>{MainBlock()}</>
}

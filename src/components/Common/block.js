import React from 'react';
import Editable from './editable';
import Dropdown from './dropdown';
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../DnD/DragTypes';

export const Block = (props) => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.MOTION,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  const [selectedOption, setSelectedOption] = React.useState("mouse");
  const [text, setText] =React.useState('10');


  const MainBlock = () => {
    switch (props.type) {
      case "postionBlock":
        return PositionBlock()
      case "stepsForward":
        return StepsForwardBlock()
      case "randomDropdown1":
        return RandomBlock()
      default:
        return <></>
    }
  }

  const PositionBlock = () => {

    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };
    return (
      <>
        <div ref={drag}
          id="PositionBlock"
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move',
          }} class="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer block" onClick={(e) => { props.onclick(e, selectedOption) }}>
          {"Move "}<Dropdown id="PositionDropdown" selectedOption={selectedOption} onchange={(e) => { handleSelectChange(e) }} />{" stepssteps"}
        </div>
      </>
    )

  }

  const StepsForwardBlock = () => {

    const handleInputChange = (e) => {
      setText(e.target.value);
    };
    return (
      <>
        <div
        id="StepsForwardBlock"
          ref={drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move',
          }}
          className="flex flex-column flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" onClick={(e) => { props.onclick(e, setText) }}>
          {"Move"}
          <Editable  id="StepsForwardEdit" text={text} onchange={(e) => { handleInputChange(e) }} />
          {"steps"}
        </div>
      </>

    )
  }
  const RandomBlock = () => {
    return (
      <>
        <div
          ref={drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move',
          }}
          className="flex flex-column flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
          {"Move"}
          <Editable />
          {"steps"}
        </div>
      </>

    )
  }

  return <>{MainBlock()}</>
}

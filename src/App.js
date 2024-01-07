import React from "react";
import Sidebar from "./components/Sidebar";
import {MidArea }from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import './App.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { lookslist_ , list_ } from "./components/Common/constants";

export default function App() {

 return (
    // html5Backend exposes , html5 -> drag and drop web api
    // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API 
  <DndProvider backend={HTML5Backend}>
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar list={list_} looksList={lookslist_}/>
          <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  </DndProvider>

  );
}

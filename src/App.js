
import React, { Fragment } from 'react'

import './App.css';
import Navbar from './Navigation/Navbar';
import Us1 from './useState/Us1';
import Uform from './useState/Uform';
import Todolist from './useState/Todolist';
import Chatconn from './useEffect/chatconn';
import UE2 from './useEffect/UE2';
import UE3 from './useEffect/UE3';
import UR1 from './useRef/UR1';
import URTimer from './useRef/URTimer';
import Ur3 from './useRef/Ur3';
import Ur4Scroll from './useRef/Ur4Scroll';
import UmPrime from './UseMemo/umPrime';
import Um2 from './UseMemo/Um2';
import Ucb1 from './useCallBack/ucb1';
import UCB3 from './useCallBack/UCB3';
import UCon from './useContext/uCon';
import UCon2 from './useContext/uCon2';
import UCon3 from './useContext/uCon3';
import ULF1 from './useLayoutEffect/uLF1';
import ULF2 from './useLayoutEffect/uLF2';
import ULF3 from './useLayoutEffect/uLF3';

function App() {


  return (
    <div className="App">
      <div style={{ border: "2px solid black" }}>
        <Navbar />
        <h1>Milind</h1>
        <Us1 />
        <br />
        <h1>uForm</h1>
        <Uform />
        <hr />
        <h1>Todolist</h1>
        <Todolist />
        <hr />
        <h4>USeEffect</h4>
        <Chatconn />
      </div>
      <hr />
      <div style={{ border: "2px solid black" }}>
        <h1>USe Effect</h1>
        <UE2 />
        <UE3 name={"Milind"} />
      </div>
      <hr />
      <div style={{ border: "2px solid black" }}>

        <h4>use REF</h4>
        <UR1 />
        <hr />
        <URTimer />
        <Ur3 />
        <Ur4Scroll />
      </div>
      <hr />

      <div style={{ border: "2px solid black" }}>
        <h1>Use Memo</h1>
        <UmPrime />
        <Um2 />
      </div>
      <hr />
      <div style={{ border: "2px solid black" }}>
        <h1>useCall BAck</h1>
        <Ucb1 />
        <hr />
        <UCB3 />
      </div>
      <hr />
      <div style={{ border: "2px solid black" }}>
        <h1>use Context</h1>
        <UCon />
        <hr />
        <UCon2 />
        <UCon3 />
      </div>
      <hr />
      <div style={{ border: "2px solid black" }}>
        <h1>use Layout Effect</h1>
        <ULF1 />
        <h1>this is ULF2</h1>
        <ULF2 />
        <ULF3 />
      </div>

    </div >
  );
}

export default App;

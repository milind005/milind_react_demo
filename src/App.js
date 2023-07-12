
import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './Navigation/Navbar';

import CCOmpo from './ClassComponent/CCOmpo';
import Us1 from './useState/Us1';
import Uform from './useState/Uform';
import Todolist from './useState/Todolist';
import Chatconn from './useEffect/chatconn';
import UE2 from './useEffect/UE2';
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
import MemoFun from './Memo/sample';
import HocMain from './HOC/hocMain';
import URedForm from './useReducer/URedForm';
import URedTodo from './useReducer/URedTodo';
import RWCmain from './ReducerWithContext/RWCmain';
import RRDmain from './React_Router_Dom/RRDmain';
// import CustomhookMain from './CustomHooks/CustomhookMain';

const navObj = {
  "classCompo": false,
  "useState": true,
  "useEffect": false,
  "useREF": false,
  "useMemo": false,
  "useCallBack": false,
  "useContext": false,
  "useLayoutEffect": false,
  "memo": false,
  "Higher_order_fun": false,
  "use_reducer": false,
  "reducer_with_context": false,
  "react_router_dom": false,
  // "CustomhookMain": false
}



function App() {

  const [nav, setNav] = useState(navObj)
  return (
    <div className="App">
      <Navbar navObj={nav} setNav={setNav} />

      {nav.classCompo && <div>

        <CCOmpo /></div>}

      {nav.useState && <div style={{ border: "2px solid black" }}>
        <h1>Milind</h1>
        <Us1 />
        <hr />
        <h1>uForm</h1>
        <Uform />
        <hr />
        <h1>Todolist</h1>
        <Todolist />
        <hr />
      </div>}


      {nav.useEffect && <div style={{ border: "2px solid black" }}>
        <h1>USe Effect</h1>
        <Chatconn />
        <hr />


        <UE2 />
      </div>}


      {nav.useREF && <div style={{ border: "2px solid black" }}>
        <h4>use REF</h4>
        <UR1 />
        <hr />
        <URTimer />
        <hr />
        <Ur3 />
        <hr />
        <Ur4Scroll />
      </div>}


      {nav.useMemo && <div style={{ border: "2px solid black" }}>
        <h1>Use Memo</h1>
        {/* <UmPrime /> */}
        <hr />
        <Um2 />
      </div>}


      {nav.useCallBack && <div style={{ border: "2px solid black" }}>
        <h1>useCall BAck</h1>
        <Ucb1 />
        <hr />
        <UCB3 />
      </div>}


      {nav.useContext && <div style={{ border: "2px solid black" }}>
        <h1>use Context</h1>
        <UCon />
        <hr />
        <UCon2 />
        <hr />
        <UCon3 />
      </div>}


      {nav.useLayoutEffect && <div style={{ border: "2px solid black" }}>
        <h1>use Layout Effect</h1>
        <ULF1 />
        <hr />
        <h1>this is ULF2</h1>
        <ULF2 />
        <hr />
        <ULF3 />
      </div>}

      {
        nav.memo && <div>
          <h1>memo function</h1>
          <p>see in console log it stops rendering child component</p>
          <MemoFun />
        </div>
      }

      {
        nav.Higher_order_fun && <div>
          <h1>Higher order function</h1>
          <HocMain />
        </div>
      }
      {
        nav.use_reducer && <div>
          <h1>use Reducer</h1>
          <URedForm />
          <hr />
          <URedTodo />
        </div>
      }

      {
        nav.reducer_with_context && <div>
          <h1>use Reducer and Context</h1>
          <RWCmain />
        </div>
      }
      {
        nav.react_router_dom && <div>
          <h1>use React Router DOM</h1>

          <BrowserRouter>
            <RRDmain />
          </BrowserRouter>
        </div>
      }
      {/* {
        nav.CustomhookMain && <div>
          <h1>custom hook</h1>

          <BrowserRouter>
            <CustomhookMain />
          </BrowserRouter>
        </div>
      } */}
    </div >
  );
}

export default App;

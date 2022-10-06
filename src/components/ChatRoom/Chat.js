import React, { useRef, useState, PropTypes } from "react";
import "./styles.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import dict from "./dictionnaire";
import Slider from "../Slider/Slider";

import Keyboard from "../Keyboard/Keyboard";

firebase.initializeApp({
  apiKey: "AIzaSyAXq6O_DgIp0Uq1_YgDb6Y3JXB_Zrw5eDc",
  authDomain: "hearyounow-42f0d.firebaseapp.com",
  projectId: "hearyounow-42f0d",
  storageBucket: "hearyounow-42f0d.appspot.com",
  messagingSenderId: "862891741814",
  appId: "1:862891741814:web:994c93ca9f4ab170b14557"
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();
let sliderValue = React.createContext("sliderValue");

function Chat() {
  const [user] = useAuthState(auth);
  const [planPeriod, setPlanPeriod] = useState(true);
  function togglePeriod() {
    setPlanPeriod(!planPeriod);
    // console.log("here", planPeriod);
    // sliderValue = sliderV.valueOf();
    // console.log(sliderV);
  }
  return (
    <div className="App">
      <SignOut />
      <Slider
        onText="Text"
        offText="Sign"
        setValue={togglePeriod}
        className="slider"
      />
      <section>
        {user ? <ChatRoom type={{ planPeriod }} /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom(props) {
  // console.log(props);
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  
  function formValueHandler(value) {
    setFormValue(value) 
  }

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => (
            <ChatMessage
              key={msg.did}
              message={msg}
              type={props.type.planPeriod}
            />
          ))}

        <span ref={dummy}></span>
      </main>
     
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onClick={ ()=> document.getElementById("panel").style.display = "block"  }
          placeholder="say something nice"
          inputMode={"none"}
        />
        <button type="submit" disabled={!formValue}>
          Envoyer
        </button>
      </form>
      <div id="panel" className="keyboard-panel">
       <Keyboard inputText={formValue} handler={formValueHandler} />
     </div>
    </>
  );
}

function getSigns(message) {
  let path = "Assets/svg/signs/";

  var listOfChar = Array.from(message);

  var myArr = message.split(" ");
  // console.log(typeof myArr);
  // console.log("here "+ myArr);
  // var listOfChar = Array.from(message);
  var listOfSigns = [];
  /* for (let i = 0; i < listOfChar.length; i++) {
    if (dict.hasOwnProperty(listOfChar[i])) {
      var indeex = listOfChar[i].valueOf();
      listOfSigns.push(path.concat(dict[indeex]));
    } else {
      listOfSigns.push(path.concat("0.svg"));
    }
  } */
  for (let i = 0; i < myArr.length; i++) {
    if (dict.hasOwnProperty(myArr[i])) {
      var indeex = myArr[i].valueOf();
      listOfSigns.push(path.concat(dict[indeex]));
    } else {
      var listOfChar = Array.from(myArr[i]);
      for (let i = 0; i < listOfChar.length; i++) {
        if (dict.hasOwnProperty(listOfChar[i])) {
          var indeex = listOfChar[i].valueOf();
          listOfSigns.push(path.concat(dict[indeex]));
        } else {
          listOfSigns.push(path.concat("0.svg"));
        }
      }
    }
    if (i<myArr.length -1) listOfSigns.push(path.concat("space.png"));
  }

  return (
    <div className="signrow">
      {listOfSigns.map((item, index) => (
        <img src={item} key={index} className="sign" />
      ))}
    </div>
  );
}

function ChatMessage(props) {
  // console.log("type: ", props.type);
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          className="profilePic"
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p className="msg">{props.type ? text : getSigns(text)}</p>
      </div>
    </>
  );
}

export default Chat;

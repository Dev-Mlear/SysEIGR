import React, { Component, useRef, useState, PropTypes } from "react";
import "./styles.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import dict from "../ChatRoom/dictionnaire";


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

      </>
    );
  }
  
  function ChatRoom(props) {
    // console.log(props);
    const dummy = useRef();
    const messagesRef = firestore.collection("messagesres");
    const query = messagesRef.orderBy("createdAt", 'desc').limit(1);
    
    const [messages] = useCollectionData(query, { idField: "id" });
    console.log(messages);

    const resMsgs = [];
    const [lastMessage, setLastMessage ] = useState('');

    return (
      <>


        {messages &&
          messages.map((msg) => (
            msg.uid === auth.currentUser.uid ?   
            <ChatMessage
              key={msg.did}
              message={msg}
              type={props.type.planPeriod}
            /> :
            void(0)
          ))}


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
          <p className="msg">{getSigns(text)}</p>
        </div>
      </>
    );
  }

  
class RaspberryScreen extends Component { 
    render() {
        return (
            <div>
                <Chat />
                <h4>Raspberry Screen Here</h4>
                <div className='camera'></div>
            </div>
    );
  }
}

export default RaspberryScreen;





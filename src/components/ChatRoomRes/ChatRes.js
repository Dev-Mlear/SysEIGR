import React, { useRef, useState, useEffect, useCallback } from "react";
import "./styles.css";
import { Container } from "./shared";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Col, Row } from "react-bootstrap";

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

function ChatRes() {
  const [lang, setLang] = useState("ar-MA");
  const [user] = useAuthState(auth);
  const [planPeriod, setPlanPeriod] = useState(true);
  function togglePeriod() {
    setPlanPeriod(!planPeriod);
    // console.log("here", planPeriod);
    // sliderValue = sliderV.valueOf();
    // console.log(sliderV);
  }
  function setLangHandler(e) {
    setLang(e);
  }
  const messagesRef = firestore.collection("messagesres");
  const query = messagesRef.orderBy("createdAt");

  const [messages] = useCollectionData(query, { idField: "id" });
  const list = [];
  const forbidden = [];
  let text = "";
  messages &&
    messages.map(
      (msg) => (
        list.push(msg.text),
        msg.uid === auth.currentUser.uid ? forbidden.push(msg.text) : void 0
      )
    );
  return (
    <div className="App">
      <SignOut />
      <section>
        {user ? (
          <ChatRoom
            type={{ planPeriod }}
            lang={lang}
            setLang={setLangHandler}
          />
        ) : (
          <SignIn />
        )}
        {
          (messages &&
            messages.map((msg) => list.push(msg.text), (text = list.pop())),
          !forbidden.includes(text)
            ? (console.log(
                !forbidden.includes(text) + forbidden + " includes " + text
              ),
              (<Talk message={text} language={lang} />))
            : (console.log(
                !forbidden.includes(text) + forbidden + " includes " + text
              ),
              console.log("text in forbiden")))
        }
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
      <Row className="row mx-auto">
        <Col>
          <h6 className="title">Système Enregistrement d&#39;Interrogatoires </h6>
        </Col>
        <Col className="col-3 mx-auto">
          <button className="sign-out" onClick={() => auth.signOut()}>
          Se déconnecter
          </button>
        </Col>
      </Row>
    )
  );
}

function ChatRoom(props) {
  // console.log(props);
  const dummy = useRef();
  const messagesRef = firestore.collection("messagesres");
  const query = messagesRef.orderBy("createdAt");

  const [messages] = useCollectionData(query, { idField: "id" });

  const list = [];
  let text = "";
  messages && messages.map((msg) => list.push(msg.text));
  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: msgValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setMsgValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  
  var msg = new SpeechSynthesisUtterance();
  var voices = speechSynthesis.getVoices();
  msg.voice = voices[10];
  msg.voiceURI = "native";
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 2;
  msg.text = text;
  msg.lang = props.lang;

  const [value, setValue] = useState("");
  const [blocked, setBlocked] = useState(false);

  const onEnd = () => {
    // You could do something here after listening has finished
    setMsgValue(msgValue + " " + value);
    setValue("");
  };

  const onResult = (result) => {
    setMsgValue(msgValue + result);
  };

  const changeLang = (event) => {
    props.setLang(event.target.value);
    msg.lang = event.target.value;
    console.log("selected+speech lang " + msg.lang);
  };

  const onError = (event) => {
    if (event.error === "not-allowed") {
      setBlocked(true);
    }
  };

  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult,
    onEnd,
    onError,
    props,
  });

  const toggle = listening
    ? stop
    : () => {
        setBlocked(false);
        listen(props.lang);
      };
  const [msgValue, setMsgValue] = useState("");
  const [formValue, setFormValue] = useState("");

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg}
              type={props.type.planPeriod}
            />
          ))}

        <span ref={dummy}></span>
      </main>

      <form id="speech-recognition-form" onSubmit={sendMessage}>
        {!supported && (
          <p>
            Oh no, it looks like your browser doesn&#39;t support Speech
            Recognition.
          </p>
        )}
        {supported && (
          <React.Fragment>
            <label htmlFor="language"></label>

            <label htmlFor="transcript"></label>
            {/*<input
              disabled
              value={msgValue}
              onChange={() => setMsgValue(msgValue)}
              placeholder="Here is your Speech"
            />
            <button disabled={blocked} type="button" onClick={toggle}>
              {listening ? "Stop" : "Listen"}
            </button>
            */}
            <input
              value={msgValue}
              onChange={(e) => setMsgValue(e.target.value)}
              placeholder="La saisie manuelle"
            />
            <select
              form="speech-recognition-form"
              id="language"
              value={props.lang}
              onChange={changeLang}
              className="dropdown"
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button
              disabled={blocked}
              type="button"
              className="record"
              onClick={toggle}
            >
              {listening ? "Stop" : "Parler 🎙️"}
            </button>
            <button type="submit" disabled={!msgValue}>
              Send 
            </button>
            {blocked && (
              <p style={{ color: "red" }}>
                The microphone is blocked for this site in your browser.
              </p>
            )}
          </React.Fragment>
        )}
      </form>
    </>
  );
}

function Talk(props) {
  const texto = props.message;
  var msg = new SpeechSynthesisUtterance();
  var voices = speechSynthesis.getVoices();
  msg.volume = 2;
  msg.rate = 1;
  msg.pitch = 0.8;
  msg.text = texto;
  msg.lang = props.language;
  console.log("hi there " + msg.lang);
  speechSynthesis.speak(msg);
  return <div></div>;
}

function ChatMessage(props) {
  // console.log("type: ", props.type);
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  const messagesRef = firestore.collection("messagesres");
  const query = messagesRef.orderBy("createdAt");

  const [messages] = useCollectionData(query, { idField: "id" });
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          className="profilePic"
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p className="msg">{text}</p>
      </div>
    </>
  );
}

const useEventCallback = (fn, dependencies) => {
  const ref = useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback(
    (args) => {
      const fn = ref.current;
      return fn(args);
    },
    [ref]
  );
};

const useSpeechRecognition = (props = {}) => {
  const { onEnd = () => {}, onResult = () => {}, onError = () => {} } = props;
  const recognition = useRef(null);
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(false);

  const processResult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    onResult(transcript);
  };

  const handleError = (event) => {
    if (event.error === "not-allowed") {
      recognition.current.onend = () => {};
      setListening(false);
    }
    onError(event);
  };

  const listen = useEventCallback(
    (args = {}) => {
      if (listening || !supported) return;
      const {
        lang = props.props.lang,
        interimResults = true,
        continuous = false,
        maxAlternatives = 1,
        grammars,
      } = args;

      console.log("I will convert speech to text from : " + lang);
      setListening(true);
      recognition.current.lang = lang;
      recognition.current.interimResults = interimResults;
      recognition.current.onresult = processResult;
      recognition.current.onerror = handleError;
      recognition.current.continuous = continuous;
      recognition.current.maxAlternatives = maxAlternatives;
      if (grammars) {
        recognition.current.grammars = grammars;
      }
      // SpeechRecognition stops automatically after inactivity
      // We want it to keep going until we tell it to stop
      recognition.current.onend = () => recognition.current.start();
      recognition.current.start();
    },
    [listening, supported, recognition]
  );

  const stop = useEventCallback(() => {
    if (!listening || !supported) return;
    recognition.current.onresult = () => {};
    recognition.current.onend = () => {};
    recognition.current.onerror = () => {};
    setListening(false);
    recognition.current.stop();
    onEnd();
  }, [listening, supported, recognition, onEnd]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (window.SpeechRecognition) {
      setSupported(true);
      recognition.current = new window.SpeechRecognition();
    }
  }, []);

  return {
    listen,
    listening,
    stop,
    supported,
  };
};

const languageOptions = [
  { label: "🇲🇦 Arabic", value: "ar-MA" },
  { label: "🇩🇪 Deutsch", value: "de-DE" },
  { label: "🇺🇸 English", value: "en-AU" },
  { label: "🇫🇷 Français", value: "fr-FR" },
  { label: "🇪🇸 Español", value: "es-MX" },
  { label: "🇸🇪 Swedish", value: "sv-SE" },
];

export default ChatRes;

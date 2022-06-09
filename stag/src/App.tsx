import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Smoke } from "./Smoke";
import {
  videolinkFatty,
  videolinkRick,
  videolinkSnek,
  VideoPLayer,
} from "./VideoPlayer";

function App() {
  const [scream, setScream] = useState(false);
  const [showFatty, setShowFatty] = useState(false);
  const [showSnake, setShowSnake] = useState(false);
  const [showRick, setShowRick] = useState(false);

  const [text, setText] = useState("");

  const growlThenShowVideoPlayer = (setShow: any) => {
    if (scream) {
      return;
    }
    setScream(true);
    setText("");
    const audio = new Audio(`${window.location}images/dragonRoar.mp3`);
    setTimeout(function () {
      audio.play();
    }, 750);
    setTimeout(function () {
      setShow(true);
      setScream(false);
      console.log("setting false");
    }, 8000);

    return null;
  };

  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundImage: `url("${window.location}images/drunken-dragon.jpg")`,
      }}
    >
      {scream && <Smoke />}
      {(text.toLowerCase() === "crystal" || text.toLowerCase() === "krystal") &&
        growlThenShowVideoPlayer(setShowFatty)}
      {(text.toLowerCase() === "hoggorm" || text.toLowerCase() === "huggorm") &&
        growlThenShowVideoPlayer(setShowSnake)}
      {(text.toLowerCase() === "chumlee" ||
        text.toLowerCase() === "chummle" ||
        text.toLowerCase() === "chum le") &&
        growlThenShowVideoPlayer(setShowRick)}
      <input
        type={"text"}
        //value={text}
        maxLength={7}
        onChange={(e: any) => {
          console.log(e.target.value);
          setText(e.target.value);
        }}
      />
      {showFatty && (
        <VideoPLayer
          url={videolinkFatty}
          setShowValue={(value: boolean) => {
            setShowFatty(value);
          }}
        />
      )}
      {showSnake && (
        <VideoPLayer
          url={videolinkSnek}
          setShowValue={(value: boolean) => {
            setShowSnake(value);
          }}
        />
      )}
      {showRick && (
        <VideoPLayer
          url={videolinkRick}
          setShowValue={(value: boolean) => {
            setShowRick(value);
          }}
        />
      )}
    </div>
  );
}

export default App;

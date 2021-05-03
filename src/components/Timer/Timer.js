import React, { useState, useEffect, useRef, useReducer } from "react";
import { toSeconds, formatTime } from "../../util/convertTime";
import useInput from "../../useHook/useInput";
import watchReducer from "../../reducer/watchReducer";
import TextField from "./styled/TextField";
import Wrapper from "./styled/Form";
import Button from "../button/Button";
import Article from "./styled/Container";
import Time from "./styled/Time";
import Error, { Blank } from "../error/Error";

const Timer = () => {
  const secondsRef = useRef(null);
  const [{ error, msg }, setError] = useState({ error: false, msg: "" });
  const [{ running, seconds, initial }, dispatch] = useReducer(watchReducer, {
    running: false,
    initial: true,
    seconds: 60,
  });
  const second = useInput(59, 59, 0, setError);
  const minute = useInput(0, 59, 0, setError);
  const hour = useInput(0, 23, 0, setError);
  let totalSeconds = toSeconds(second.value, minute.value, hour.value);
  const handleClick = () => {
    if (initial) {
      //called in the initial page load to start secondsr
      dispatch({ type: "INITIAL", payload: { seconds: totalSeconds } });
      secondsRef.current = setInterval(() => dispatch({ type: "LAPSE" }), 1000);
      setError({ error: false, msg: "" });
      return;
    } else if (running) {
      //called when user tries to PAUSE secondsr
      clearInterval(secondsRef.current);
    } else if (seconds === 0) {
      //called when secondsr reaches zero, and user tries start new secondsr
      clearInterval(secondsRef.current);
      dispatch({ type: "LAPSE", payload: { seconds: totalSeconds } });
      secondsRef.current = setInterval(() => dispatch({ type: "LAPSE" }), 1000);
    } else {
      //called when user restarts secondsr
      secondsRef.current = setInterval(() => dispatch({ type: "LAPSE" }), 1000);
    }
    //toggles running state
    dispatch({ type: "TOGGLE" });
    setError({ error: false, msg: "" });
  };
  const handleReset = () => {
    clearInterval(secondsRef.current);
    dispatch({ type: "RESET", payload: { seconds: totalSeconds } });
  };
  useEffect(() => {
    return () => clearInterval(secondsRef.current);
  }, []);
  return (
    <Article running={running ? 1 : 0} over={toSeconds(seconds) === 0 ? 1 : 0}>
      <Wrapper>
        <Button
          onClick={handleClick}
          color="primary"
          variant="contained"
          disabled={toSeconds(second.value, minute.value, hour.value) === 0}
        >
          {running ? "Stop" : "Start"}
        </Button>
        <Button onClick={handleReset}>RESET</Button>
      </Wrapper>

      <Wrapper>
        <TextField
          type="number"
          id="hours"
          value={hour}
          label="Hours"
          variant="outlined"
        />
        <TextField
          type="number"
          id="minutes"
          value={minute}
          label="Minutes"
          variant="outlined"
        />
        <TextField
          type="number"
          id="seconds"
          value={second}
          label="Seconds"
          variant="outlined"
        />
      </Wrapper>
      {!error ? <Blank /> : <Error setError={setError}>{msg}</Error>}
      <Time active={running ? 1 : 0}>{formatTime(seconds).join`:`}</Time>
    </Article>
  );
};

export default Timer;

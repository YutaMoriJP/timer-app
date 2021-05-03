import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Text = styled.p`
  box-sizing: border-box;
  color: red;
  height: 10px;
`;

export const Blank = styled.p`
  height: 10px;
`;

const Error = ({ children, setError }) => {
  const ref = useRef(null);
  const [time, setTime] = useState(2);
  if (time === 0) {
    setError({ error: false, msg: "" });
  }
  useEffect(() => {
    ref.current = setInterval(() => setTime(prevTime => prevTime - 1), 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return <Text>{children}</Text>;
};

export default Error;

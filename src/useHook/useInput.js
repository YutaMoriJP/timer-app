import { useState } from "react";

const useInput = (initial, max = 59, min = 0, setError) => {
  const [value, setValue] = useState(initial);
  const onChange = event => {
    let time = event.target.value;
    if (time < min) {
      setError({ error: true, msg: `Number must be greater than ${min}` });
    } else if (time > max) {
      setError({ error: true, msg: `Number cannot be greater than ${max}` });
    } else {
      setError({ error: false, msg: "" });
    }
    setValue(time < min ? min : time > max ? max : time);
  };
  return { value, onChange };
};

export default useInput;

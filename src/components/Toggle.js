import React, {useState} from "react";

function Toggle() {
const [isOn, setisOn] = useState(false)
function handleclick() {
  setisOn((isOn) => !isOn);
}

  return <button onClick={handleclick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;

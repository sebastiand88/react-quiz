import { useRef } from "react";
import { AiOutlineSound } from "react-icons/ai";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <>
      <h1 className="startTitle">Quiz Time!</h1>
      <h3 className="startWarning">🙉 This App Includes Sound 🙉</h3>
      <AiOutlineSound size="3rem" className="startIcon" />

      <div className="start">
        <input
          type="text"
          placeholder="Please enter your name..."
          className="startInput"
          ref={inputRef}
        />
        <button className="startButton" onClick={handleClick}>
          Play NOW!
        </button>
      </div>
    </>
  );
}

import { useState, useCallback } from "react";
import "./styles.css";

const InputRowTopLevelDeclaration = ({
  index,
  place,
  onChange,
  setPreferredPlaces
}) => {
  return (
    <div
      key={index}
      style={{ display: "flex", gap: "10px", alignItems: "center" }}
    >
      <label>Input {index + 1}</label>
      <input value={place} onChange={onChange} />
      <button
        onClick={() => {
          setPreferredPlaces((prev) => [...prev, ""]);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default function App() {
  const [preferredPlaces, setPreferredPlaces] = useState([""]);

  const handleChange = (e, index) => {
    const newList = [...preferredPlaces];
    newList[index] = e.target.value;
    setPreferredPlaces(newList);
  };

  const InputRowNestedDeclaration = ({ index, place, onChange }) => {
    return (
      <div
        key={index}
        style={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        <label>Input {index + 1}</label>
        <input value={place} onChange={onChange} />
        <button
          onClick={() => {
            setPreferredPlaces((prev) => [...prev, ""]);
          }}
        >
          Add
        </button>
      </div>
    );
  };

  const InputRowNestedDeclarationWithUseCallback = useCallback(
    InputRowNestedDeclaration,
    []
  );

  return (
    <div>
      <h1>Preferred Places</h1>
      <hr />
      <h2>Input Row Nested Component declartion</h2>
      <p>
        Component input looses focus after after input key press bacause nested
        function will be recreated during component re-render
      </p>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {preferredPlaces.map((place, index) => {
          return (
            <InputRowNestedDeclaration
              key={index}
              index={index}
              place={place}
              onChange={(e) => handleChange(e, index)}
            />
          );
        })}
      </div>
      <hr />
      <h2>Input Row Nested Component declartion with useCallback</h2>
      <p>
        Component is wrapped with useCallback so we are getting the memoized
        version of the function which will prevent new function creation on ever
        render
      </p>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {preferredPlaces.map((place, index) => {
          return (
            <InputRowNestedDeclarationWithUseCallback
              key={index}
              index={index}
              place={place}
              onChange={(e) => handleChange(e, index)}
            />
          );
        })}
      </div>
      <hr />
      <h2>Input Row with top level declartion</h2>
      <p>Component keeps its own state won't be recreated during re-render</p>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {preferredPlaces.map((place, index) => {
          return (
            <InputRowTopLevelDeclaration
              key={index}
              index={index}
              place={place}
              onChange={(e) => handleChange(e, index)}
              setPreferredPlaces={setPreferredPlaces}
            />
          );
        })}
      </div>
    </div>
  );
}

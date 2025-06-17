import "./App.css";
import { Input } from "./components/Input/Input";
import { Text } from "./components/Text/Text";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(inputValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <Input value={inputValue} onChange={setInputValue} />
          <button type="submit">Skicka</button>
        </form>
        <Text name={submittedName} />
      </header>
    </div>
  );
}

export default App;

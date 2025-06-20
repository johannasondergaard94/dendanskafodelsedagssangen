import "./App.css";
import { Input } from "./components/Input/Input";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Text } from "./components/Text/Text";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [sex, setSex] = useState("Hon");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(inputValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Input value={inputValue} onChange={setInputValue} />
          <Dropdown value={sex} onChange={setSex} />
          <button type="submit">Generera</button>
          </div>
        </form>
        <Text name={submittedName} sex={sex} />
      </header>
    </div>
  );
}

export default App;

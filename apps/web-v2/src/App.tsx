import { Button as ButtonV2 } from "@comp/ui-v2";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Web App with Custom Theme & Sizes</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        <ButtonV2>V2</ButtonV2>
      </div>
    </div>
  );
}

export default App;

import Quiz from "../src/components/Quiz";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <div className="progress">
          <progress style={{ width: "100%" }} id="file" value="32" max="100">
            32%
          </progress>
        </div>
      </div>
      <div className="content">
        <Quiz />
      </div>
      <div className="footer">
        <div className="score">
          <h5>Score: 67%</h5>
          <h4>Max Score: 75%</h4>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            aria-valuenow="70"
            aria-valuemin="67"
            aria-valuemax="75"
            style={{ width: "70%" }}>
            <span className="sr-only">70% Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Tweet from "./components/Tweet";
import {tweetsArray} from './data'


function App() {
  return (
    <div className="App">
      {tweetsArray.map((elem,i) => {
        return <Tweet key={i} tweets={elem}></Tweet>
      })}
      {/* <Tweet /> */}
    </div>
  );
}

export default App;

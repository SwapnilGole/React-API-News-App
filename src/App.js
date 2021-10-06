// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import React, { useState} from 'react'

const App =()=> {
  const pageSize = 15;
  const api_key = process.env.REACT_APP_API_KEY;
  //  state = {
  //   progress: 10,
  // };
  const [progress, setProgress] = useState(10)
  // setProgress = (progress) => {
  //   setState({ progress: progress });
  // };

  // render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <LoadingBar
            color="#f11946"
            progress={progress}
            waitingTime={500}
            // progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  // }
}


export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

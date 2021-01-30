import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import "./css/app.css";
import Fullpage from "./Fullpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import { Fullscreen } from "@material-ui/icons";
import screenfull from "screenfull";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [left, setLeft] = useLocalStorage(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  //method to toggle fullscreen
  function goFullScreen() {
    screenfull.toggle();
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/editor">
          <div className="app">
            <header className="header">
              <div className="header-left">
                <Link to="/">
                  <h2 className="logo">Coffe Code</h2>
                </Link>
                <Fullscreen onClick={(e) => goFullScreen()} />
              </div>
              <div className="buttons">
                <div className="button">
                  <button
                    className="changeLayout"
                    onClick={() => setLeft((prevLeft) => !prevLeft)}
                  >
                    Change Layout
                  </button>
                </div>
                <div className="button">
                  <Link to="/fullscreen">
                    <button className="goFullPage btn2">Go Full Page</button>
                  </Link>
                </div>
              </div>
            </header>
            <div className={left ? "left-container" : "container"}>
              <div className="pane top-pane">
                <Editor
                  language="xml"
                  displayName="HTML"
                  value={html}
                  onChange={setHtml}
                />
                <Editor
                  language="css"
                  displayName="CSS"
                  value={css}
                  onChange={setCss}
                />
                <Editor
                  language="javascript"
                  displayName="JavaScript"
                  value={js}
                  onChange={setJs}
                />
              </div>
              <div className="pane">
                <iframe
                  srcDoc={srcDoc}
                  title="output"
                  sandbox="allow-scripts"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </Route>
        <Route exact path="/fullscreen">
          <Fullpage html={html} css={css} js={js} goFullScreen={goFullScreen} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

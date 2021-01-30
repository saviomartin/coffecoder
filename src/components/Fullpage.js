import { Fullscreen } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/fullpage.css";

const Fullpage = ({ html, css, js, goFullScreen }) => {
  const [srcDoc, setSrcDoc] = useState("");

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

  return (
    <div className="fullpage">
      <header className="header">
        <div className="header-left">
          <Link to="/">
            <h2 className="logo">Coffe Code</h2>
          </Link>
          <Fullscreen onClick={(e) => goFullScreen()} />
        </div>
        <div className="buttons">
          <div className="button">
            <Link to="/editor">
              <button className="goFullPage btn2">Go Back to Editor</button>
            </Link>
          </div>
        </div>
      </header>
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
      />
    </div>
  );
};

export default Fullpage;

/*import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { SignUpModal } from "./components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button onClick={() => setUseDarkTheme(true)}>Dark</button>
      <button onClick={() => setUseDarkTheme(false)}>Light</button>
      <button onClick={() => setShowModal(!showModal)}>Toggle modal</button>
      <div>
        <SignUpModal
          showModal={showModal}
          setShowModal={setShowModal}
        ></SignUpModal>
      </div>

      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
*/
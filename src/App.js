import React from "react";

import SkipToMain from "./components/SkipToMain";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* skip to main button */}
      <SkipToMain />

      {/* navigation bar */}
      <Header />

      {/* main content */}
      <Main />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-y-auto antialiased">
      <div className="fixed inset-0 bgfixed bg-cover bg-center bg-img">
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Main />
          <Navbar />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;

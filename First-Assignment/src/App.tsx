import React from "react";
import Header from "./components/Header/Header";
import GradeCalculator from "./components/GradeCalculator/GradeCalculator";


const App = () => {
  const marks=88;
  return (
    <>
      <Header />
      <GradeCalculator marks={marks} />
    </>
  );
};

export default App;

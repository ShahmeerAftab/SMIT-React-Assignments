import React from "react";
import Header from "./components/Header/Header";
import Gradecalculator from "./components/GradeCalculator/GradeCalculator";

const App=()=>{
  const marks=73;

  return(
   <>
    <Header />
    <Gradecalculator marks={marks} />
   </>
)
}

export default App;





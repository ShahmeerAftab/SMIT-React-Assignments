import React from "react";
import GradeCalculator from "../GradeCalculator/GradeCalculator";

type PropsType={
marks:number;
grade:string
}

const GradeDisplay=(props:PropsType)=>{



return(
  <>
  <h2 style={{color:"purple", padding:20}}> Marks:{props.marks}</h2>
<h3 style={{color:"green" , padding:20}}> Grade:{props.grade}</h3>
  </>
)
}

export default GradeDisplay;



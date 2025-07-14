import React from "react";

type GradeProps={
    marks:number;
    grade:string;
}
const GradeDisplay=(props:GradeProps)=>{
    return(
        <>
        <h2>Marks:{props.marks}</h2>
        <h3>Grade:{props.grade}</h3>
        </>
    )

}

export default GradeDisplay;


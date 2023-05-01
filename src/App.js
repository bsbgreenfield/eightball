import React from "react";
import Eightball from "./eightball";
import answers from "./answers";
import './App.css'

function App(){
    return (
        <div className="App">
            <Eightball answers={answers}/>
        </div>

    )
}

export default App
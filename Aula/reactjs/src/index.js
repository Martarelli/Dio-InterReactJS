import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import Button from "./Button"

function soma(a, b){
    alert(a + b)
}

function App(){

    return (
        <div className="App">
            <Button onclick={() => soma(1, 5)} name="Renan Martarelli" />
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
import {useState} from "react";
import * as math from "mathjs";
import './App.css';
import Button from './components/button';
import Input from './components/input';

const App= ()=> {
  const [text,setText] = useState("");
  const [result,setresult] = useState("");

  const addToText =(val) =>{
    setText((text)=> [...text, val + " "]);
  };

  const calculateResult = () =>{
    const input = text.join("");
    setresult(math.evaluate(input));
  };

  const resetInput =()=>{
    setText("")
    setresult("")
  }

  const buttoncolor ="#f2a33c";
  return (
<div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="rows">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="/" handleClick={addToText} color={buttoncolor}/>
        </div>
        <div className="rows">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*" handleClick={addToText} color={buttoncolor}/>
        </div>
        <div className="rows">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" handleClick={addToText} color={buttoncolor}/>
        </div>
        <div className="rows">
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="=" handleClick={calculateResult}/>
          <Button symbol="-" handleClick={addToText} color={buttoncolor}/>
        </div>
        <Button symbol="Clear" handleClick={resetInput} />
      </div>
    </div>
  );
}

export default App;
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const colorsArray = [["pink", "black", "green", "red", "yellow", "blue", "orange", "purple"], ["green", "lightgreen", "yellow", "lightyellow", "chartreuse", "yellowgreen", "pear", "lime"], ["grey", "grey", "grey", "grey", "grey", "grey", "grey", "grey"]];
  
  const [colors, setColors] = useState(colorsArray[0]);
  const [difficulty, setDifficulty] = useState("easy");

  useEffect(() => {
    if (difficulty === "easy") {
      setColors(colorsArray[0]);
    }
    if (difficulty === "normal") {
      setColors(colorsArray[1]);
    }
    if (difficulty === "hard") {
      setColors(colorsArray[2]);
    }
  }, [difficulty]);

  return (
    <div className="App">
      <div className='difficultySelector'>
        <button className='easy' onClick={ () => setDifficulty("easy")}>Easy</button>
        <button className='normal' onClick={ () => setDifficulty("normal")}>Normal</button>
        <button className='hard' onClick={ () => setDifficulty("hard")}>Hard</button>
      </div>
      <div className='cardContainer'>
        {colors.map((color) => {
          return(
            <div className='card' style={{backgroundColor: color}}></div>
          )
        })}
      </div>
    </div>
  );
}

export default App;

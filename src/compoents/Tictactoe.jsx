import React, { useState, useEffect } from 'react';
import tingSound from '../assets/sound/ting.mp3';
import winSound from '../assets/sound/mixkit.wav';
import celebrationImage from '../assets/images/excited.gif';

export default function Tictactoe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [over, setOver] = useState(false);
  const [info, setInfo] = useState("Turn for X");
  const [lineStyle, setLineStyle] = useState({ width: '0' });
  const [imageWidth, setImageWidth] = useState('0');
  const [winPatterns, setWinPatterns] = useState(getWinPatterns(window.innerWidth));
  const [lineWidth, setLineWidth] = useState(window.innerWidth > 800 ? '30vw' : '60vw');

  const ting = new Audio(tingSound);
  const winAudio = new Audio(winSound);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWinPatterns(getWinPatterns(width));
      setLineWidth(width > 800 ? '30vw' : '60vw');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getWinPatterns(width) {
    if (width > 800) {
      return [
        [0, 1, 2, 0, 5, 0], [3, 4, 5, 0, 15, 0], [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90], [1, 4, 7, 0, 15, 90], [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, -135], [2, 4, 6, 0, 15, 135]
      ];
    } else {
      return [
        [0, 1, 2, 0, 10, 0], [3, 4, 5, 0, 30, 0], [6, 7, 8, 0, 50, 0],
        [0, 3, 6, -20, 30, 90], [1, 4, 7, 0, 30, 90], [2, 5, 8, 20, 30, 90],
        [0, 4, 8, 0, 30, -135], [2, 4, 6, 0, 30, 135]
      ];
    }
  }

  const handleClick = (index) => {
    if (board[index] === "" && !over) {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      ting.play();

      let winner = null;
      winPatterns.forEach(e => {
        if (newBoard[e[0]] && newBoard[e[0]] === newBoard[e[1]] && newBoard[e[1]] === newBoard[e[2]]) {
          winner = newBoard[e[0]];
          setLineStyle({ width: lineWidth, transform: `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)` });
          setImageWidth("200px");
        }
      });

      if (winner) {
        setInfo(`${winner} won`);
        setOver(true);
        winAudio.play();
      } else if (newBoard.every(cell => cell !== "")) {
        setInfo("It's a draw!");
        setOver(true);
      } else {
        setTurn(turn === "X" ? "O" : "X");
        setInfo(`Turn for ${turn === "X" ? "O" : "X"}`);
      }
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(""));
    setOver(false);
    setInfo(`Turn for X`);
    setLineStyle({ width: '0' });
    setTurn("X");
    setImageWidth("0px");
  };

  return (
    <div className="gameContainer">
      <div className="container">
        <div className="line" style={lineStyle}></div>
        <div className="board">
          {board.map((boxtext, index) => (
            <div key={index} className="box" onClick={() => handleClick(index)}>
              {boxtext}
            </div>
          ))}
        </div>
      </div>
      <div className="gameInfo">
        <h1>Welcome to My Tic Tac Toe</h1>
        <div>
          <span className="info">{info}</span>
          <button id="reset" onClick={handleReset}>Reset</button>
        </div>
        <div className="imgbox">
          <img src={celebrationImage} alt="celebration" style={{ width: imageWidth }} />
        </div>
      </div>
    </div>
  );
}

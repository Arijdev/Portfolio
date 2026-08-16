import React, { useRef, useState, useEffect } from 'react';

const App = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('black');
  const [lineWidth, setLineWidth] = useState(5);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = 'round';
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    contextRef.current = context;
  }, [color, lineWidth]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    const canvas = canvasRef.current;
    setHistory([...history, canvas.toDataURL()]);
    setRedoStack([]);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const undo = () => {
    if (history.length === 0) return;
    const newHistory = [...history];
    const lastState = newHistory.pop();
    setRedoStack([lastState, ...redoStack]);
    setHistory(newHistory);
    const img = new Image();
    img.src = newHistory[newHistory.length - 1] || '';
    img.onload = () => {
      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      contextRef.current.drawImage(img, 0, 0);
    };
  };

  const redo = () => {
    if (redoStack.length === 0) return;
    const newRedoStack = [...redoStack];
    const nextState = newRedoStack.shift();
    setHistory([...history, nextState]);
    setRedoStack(newRedoStack);
    const img = new Image();
    img.src = nextState;
    img.onload = () => {
      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      contextRef.current.drawImage(img, 0, 0);
    };
  };

  const clearCanvas = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setHistory([...history, canvasRef.current.toDataURL()]);
    setRedoStack([]);
  };

  const saveCanvas = () => {
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <div>
      
      <div style={{ margin: '8vh 10px 10px', textAlign:'center' }}>
        <label style={{ marginRight: '10px' }}>
          Brush Color:
          <input
            type="color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            style={{ marginLeft: '5px' }}
          />
        </label>
        <label style={{ marginRight: '10px' }}>
          Brush Size:
          <input
            type="number"
            onChange={(e) => setLineWidth(e.target.value)}
            value={lineWidth}
            min="1"
            max="100"
            style={{ marginLeft: '5px' }}
          />
        </label>
        <button onClick={undo} style={{ marginRight: '10px' }}>Undo</button>
        <button onClick={redo} style={{ marginRight: '10px' }}>Redo</button>
        <button onClick={clearCanvas} style={{ marginRight: '10px' }}>Clear</button>
        <button onClick={saveCanvas} style={{ marginRight: '10px' }}>Save</button>
      </div>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        style={{ border: '1px solid black',margin:'1vh 17px 5px' }}
      />
    </div>
  );
};

export default App;

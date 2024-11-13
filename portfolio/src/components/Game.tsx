import { Container, Button } from '@mui/material';
import React, { useState } from 'react';
import '../App.css';
import DataTable from './GameScore';
import { Label } from '@mui/icons-material';

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
  disabled: boolean;  // Add a new prop to disable the square
};

function Square({ value, onSquareClick, disabled }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick} disabled={disabled}>
      {value}
    </button>
  );
}

type BoardProps = {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (nextSquares: Array<string | null>) => void;
  players: { X: string; O: string };
  saveScore: (winner: string) => void;
  isDisabled: boolean; // Add this prop to control if squares should be disabled
};

function Board({ xIsNext, squares, onPlay, players, saveScore, isDisabled }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);

    const winner = calculateWinner(nextSquares);
    if (winner) {
      saveScore(players[winner]);
    }
  }

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${players[winner]}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <>

        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} disabled={isDisabled} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} disabled={isDisabled} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} disabled={isDisabled} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} disabled={isDisabled} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} disabled={isDisabled} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} disabled={isDisabled} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} disabled={isDisabled} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} disabled={isDisabled} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} disabled={isDisabled} />
        </div>

    </>
  );
}

const Game: React.FC = () => {
  const [history, setHistory] = useState<Array<Array<string | null>>>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');
  const [refreshData, setRefreshData] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: Array<string | null>) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

//   const saveScore = async (winner: string) => {
//     console.log(`Attempting to save score for winner: ${winner}`);
//     try {
//       const response = await fetch('http://localhost:3000/api/score_save', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ player_name: winner, score: 1 })
//       }
//     );
//     console.log('Data saved')
//     setRefreshData((prev) => !prev);
//       console.log(`Response status: ${response.status}`);
//       if (response.ok) {
//         alert(`Score saved successfully for ${winner}`);
//       } else {
//         alert('Failed to save score');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
const resetGame = () => {
    // Reset game state
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setPlayerX('');
    setPlayerO('');
  };


const saveScore = async (winner: string) => {
    console.log(`Attempting to save score for winner: ${winner}`);
    try {
      const response = await fetch('http://localhost:3000/api/score_save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player_name: winner, score: 1 }),
      });
      console.log('Data saved');
      setRefreshData((prev) => !prev);
      console.log(`Response status: ${response.status}`);
  
    //   if (response.ok) {
    //     alert(`Score saved successfully for ${winner}`);
    //   } else {
    //     alert('Failed to save score');
    //   }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Disable squares until both players' names are entered
  const isDisabled = !(playerX && playerO);

  return (
    <Container sx={{margin: 10}}>
    <div style={{marginTop: '100px'}}>
  
        <h1>Tic-Tac-Toe Game</h1>
        <div>
            <label>Player X</label>
          <input
            type="text"
            placeholder="Enter Player X Name"
            value={playerX}
            onChange={(e) => setPlayerX(e.target.value)}
          />
          <br></br>
          <label>Player O</label>
          <input
            type="text"
            placeholder="Enter Player O Name"
            value={playerO}
            onChange={(e) => setPlayerO(e.target.value)}
          />
        </div>
        <br></br>
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
            players={{ X: playerX, O: playerO }}
            saveScore={saveScore}
            isDisabled={isDisabled} // Pass the disabled state to the Board
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={resetGame}
            sx={{ 
              marginTop: 2,
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0'
              }
            }}
          >
            Reset Game
          </Button>
        </div>
     
    </div>
    <DataTable refreshData={refreshData}></DataTable>
    </Container>
  );
};

export default Game;

function calculateWinner(squares: Array<string | null>): "X" | "O" | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a] as "X" | "O";
    }
  }
  return null;
}

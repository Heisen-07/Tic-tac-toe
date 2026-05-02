import React, { useState, useEffect, useCallback } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = useCallback((squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return squares.includes(null) ? null : 'Draw';
  }, []);

  const minimax = useCallback((squares, depth, isMaximizing) => {
    const result = checkWinner(squares);
    if (result === 'O') return 10 - depth;
    if (result === 'X') return depth - 10;
    if (result === 'Draw') return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'O';
          const score = minimax(squares, depth + 1, false);
          squares[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'X';
          const score = minimax(squares, depth + 1, true);
          squares[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }, [checkWinner]);

  const makeAiMove = useCallback(() => {
    let bestScore = -Infinity;
    let move;
    const squares = [...board];
    for (let i = 0; i < 9; i++) {
      if (!squares[i]) {
        squares[i] = 'O';
        const score = minimax(squares, 0, false);
        squares[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    if (move !== undefined) {
      const newBoard = [...board];
      newBoard[move] = 'O';
      setBoard(newBoard);
      setIsXNext(true);
    }
  }, [board, minimax]);

  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      setWinner(result);
    } else if (!isXNext) {
      const timer = setTimeout(() => makeAiMove(), 500);
      return () => clearTimeout(timer);
    }
  }, [board, isXNext, checkWinner, makeAiMove]);

  const handleClick = (i) => {
    if (board[i] || winner || !isXNext) return;
    const newBoard = [...board];
    newBoard[i] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white font-sans p-4">
      <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Tic Tac Toe
      </h1>
      
      <div className="mb-6 text-xl font-medium h-8">
        {winner ? (
          winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`
        ) : (
          `${isXNext ? "Your Turn (X)" : "AI is thinking..."}`
        )}
      </div>

      <div className="grid grid-cols-3 gap-3 bg-gray-800 p-3 rounded-xl shadow-2xl border border-gray-700">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-4xl font-bold rounded-lg transition-all duration-200 
              ${!cell && !winner && isXNext ? 'bg-gray-700 hover:bg-gray-600 cursor-pointer' : 'bg-gray-800 cursor-default'}
              ${cell === 'X' ? 'text-blue-400' : 'text-purple-400'}
              border border-gray-700 shadow-inner`}
          >
            {cell}
          </button>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg"
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;

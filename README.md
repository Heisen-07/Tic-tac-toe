🎮 Tic Tac Toe AI

A modern, high-performance Tic Tac Toe game built with React and Tailwind CSS, featuring a minimalist dark-mode interface and an unbeatable AI opponent powered by the Minimax algorithm.

🔗 Live Demo: https://tic-tac-toe-iota-self-77.vercel.app/

🚀 Features
🧠 Unbeatable AI
Uses the Minimax Algorithm to evaluate all possible moves, ensuring the AI never loses.
🎨 Modern UI/UX
Clean, dark-themed interface with smooth transitions using Tailwind CSS.
📱 Responsive Design
Optimized for both desktop and mobile devices.
⚡ High Performance
Built with Vite for fast development and optimized builds.
🧾 Clean Codebase
Structured and self-explanatory code with zero unnecessary comments.
🛠️ Tech Stack
Framework: React (Vite)
Styling: Tailwind CSS
State Management: React Hooks
Algorithm: Minimax (Recursive)
📦 Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/tic.git
cd tic
2. Install Dependencies
npm install
3. Configure Tailwind CSS

Ensure src/index.css includes:

@tailwind base;
@tailwind components;
@tailwind utilities;
4. Run Development Server
npm run dev

Open your browser and visit:

http://localhost:5173/
🧠 How the AI Works

The AI is powered by the Minimax algorithm, a recursive decision-making algorithm used in game theory.

It simulates all possible future board states.
Assigns scores:
Win: +10
Loss: -10
Draw: 0
Chooses the move that:
Maximizes its own score
Minimizes the opponent’s score

➡️ Result: The AI is mathematically impossible to beat.

📁 Project Structure
tic/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── vite.config.js
🚀 Deployment

The project is deployed on Vercel:

🔗 https://tic-tac-toe-iota-self-77.vercel.app/

📄 License

This project is open-source and available under the MIT License.

import React from 'react';
import logo from './logo.svg';
import './App.css';
import './table.js';

const variable = [
  { name: "доход" },
  { name: "расход"},
  { name: "за последний месяц"},
  { name: "транзакция более 1000 руб."}, 
];

function TransactionDisplay() {
  return (
    <h1> Display Transaction <script src="/table.js"></script> </h1>
  )
}


function App() {
  return (
    <div className="App">
      {variable.map((name, index) => 
        <button
        key={index}
        onClick={() => {
          console.log("Clicked name " + index);
        }}
        >
          {place.name}
        </button>
      )

      }
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { arr } from './table.js';


const variable = [
  { name: "доход" },
  { name: "расход"},
  { name: "за последний месяц"},
  { name: "транзакция более 1000 руб."}, 
];

function TransactionDisplay() {
  return (
    <h1> Display Transaction ${arr}</h1>
  )
}

class Transaction extends React.Component {
  render() {
    const Template = this.props.data.map(function(i) {
      return (
        <div key={i.id}>
          <p className="arr__value">{i.value}:</p>
          <p className="arr__type">{i.type}:</p>
          <p className="arr__date">{i.date}</p>
        </div>
      )
    })
    return (
      <div className="arr">
        {Template}
      </div>
    )
  }
}

const App = () => {
  return (
    <React.Fragment>
      <Transaction data={arr}/>

    </React.Fragment>
  )
}


// function App() {
//   return (
//     <div className="App">
//       {variable.map((name, index) => 
//         <button
//         key={index}
//         onClick={() => {
//           console.log("Clicked name " + index);
//         }}
//         >
//           {place.name}
//         </button>
//       )

//       }
//     </div>
//   );
// }

export default App;

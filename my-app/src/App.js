import React, { Component } from 'react';
import './App.css';
import { arr } from './table.js';

class Row extends Component {
  render() {
    const {cells} = this.props
    return (
      <div className="Row">
        {cells.map( (c) =>
          <div className="col element" key={c.id}>
            {c.value}
          </div>
        )}
      </div>
    )
  }
}

class Table extends Component {
  render() {
    const {rows} = this.props
    return (
      <div className='table'>
        {rows.map( (r, k) =>
          <Row cells={r} key={k} />
        )}
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();

    this.mass = {
      arr: [
        { id: 1, value: 23000, type: "расход", 
            date: "26.04.2020 23:15" },
            { id: 2, value: 5400, type: "расход", 
            date: "30.04.2020 08:01" },
            { id: 3, value: 32650, type: "доход", 
            date: "01.05.2020 12:30" },
            { id: 4, value: 522, type: "расход", 
            date: "01.05.2020 14:59" },
            { id: 5, value: 50000, type: "доход", 
            date: "10.05.2020 18:00" },
            { id: 6, value: 20000, type: "доход", 
            date: "13.06.2020 17:07" },
            { id: 7, value: 10500, type: "расход", 
            date: "14.06.2020 05:00" },
            { id: 8, value: 750, type: "расход", 
            date: "18.06.2020 12:03" },
            { id: 9, value: 15, type: "расход", 
            date: "10.07.2020 17:34" },
            { id: 10, value: 40000, type: "доход", 
            date: "11.07.2020 18:04" }
      ]
    }

  }
  render() {
    return (
      <Table rows={this.arr.id}/>
    )
  }
}

// function App() {
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "id",
        
//       }
//     ]
//   )
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


  // const variable = [
  //   { name: "доход" },
  //   { name: "расход" },
  //   { name: "за последний месяц" },
  //   { name: "транзакция более 1000 руб." }, 
  // ];
  
  // function TransactionDisplay() {
  //   return (
  //     <h1> Display Transaction ${arr}</h1>
  //   )
  // }
  
  // class Transaction extends React.Component {
  //   render() {
  //     const Template = this.props.data.map(function(i) {
  //       return (
  //         <div key={i.id}>
  //           <p className="arr__value">{i.value}:</p>
  //           <p className="arr__type">{i.type}:</p>
  //           <p className="arr__date">{i.date}</p>
  //         </div>
  //       )
  //     })
  //     return (
  //       <div className="arr">
  //         {Template}
  //       </div>
  //     )
  //   }
  // }
  
  // const App = () => {
  //   return (
  //     <React.Fragment>
  //       <Transaction data={arr}/>
  
  //     </React.Fragment>
  //   )
  // }
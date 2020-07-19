import React, { Component } from 'react';
import './App.css';
import arr from './table.js';
import {BootstrapTable, TableHeaderColumn} 
       from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class App extends React.Component {
  handleBtnClick1 = () => {
    this.refs.table.handleFilterData({ type: 'доход' })
  }
  handleBtnClick2 = () => {
    this.refs.table.handleFilterData({ type: 'расход' })
  }
  handleBtnClick3 = () => {
    this.refs.table.handleFilterData({ date: '07.2020' })
  }
  handleBtnClick4 = () => {
    const price = arr.filter(item => item.value > 1000)
    this.refs.table.handleFilterData({ value: price })
  }
  render() {
    return (
      <div>
        <BootstrapTable ref='table' data={ arr }>
          <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='value'>Value</TableHeaderColumn>
          <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
          <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
        </BootstrapTable>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button onClick={ this.handleBtnClick1 } className='btn btn-default'>доход</button>
        <button onClick={ this.handleBtnClick2 } className='btn btn-default'>расход</button>
        <button onClick={ this.handleBtnClick3 } className='btn btn-default'>за последний месяц</button>
        <button onClick={ this.handleBtnClick4 } className='btn btn-default'>более 1000руб.</button>
        </div>
      </div>
    );
  }
}


export default App;

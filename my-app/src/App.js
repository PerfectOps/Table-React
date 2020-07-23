import React, { Component } from 'react';
import './App.css';
import { arr } from './table';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [arr]}
  }
  handleBtnClick1 = () => {
    this.refs.table.handleFilterData({ type: "income" })
  }
  handleBtnClick2 = () => {
    this.refs.table.handleFilterData({ type: "expense" })
  }
  handleBtnClick3 = () => {
    this.refs.table.handleFilterData({ date: "2020-08" })
  }
  // handleBtnClick4 = () => {
  //   this.refs.table.handleFilterData({ value: >1000 })
  // }
  render() {
    return (
      <div>
        <BootstrapTable ref='table' data={ arr }>
          <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='value'>Value</TableHeaderColumn>
          <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
          <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
        </BootstrapTable>
        <div>
          <button onClick={ this.handleBtnClick1 } className='btn btn-default'>{"доход"}</button>
          <button onClick={ this.handleBtnClick2 } className='btn btn-default'>{"расход"}</button>
          <button onClick={ this.handleBtnClick3 } className='btn btn-default'>{"за последний месяц"}</button>
        {/* <button onClick={ this.handleBtnClick4 } className='btn btn-default'>{"более 1000руб."}</button> */}
        </div>
      </div>
    )
  }
}


export default App;

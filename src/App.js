import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKey: ""
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(evt) {
    var searchKey = evt.target.value;
    this.setState({ searchKey: searchKey });
    this.props.searchHandler(searchKey);
  }

  render() {
    return (
      <div>
        <input type="search" value={this.state.symbol} onChange={this.searchHandler} />
      </div>
    );
  }
}

class EmployeeListItem extends Component {
  render() {
    return (
      <li>
        <a href={"#employee/" + this.props.employee.id}>
          {this.props.employee.firstName} {this.props.employee.lastName}
        </a>
      </li>
    );
  }
}

class EmployeeList extends Component {
  render() {
    var items = this.props.employees.map(employee => {
      return (
        <EmployeeListItem key={employee.id} employee={employee} />
      );
    });

    return (
      <div>
        <ul className="emp-panel">
          {items}
        </ul>
      </div>
    );
  }
}

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { searchKey: "", employees: [] };
    this.searchHandler = this.searchHandler.bind(this)
  }

  componentDidMount() {
    this.searchHandler("");
  }

  searchHandler(key) {
    var self = this;
    this.props.service.findByName(key).done(function (resp) {
      self.setState({ searchKey: key, employees: resp });
    })
  }

  render() {

    return (
      <div className="container">
        <Header text="Employee Directory" />
        <SearchBar searchHandler={this.searchHandler} />
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}

export default HomePage;
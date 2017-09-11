import React, { Component } from 'react';
import Header from './Header';

class EmployeePage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {employee: []};

  }

  componentDidMount() {
    var self = this;
    this.props.service.findById(this.props.employeeId).done(function(resp) {
      self.setState({employees: resp});
    }.bind(this));
  }
  
  render() {
    return (
      <div>
        <Header text="Employee Details" />
        <h3>{this.state.employee.firstName} {this.state.employee.lastName}</h3>
        {this.state.employee.title}
      </div>
    );
  }
}

export default EmployeePage;
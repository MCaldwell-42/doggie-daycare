import React from 'react';
import PropTypes from 'prop-types';
import employeeShape from '../../helpers/propz/employeeShape';
import employeeData from '../../helpers/data/employeeData';
import Employee from '../Employee/Employee';
import './StaffRoom.scss';

class StaffRoom extends React.Component {
  state = {
    employees: [],
  }

  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  componentDidMount() {
    employeeData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('could not get employees, err'));
  }

  render() {
    const makeEmployees = this.state.employees.map(employee => (
      <Employee key={employee.id} employee ={employee}/>
    ));
    return (
      <div className="StaffRoom d-flex flex-wrap">
        { makeEmployees }
      </div>
    );
  }
}

export default StaffRoom;

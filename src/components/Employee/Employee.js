import React from 'react';
import './Employee.scss';
import employeeShape from '../../helpers/propz/employeeShape';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="Employee">
        <div className="card">
          <img className="card-img-top employeePic" src={employee.imgUrl} alt="employee!"/>
          <div className="card-body">
            <h5 className="card-title">{employee.name}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;

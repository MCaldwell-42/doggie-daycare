import React from 'react';
import myDogs from '../../App/dogs';
import myEmployees from '../../App/employees';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
    this.setState({ employees: myEmployees });
  }

  render() {
    const { dogs } = this.state;
    const { employees } = this.state;
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
          <DogPen dogs={dogs}/>
          </div>
          <div className="col">
          <StaffRoom employees={employees}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

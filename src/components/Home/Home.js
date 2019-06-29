import React from 'react';
import myDogs from '../../App/dogs';
import myEmployees from '../../App/employees';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import './Home.scss';
import walksData from '../../helpers/data/walksData';

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

    //     const addWalk => {
    //       const newWalk = {};
    //       newWalk.dogId = 'dropdownSelection';
    //       newWalk.employeeId = 'employeeSelection';
    //       newWalk.date = 'dateinput.value';
    //       walksData.addNewWalk(newWalk);
    //     }
    // above is a rough run without real data selectors till I get dropdowns working.
    return (
      <div className="Home">
        <div className="WalksMaker">
          <form>
  <div class="form-group">
  <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu">
    <span class="dropdown-item" >Action</span>
    <span class="dropdown-item" >Another action</span>
    <span class="dropdown-item" >Something else here</span>
  </div>
</div>
{/* drop down doesn't work */}
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">When?</label>
    <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Walk Date"/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={addWalk}>Submit</button>
  </form>
        </div>
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

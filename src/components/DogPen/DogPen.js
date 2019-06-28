import React from 'react';
import PropTypes from 'prop-types';
import dogData from '../../helpers/data/dogData';
import dogShape from '../../helpers/propz/dogShape';
import Dog from '../Dog/Dog';
import './DogPen.scss';

class DogPen extends React.Component {
  state = {
    dogs: [],
  }

  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }


  componentDidMount() {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('could not get dogs, err'));
  }

  render() {
    const makeDogs = this.state.dogs.map(dog => (
  <Dog key={dog.id} dog={dog} />
    ));
    return (
      <div className="DogPen d-flex flex-wrap">
        { makeDogs }
      </div>
    );
  }
}

export default DogPen;

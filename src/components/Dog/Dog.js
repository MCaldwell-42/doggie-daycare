import React from 'react';
import './Dog.scss';
import dogShape from '../../helpers/propz/dogShape';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="Dog col-4">
        <div className="card">
          <img className="card-img-top dogPic" src={dog.imgUrl} alt="doggie!"/>
          <div className="card-body">
            <h5 className="card-title">{dog.name}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;

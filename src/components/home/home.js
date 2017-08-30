import React from 'react';


class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {backgroundImage: ''};
  }


  render() {

    return (
      <div className="home-container">
        <div className="welcome-text">
          <h1>Flickr Search</h1>
          <p>Image search made easy</p>
        </div>

      </div>
    )
  }
}

export default Home;

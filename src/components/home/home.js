import React from 'react';
import img1 from '../../images/img1.jpg'


class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {backgroundImage: img1};
  }

  render() {
    let backgroundUrl = {
  "background-image" : "url(../images/" + this.state.backgroundImage +")"
}
    return (
      <div className="home-container" bsstyle={backgroundUrl}>
        <h1>Home Component</h1>
      </div>
    )
  }
}

export default Home;

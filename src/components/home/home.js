import React from 'react';
import img1 from '../../images/img1.jpg'


class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {backgroundImage: ''};
  }

  componentDidMount() {

      // generate a random number from  1 and 4
      let randImage=Math.floor(Math.random()*5)
      //put image link portion in state
      this.setState({
        // backgroundImage: 'img' + randImage,
        backgroundImage: img1

      })
    }



  render() {
    let backgroundUrl = {
  "backgroundImage" : "url(" + this.state.backgroundImage +")"
}
    return (
      <div className="home-container" style={backgroundUrl}>
      </div>
    )
  }
}

export default Home;

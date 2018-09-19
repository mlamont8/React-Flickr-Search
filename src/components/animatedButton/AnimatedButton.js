import React from 'react';
import PropTypes from 'prop-types';

class AnimatedButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { btnToggle: false };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState({
          btnToggle: !this.state.btnToggle
        })
      }

        render() {
            const formActive = this.state.btnToggle ? 'animatedInput active' : 'animatedInput';
            const btnClose = this.state.btnToggle ? 'inputBtn close' : 'inputBtn';
            return (
                <div className="homeMiddle">
            
                <form className="search-box" onSubmit={this.props.handleSubmit}>
                  <input type="text" 
                    value={this.props.value}
                    onChange={this.props.handleChange}
                    className={formActive}/>
                  <button 
                    type="button" 
                    className={btnClose}
                    onClick={this.handleClick}></button>
                </form>
                 </div>
            );
          }
        }

        AnimatedButton.propTypes = {
          handleSubmit: PropTypes.func,
          handleChange: PropTypes.func,
          value: PropTypes.string,
        }


export default AnimatedButton;
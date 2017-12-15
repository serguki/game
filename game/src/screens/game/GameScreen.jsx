import React, { Component } from 'react';
import {connect} from 'react-redux';

class GameScreen extends Component {

  componentWillMount() {
    //this.props.dispatch(initTheme());
  }

  render() {
    return (
        <div>
          Hello!
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      game: state.game,
    };
}

function matchDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, matchDispatchToProps)(GameScreen);

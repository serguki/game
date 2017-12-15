import React, { Component } from 'react';
import {connect} from 'react-redux';
import GameScreen from 'screens/game/GameScreen'

class App extends Component {

  render() {
    return (
        <div>
          {
            (this.props.app.screen === 0) ? <div></div>:
            (this.props.app.screen === 1) ? <GameScreen></GameScreen>:
            (this.props.app.screen === 2) ? <div></div>: 
            <div></div>
          }
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      app: state.app,
    };
}

function matchDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, matchDispatchToProps)(App);

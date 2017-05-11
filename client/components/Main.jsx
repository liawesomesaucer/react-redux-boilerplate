import React from 'react';
import { connect } from 'react-redux';
import SplitPane from 'react-split-pane';

import * as actions from '../actions/index';

const propTypes = {
  state: React.PropTypes.object,
};

const defaultProps = {
  state: {},
};

/**
 * Main component
 */
class Main extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.state);
  }
  render() {
    return (
      <div>
        <SplitPane split="vertical" defaultSize={'15%'}>
          <div />
          <div />
        </SplitPane>
      </div>
    );
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, actions)(Main);

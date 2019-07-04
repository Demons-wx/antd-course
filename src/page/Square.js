/*
* @Author: wangxuan
* @Date:   2019-06-29 14:54:31
* @Last Modified by:   wangxuan
* @Last Modified time: 2019-06-29 14:57:58
*/
import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}


export default Square;

/*
* @Author: wangxuan
* @Date:   2019-06-29 15:51:16
* @Last Modified by:   wangxuan
* @Last Modified time: 2019-07-04 23:11:22
*/
import React from 'react';

const MyInput = ({ value='', onChange }) => (
        <input value={value} onChange={onChange} />
    );

class Demo extends React.Component {

    state = {
        text: '',
    }

    onTextChange = (event) => {
        this.setState({ text: event.target.value });
    }

    onTextReset = () => {
        this.setState({text: ''});
    }

    render() {
        return (
            <div>
                <MyInput value={this.state.text} onChange={this.onTextChange} />
                <button onClick={this.onTextReset}>Reset</button>
            </div>
        );
    }
}

export default Demo;
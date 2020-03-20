import React from 'react';
import {connect} from 'react-redux';
import { increment, decrement  } from './Actions';

class Counter extends React.Component {
 //   state = { count: 0 }

    increment = () => {
        this.props.increment();
    }

    decrement = () => {
        this.props.decrement();
      /*  this.setState({
            count: this.state.count - 1
        });*/
    }


    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}



function mapStateToProps(state){
    return{
        count:state.reducerf.count

    };
}

const mapDispatchToProps = {
    increment,
    decrement
};



export default connect (mapStateToProps,mapDispatchToProps)(Counter);
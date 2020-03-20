import React from 'react';
import {connect} from 'react-redux';
import { incrementd, decrementd  } from './Actions';

class Counter2 extends React.Component {


    incrementd = () => {
        this.props.incrementd();
    }

    decrementd = () => {
        this.props.decrementd();

    }


    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrementd}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.incrementd}>+</button>
                </div>
            </div>
        )
    }
}



function mapStateToProps(state){
    return{
       count:state.reducerd.count2
        //<span>{this.props.count}</span>
    };
}

const mapDispatchToProps = {
    incrementd,
    decrementd
};



export default connect (mapStateToProps,mapDispatchToProps)(Counter2);

export function reducerf(state = {
    count:0

},action) {

    if (action.type ==="INCREMENT"){

        return {
            ...state,
            count: state.count +1
        }

    }

    else if (action.type ==="DECREMENT"){
        return {
            ...state,
            count: state.count -1
        }

    }

    return state;


}


export function reducerd(state = {
    count2:0

},action) {

    if (action.type ==="INCREMENTDOUBLE"){

        return {
            ...state,
            count2: state.count2 +2
        }

    }

    else if (action.type ==="DECREMENTDOUBLE"){
        return {
            ...state,
            count2: state.count2 -2
        }

    }

    return state;

}
import React from 'react'
import {connect} from 'react-redux'
import {buycake} from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h1>number of cakes-{props.numOfCakes}</h1>
            <button onClick={props.buycake}>buy cake</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfCakes:state.cake.numOfCakes
    }

}

const mapDispatchToProps = dispatch =>{
    return{
        buycake:()=>dispatch(buycake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)

import React from 'react'
import {connect} from 'react-redux'
import {buyIcecream} from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h1>number of icecreams-{props.numOfIceCream}</h1>
            <button onClick={props.buyIcecream}>buy ice</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfIceCream:state.iceCream.numOfIceCreams
    }

}

const mapDispatchToProps = dispatch =>{
    return{
        buyIcecream:()=>dispatch(buyIcecream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)

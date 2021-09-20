import React from 'react'
import { connect } from 'react-redux'
import { navigate } from '../actions/index'

function Cart (props) {
  const { cart, dispatch } = props
  console.log(cart)

  const clickHandler = () => {
    dispatch(navigate('listing'))
  }

  return (
    <div className='cart'>
      <table>
        <thead>
          <tr>
            <td>Beer</td>
            <td>Quantity</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ id, name, quantity }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td><input className='update-input' value={quantity} /></td>
                {/* TODO: implement deletes */}
                <td><button><span className='fa fa-trash fa-2x' /></button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className='actions'>
        <a href='#' onClick={clickHandler} >Continue shopping</a>
        <button>Update</button> {/* TODO: implement updates */}
        <button className='button-primary'>Checkout</button>
      </p>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    cart: globalState.cart
  }
}
export default connect(mapStateToProps)(Cart)

import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cartSlice"
import "./product.css"


export const ProductCart = ({ key, id, cover, name, price }) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }))
  }
  return (
    <>
      <div className='box boxItems' id='product'>
        <div className='img'>
          <Link>
            <img src={cover} alt='cover' />
          </Link>
        </div>
        <div className='details'>
          <h3>${price}</h3>
          <p>{name}</p>
          <button className="cart-btn" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}

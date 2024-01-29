import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const clearItemFromCartHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
    const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemFromCartHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemToCartHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemFromCartHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem
import React, {useReducer} from 'react';
import CartContext from './cart-context';

const defaultState = {
    items: [],
    totalAmount: 0
}

const cartStateReducer = (state, action) => {
    if(action.type === "ADD"){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        let updatedItems;
        const itemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[itemIndex];
        if(existingCartItem){
            let updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem;
        }
        else{
            updatedItems = state.items.concat(action.item);
        }
        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === "REMOVE"){
        

        let updatedItems;
        let updatedTotalAmount
        const itemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[itemIndex];
        const existingCartItemAmount = existingCartItem.amount;
        if(existingCartItemAmount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        else{
            let updatedItem = {
                ...existingCartItem,
                amount: existingCartItemAmount - 1
            }
            updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem;
        }

        updatedTotalAmount = state.totalAmount - existingCartItem.price;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }
    return defaultState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(cartStateReducer, defaultState);
    const addItemToCartHandler = (item) => {
        dispatchCartState({type: "ADD", item: item});
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartState({type: "REMOVE", id: id});
    }
    const clearCartHandler = (id) => {
        dispatchCartState({type: "CLEAR"});
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider
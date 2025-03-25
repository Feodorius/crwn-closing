import { createAction } from "utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";
import { CartItem, Product } from "utils/types";

const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: Product) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((item => item.id !== existingCartItem.id));
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
const clearCartItem = (cartItems: CartItem[], cartItemToRemove: Product) => {
	return cartItems.filter((item => item.id !== cartItemToRemove.id));
}

export const setIsCartOpen = (isOpen: boolean) =>
	createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isOpen);



export const addItemToCart = (cartItems: CartItem[], productToAdd: Product) => {
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, addCartItem(cartItems, productToAdd));
};

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: Product) => {
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, removeCartItem(cartItems, productToRemove));
};

export const clearItemFromCart = (cartItems: CartItem[], productToRemove: Product) => {
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, clearCartItem(cartItems, productToRemove));
};
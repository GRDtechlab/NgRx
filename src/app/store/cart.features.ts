import {
  createAction,
  createReducer,
  on,
  props,
  createFeature,
} from '@ngrx/store';
import { products } from './products.features';

export interface ICart extends products {
  quantity: number;
}

export interface ICartState {
  cartItems: ICart[];
  totalAmount: number;
}

export const initialState: ICartState = { cartItems: [], totalAmount: 0 };

// 1. Action [Cart Action]

export const addToCart_action = createAction(
  '[Cart] add to cart action',
  props<{ product: ICart }>()
);

// 2. Reducer [Cart Reducer]

export const cartReducer = createReducer(
  initialState,
  on(addToCart_action, (state, { product }) => {
    const updatedItems = state.cartItems.some((i) => i.id === product.id)
      ? state.cartItems.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + product.quantity }
            : i
        )
      : [...state.cartItems, product];

    return {
      ...state,
      cartItems: updatedItems,
      totalAmount: updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    };
  })
);

// 3. Feature [Cart Feature]

export const cartFeature = createFeature({
  name: 'cartFeature',
  reducer: cartReducer,
});

export const {
  name,
  reducer,
  selectCartItems,
  selectTotalAmount,
  selectCartFeatureState,
} = cartFeature;

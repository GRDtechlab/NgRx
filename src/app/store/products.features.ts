import {
  createAction,
  createReducer,
  createFeature,
  props,
  on,
} from '@ngrx/store';

export interface IProductState {
  products: products[];
  loading: boolean;
  error: string | null;
}

export interface products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

// 1. Initial state declaration...
export const initialState: IProductState = {
  products: [],
  loading: false,
  error: null,
};

// 2. Action creation
export const loadProducts = createAction('[Product API] load products');
export const loadProductsSuccess = createAction(
  '[Product API] load products success ',
  props<{ products: products[] }>()
);
export const loadProductsFailure = createAction(
  '[Product API] load products failed',
  props<{ error: string }>()
);

// 3. Now, create feature reducers...

export const ProductsFeature = createFeature({
  name: 'productsFeature',
  reducer: createReducer(
    initialState,
    on(loadProducts, (state) => ({ ...state, loading: true, error: null })),
    on(loadProductsSuccess, (state, { products }) => ({
      ...state,
      products: products,
      error: null,
      loading: false,
    })),
    on(loadProductsFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error: error,
    }))
  ),
});

export const {
  name,
  reducer,
  selectProducts,
  selectLoading,
  selectError,
  selectProductsFeatureState,
} = ProductsFeature;

import {createReducer, combineReducers} from "@reduxjs/toolkit";

import {
    searchProductRequest,
    searchProductSuccess,
    searchProductError,
    addProductRequest,
    addProductSuccess,
    addProductError,
    deleteProductRequest,
    deleteProductSuccess,
    deleteProductError,
    getCurentDayInfoRequest,
    getCurentDayInfoSuccess,
    getCurentDayInfoError,
} from "../actions/diaryActions";

const initialState = {
    productsFound: [],
    eatenProducts: [],
    daySummary: {},
    dayId: "",
    curentDate: "",
};

const formDiaryReducer = createReducer(initialState, {
    [searchProductSuccess]: (state, {payload}) => ({
        ...state,
        productsFound: [...payload],
    }),

    [addProductSuccess]: (state, {payload}) => ({
        ...state,
        eatenProducts: [...state.eatenProducts, payload.eatenProduct],
    }),

    [deleteProductSuccess]: (state, {payload}) => ({
        ...state,
        eatenProducts: [...state.eatenProducts.filter(product => product.id !== payload.eatenProductId)],
        daySummary: payload.newDaySummary,
    }),

    [getCurentDayInfoSuccess]: (state, {payload}) => ({
        ...state,
        eatenProducts: payload.eatenProducts ? payload.eatenProducts : [],
        daySummary: payload.daySummary ? payload.daySummary : {},
        dayId: payload.id,
    }),
});

const errorDiaryReducer = createReducer(null, {
    [searchProductError]: ({payload}) => payload,
    [searchProductRequest]: () => null,

    [addProductError]: ({payload}) => payload,
    [addProductRequest]: () => null,

    [deleteProductError]: ({payload}) => payload,
    [deleteProductRequest]: () => null,

    [getCurentDayInfoError]: ({payload}) => payload,
    [getCurentDayInfoRequest]: () => null,
});
const userDiaryReducer = combineReducers({user: formDiaryReducer, error: errorDiaryReducer});

export default userDiaryReducer;

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
    getInfoCurentRequest,
    getInfoCurentSuccess,
    getInfoCurentProductError,
} from "../actions/diaryActions";

const initialState = {
    eatenProducts: [],
    curentDate: "",
    daySummary: {},
    dayId: "",
    productsFound: [],
};

const formDiaryReducer = createReducer(initialState, {
    [searchProductSuccess]: (state, {payload}) => ({
        ...state,
        productsFound: [...payload],
    }),

    [addProductSuccess]: (state, {payload}) => ({
        ...state,
        ...payload,
    }),

    [deleteProductSuccess]: (state, {payload}) => ({
        ...state,
        daySummary: {...payload},
    }),

    [getInfoCurentSuccess]: (state, {payload}) => ({
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

    [getInfoCurentProductError]: ({payload}) => payload,
    [getInfoCurentRequest]: () => null,
});
const userDiaryReducer = combineReducers({user: formDiaryReducer, error: errorDiaryReducer});

export default userDiaryReducer;

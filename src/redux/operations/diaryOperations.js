import api from "../../services/api";
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

const searchProductOperation = query => async (dispatch, getState) => {
    const accessToken = getState().LogInReducer.accessToken;
    api.setToken(accessToken);
    dispatch(searchProductRequest());
    try {
        const data = await api.searchProduct(query);
        dispatch(searchProductSuccess(data));
    } catch (error) {
        dispatch(searchProductError(error));
    }
}

const addNewProductOperation = product => async (dispatch, getState) => {
    const accessToken = getState().LogInReducer.accessToken;
    api.setToken(accessToken);
    dispatch(addProductRequest());
    try {
        const data = await api.addEatenProduct(product);
        dispatch(addProductSuccess(data));
    } catch (error) {
        dispatch(addProductError(error));
    }
};

const getCurentDayInfoOperation = date => async (dispatch, getState) => {
    const accessToken = getState().LogInReducer.accessToken;
    api.setToken(accessToken);
    dispatch(getCurentDayInfoRequest());
    try {
        const data = await api.getProducts(date);
        dispatch(getCurentDayInfoSuccess(data));
    } catch (error) {
        dispatch(getCurentDayInfoError(error));
    }
};

const deleteProductOperation = prodOfDay => async (dispatch, getState) => {
    const accessToken = getState().LogInReducer.accessToken;
    api.setToken(accessToken);
    const {eatenProductId} = prodOfDay;
    dispatch(deleteProductRequest());
    try {
        const data = await api.delEatenProduct(prodOfDay);
        dispatch(deleteProductSuccess({...data, eatenProductId}));
    } catch (error) {
        dispatch(deleteProductError(error));
    }
};

export {searchProductOperation, addNewProductOperation, getCurentDayInfoOperation, deleteProductOperation};
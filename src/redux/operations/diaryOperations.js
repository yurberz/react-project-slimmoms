import axios from "axios"
import api from '../../services/api'
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
    getInfoCurentProductError
} from "../actions/diaryActions"

const addNewProductOperation = (product) => async (dispatch )=> {
    dispatch(addProductRequest());
    try {
        const { data } = await api.addEatenProduct(product);
        dispatch(addProductSuccess(data));
    } catch (error) {
        dispatch(addProductError(error));
    }
}

const getCurentInfoOperation = (date) => async (dispatch) => {
    dispatch(getInfoCurentRequest());
    try {
        const { data } = await api.getProducts(date);
        dispatch(getInfoCurentSuccess(data));
    } catch (error) {
        dispatch(getInfoCurentProductError(error));
    }
}

const deleteProductOperation = (dayId, eatenProductId) =>  async dispatch => {
    dispatch(deleteProductRequest())
    try {
        const { data } = await api.delEatenProduct(dayId, eatenProductId);
        dispatch(deleteProductSuccess(data));
    } catch (error) {
        dispatch(deleteProductError(error));
    }
}
// посмотреть правильность названия, чтоб dayId, eatenProductId были в state распарсить и добавить айди

export {addNewProductOperation, getCurentInfoOperation, deleteProductOperation}

import { createAction } from "@reduxjs/toolkit";

const searchProductRequest = createAction("@user/searchProductRequest");
const searchProductSuccess = createAction("@user/searchProductSuccess");
const searchProductError = createAction("@user/searchProductError");

const addProductRequest = createAction("@user/addProductRequest");
const addProductSuccess = createAction("@user/addProductSuccess");
const addProductError = createAction("@user/addProductError");

const deleteProductRequest = createAction("@user/deleteProductRequest");
const deleteProductSuccess = createAction("@user/deleteProductSuccess");
const deleteProductError = createAction("@user/deleteProductError");

const getInfoCurentRequest = createAction("@user/getInfoCurentRequest");
const getInfoCurentSuccess = createAction("@user/getInfoCurentSuccess");
const getInfoCurentProductError = createAction("@user/getInfoCurentError");

export {
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
}
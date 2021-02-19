import DiaryStyled from './DiaryAddProductStyled'
import PlusIcon from "../icons/PlusIcon"
import { searchProductOperation, addNewProductOperation } from "../../redux/operations/diaryOperations"
import React, { Component } from 'react'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'
import FilterList from './FilterList'

class DiaryAddProduct extends Component {
    state = {
        product: "",
        weight: "",
        productId: "",
        data: "",
    }
    
    //this.props.productVariables

    submitDiaryAddProduct = event => {
        event.preventDefault();
        this.props.addNewProductOperation({date: "YYYY-MM-DD", productId: "",  weight: "" });
    }

    inputHandlerDiaryAddProduct = ({ target }) => {
        
        if (target.value === "") {
            return
        }
        this.props.searchProductOperation(target.value);
    }
    
    filterList = () => {
    return this.props.productVariables.map(({ title, _id }) => { return {title: title.ru , id: _id}})   
            .filter((prod, index) => index <= 9 ? true : false)
        
    }

    filterListClickLi = event => {
       const {id} = event.target.dataset
    }

    render() {
        const filterList = this.filterList()

        return (
            <DiaryStyled>
                <form className="form_add" onSubmit={this.submitDiaryAddProduct} >
                    <input className="input_add-product" placeholder="Введите название продукта" onChange={debounce(this.inputHandlerDiaryAddProduct, 500)} />
                    {filterList.length > 0 && <FilterList list={filterList} handleClickLi={this.filterListClickLi} />}
                    <input className="input_add-gramm" placeholder="Грамм" onChange={debounce(this.inputHandlerDiaryAddProduct, 500)} />
                    <button className="button" type="submit" ><PlusIcon width="14" height="14" fill="white" className="svg-add" /></button>
                    {/* <button className="button" type="submit">Добавить</button> */}

                </form>
                
                {/* {products.length !== 0 ?( <div>
                    <select name="product"
                        // onChange={ }
                    >
                    {products.map(product => (
                        <option data-id={product.productId} value={product.product} key={product.productId} name={product.product}>{product.product}</option>
                         ))}   
                        </select>
                </div>) : null} */}
                 
            </DiaryStyled>
        )
    }
}
const mapStateToPtops = (state) => ({
    productVariables: state.userDiary.user.productsFound,
})

const mapDispatchToProps = (dispatch) => ({
    searchProductOperation: query => dispatch(searchProductOperation(query)),
    addNewProductOperation: product => dispatch(addNewProductOperation(product)),
})

export default connect(mapStateToPtops, mapDispatchToProps)(DiaryAddProduct);

// submitDiaryAddProduct = event => {
    //     event.preventDefault();
    //     const { product, weight
    //         // , id
    //     } = this.state;
    //     if (product === '' || weight === '') {
    //         alert("Внесены не все данные. Пожалуйста, заполните все поля");
    //         return
    //     } else if (isNaN(Number(weight))) {
    //         alert("Некорректный ввод. Используйте только ЧИСЛА");
    //         return
    //     }

    // }
import DiaryStyled from './DiaryAddProductStyled'
import PlusIcon from "../icons/PlusIcon"

const DiaryAddProduct = () => {
    return (
        <DiaryStyled>
            <form className="form_add">  
            <input className="input_add-product" placeholder="Введите название продукта"></input>
            <input className="input_add-gramm" placeholder="Грамм"></input>
                <button className="button" type="submit"><PlusIcon width="14" height="14" fill="white" className="svg-add"/></button>
                {/* <button className="button" type="submit">Добавить</button> */}
        </form>
        </DiaryStyled>
    )
} 

export default DiaryAddProduct;
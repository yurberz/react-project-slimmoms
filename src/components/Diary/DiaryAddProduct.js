import DiaryStyled from './DiaryAddProductStyled'

const DiaryAddProduct = () => {
    return (
        <DiaryStyled>
            <form className="form_add">  
            <input className="input_add-product" placeholder="Введите название продукта"></input>
            <input className="input_add-gramm" placeholder="Грамм"></input>
            <button className="button" type="submit">Добавить</button>
        </form>
        </DiaryStyled>
    )
} 

export default DiaryAddProduct;
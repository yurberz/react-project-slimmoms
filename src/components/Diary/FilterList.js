<<<<<<< HEAD
const FilterList = ({list, handleClickLi}) => {
    return (
        <ul>
            {list.map((item) => (<li key={item.id} data-id={item.id} onClick={handleClickLi}>{item.title}</li>))} 
            </ul>
=======
import FilterListStyled from "./FilterListStyled"

const FilterList = ({ list, handleClickLi }) => {
    return (
        <FilterListStyled>
        <ul className="filter-list_ul">
            {list.map((item) => (<li className="filter-list_li" key={item.id} data-id={item.id} onClick={handleClickLi}>{item.title}</li>))} 
            </ul>
            </FilterListStyled>
>>>>>>> 312281f22a90bbf326e634ac33c5fb1ecaff1d55
    )
}

export default FilterList;
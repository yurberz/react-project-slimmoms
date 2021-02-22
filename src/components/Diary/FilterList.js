const FilterList = ({list, handleClickLi}) => {
    return (
        <ul>
            {list.map((item) => (<li key={item.id} data-id={item.id} onClick={handleClickLi}>{item.title}</li>))} 
            </ul>
    )
}

export default FilterList;
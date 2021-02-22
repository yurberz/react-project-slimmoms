import { deleteProductOperation } from "../../redux/operations/diaryOperations"
import { Component } from 'react';
import { connect } from 'react-redux';
import DelIcon from '../icons/DelIcon';
import DiaryStyled from './DiaryListStyled'

class DiaryList extends Component {

<<<<<<< HEAD
    onClickDelete = (event) => {
        this.props.deleteProductOperation({dayId: this.props.dayId , eatenProductId: event.target.dataset.id})
        //console.log(event.target);
    }
=======
    onClickDelete = (id) => {
        this.props.deleteProductOperation({dayId: this.props.dayId , eatenProductId: id})
        //console.log(event.target);
    }

>>>>>>> 312281f22a90bbf326e634ac33c5fb1ecaff1d55
    
render(){
    return (
        <DiaryStyled>  
            <ul className="diary-list_ul">
                {this.props.eatenProducts.map((eatenProduct) => (
                     <li className="diary-list_li" key={eatenProduct.id}>
                    <span className="diary-list_name">{eatenProduct.title}</span>
                    <span className="diary-list_gramm">{eatenProduct.weight} г</span>
<<<<<<< HEAD
                     <span className="diary-list_kkal">{eatenProduct.kcal} kkal</span>
                        <button className="button-svg" onClick={this.onClickDelete} data-id={eatenProduct.id} > <DelIcon height="16" width="16" fill="#9B9FAA" />
                            </button>
                          
                                 
=======
                     <span className="diary-list_kkal">{Math.round(eatenProduct.kcal)} ккал</span>
                        <button onClick={()=> this.onClickDelete(eatenProduct.id)} data-id={eatenProduct.id} ><DelIcon height="16" width="16" fill="#9B9FAA" />
                            </button>               
>>>>>>> 312281f22a90bbf326e634ac33c5fb1ecaff1d55
            </li>))}    
        </ul>
        </DiaryStyled>
    )}
}

const mapStateToPtops = (state) => ({
    eatenProducts: state.userDiary.user.eatenProducts,
    dayId: state.userDiary.user.dayId,
})

const mapDispatchToProps = (dispatch) => ({
    deleteProductOperation: prodOfDay => dispatch(deleteProductOperation(prodOfDay))
})

export default connect(mapStateToPtops, mapDispatchToProps)(DiaryList);
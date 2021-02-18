
import DelIcon from '../icons/DelIcon';
import DiaryStyled from './DiaryListStyled'

const DiaryList = () => {
    return (
        <DiaryStyled>
            
                 <ul className="diary-list_ul">
                 <li className="diary-list_li">
                <span className="diary-list_name">Apple</span>
                <span className="diary-list_gramm">gr</span>
                <span className="diary-list_kkal">kkal</span>
                
                    <button className="button"><DelIcon height="11" width="11" fill="#9B9FAA"/></button>
                    
            </li>
        </ul>
      
        </DiaryStyled>
    )
}

export default DiaryList;
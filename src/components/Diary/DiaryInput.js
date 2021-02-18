import React from 'react'
import DiaryStyle from "./DiaryStyled"

const DiaryInput = ({title, type="text", value, onChange}) => {
    return (
        <DiaryStyle>
            <label>{title}
                <input  type={type} value={value} name="" onChange={onChange}/>
            </label>
        </DiaryStyle>
    )
}

export default DiaryInput

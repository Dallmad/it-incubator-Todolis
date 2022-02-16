import React, {ChangeEvent} from "react";

type CheckBoxType={
    isDone:boolean
    CheckBoxChangeStatus:( value: boolean)=>void
}

export const CheckBox=(props:CheckBoxType)=>{

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        props.CheckBoxChangeStatus(e.currentTarget.checked)
    }

    return(
        <input type="checkbox" checked={props.isDone} onChange={onChangeHandler} />
    )
}

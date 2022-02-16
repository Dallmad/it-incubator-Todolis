import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {TextField} from "@material-ui/core";


type EditableSpanPropsType = {
    title: string
    changeTitle: (newTitle: string) => void
}

export const EditableSpan: FC<EditableSpanPropsType> = ({
                                                     title,
                                                     changeTitle
                                                 }) => {
    const [newTitle, setNewTitle] = useState<string>(title)
    const [editMode, setEditMode] = useState<boolean>(false)

    const onChangeUserText = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)
    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        changeTitle(newTitle)
    }
    const onKeyPressOffEditMode = (e: KeyboardEvent<HTMLInputElement>) =>
        e.key === "Enter" && offEditMode()
    return (
        editMode
            ? <TextField
                autoFocus
                value={newTitle}
                onChange={onChangeUserText}
                onBlur={offEditMode}
                onKeyPress={onKeyPressOffEditMode}
            />


            /*<input
                autoFocus
                value={newTitle}
                onChange={onChangeUserText}
                onBlur={offEditMode}
                onKeyPress={onKeyPressOffEditMode}
            />*/
            : <span onDoubleClick={onEditMode}>{title}</span>
    )
}

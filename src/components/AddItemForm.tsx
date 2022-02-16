import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {Button} from "../Button";
import {IconButton, TextField} from "@material-ui/core";
import {AddToPhotos} from "@material-ui/icons";

type AddItemFormPropsType = {
    addItem: (title: string)=> void

}

export const AddItemForm:React.FC<AddItemFormPropsType> = (props) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) =>
        e.key === "Enter" && onClickAddItem()
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onClickAddItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addItem(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }
    /*const errorMessage = error
        ? <div style={{color: "white", backgroundColor: "red"}}>Title is required!</div>
        : null*/

    return (
        <div>
            <TextField
                value={title}
                onChange={onChangeSetTitle}
                onKeyPress={onKeyPressAddItem}
                variant={'outlined'}
                label={'Title'}
                size={'small'}
                error={error}
                helperText={error && 'Title is required!'}
                // className={error ? "error" : ""}
            />

            {/*<input
                value={title}
                onChange={onChangeSetTitle} //input.value
                onKeyPress={onKeyPressAddItem}
                className={error ? "error" : ""}
            />*/}
            <IconButton
                onClick={onClickAddItem}>
                <AddToPhotos/>
            </IconButton>

            {/*<Button onClickHandler={onClickAddItem} title={'+'} active={false}/>*/}
            {/*{errorMessage}*/}
        </div>
    )
}


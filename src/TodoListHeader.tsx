import React from 'react';
import {Button} from "./Button";
import {EditableSpan} from "./EditableSpan";
import {DeleteForever} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

type TodoListHeaderPropsType = {
    title: string
    removeTodoList: () => void
    changeTodolistTitle: (newTitle: string) => void
}

export const TodoListHeader: React.FC<TodoListHeaderPropsType> = ({
                                                                      title,
                                                                      changeTodolistTitle,
                                                                      ...props
                                                                  }) => {
    return (
        <div >
            <h3>
                <EditableSpan title={title} changeTitle={changeTodolistTitle}/>
                <IconButton
                    onClick={props.removeTodoList}>
                    <DeleteForever/>
                </IconButton>

                {/*<Button onClickHandler={props.removeTodoList} title={'x'} active={false}/>*/}
            </h3>
        </div>
    )
}


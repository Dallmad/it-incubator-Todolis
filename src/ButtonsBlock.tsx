import React, {FC} from 'react';
import {Button} from "./Button";
import {FilterValuesType} from "./App";

type ButtonsBlockPropsType = {
    filter: FilterValuesType
    setFilterValue: (filter: FilterValuesType) => () => void
}

export const ButtonsBlock: FC<ButtonsBlockPropsType> = ({
                                                            filter,
                                                            setFilterValue
                                                        }) => {
    return (
        <div>
            <div>
                <Button
                    active={filter === "all"}
                    title={"All"}
                    onClickHandler={setFilterValue('all')}
                />
                <Button
                    active={filter === "active"}
                    title={"Active"}
                    onClickHandler={setFilterValue('active')}
                />
                <Button
                    active={filter === "completed"}
                    title={"Completed"}
                    onClickHandler={setFilterValue('completed')}
                />
            </div>
        </div>
    )
}

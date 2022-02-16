import React, {FC} from 'react';

import {FilterValuesType} from "./App";
import {Button, ButtonGroup} from "@material-ui/core";


type ButtonsBlockPropsType = {
    filter: FilterValuesType
    setFilterValue: (filter: FilterValuesType) => () => void
}

export const ButtonsBlock: FC<ButtonsBlockPropsType> = ({
                                                            filter,
                                                            setFilterValue
                                                        }) => {
    return (
        <ButtonGroup
            size={'small'}
            variant={'contained'}
            fullWidth
        >
            <Button
                color={filter==='all' ? 'secondary':'primary'}
                onClick={setFilterValue('all')}>All</Button>
            <Button
                color={filter==='active' ? 'secondary':'primary'}
                onClick={setFilterValue('active')}>Active</Button>
            <Button
                color={filter==='completed' ? 'secondary':'primary'}
                onClick={setFilterValue('completed')}>Completed</Button>
        </ButtonGroup>
    )
}
{/*<Button
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
                />*/}
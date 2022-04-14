import {AppActionsType, setAppErrorAC, setAppStatusAC} from '../app/app-reducer';
import {Dispatch} from 'redux';
import {ResponseType} from '../api/todolists-api';

export const handleServerNetworkError = (dispatch: Dispatch<AppActionsType>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('failed'))
}


export const handleServerAppError = <T>(data: ResponseType<T>,dispatch: Dispatch<AppActionsType>) => {
    dispatch(setAppErrorAC(data.messages.length ? data.messages[0] : 'Some error'))
    dispatch(setAppStatusAC('failed'))
}
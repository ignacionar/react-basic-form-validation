import React, { useReducer } from 'react';
import './input.css';
import { validate } from '../../utils/validators';

const CHANGE = "CHANGE";
const TOUCHE = "TOUCHE";

const inputReducer = (state, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        
        case TOUCHE:
            return {
                ...state,
                isTouche: true,
            }

        default:
            return state;
    };
};

const Input = (props) => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || "",
        isTouche: false,
        isValid: props.initialValid || false,
    }); 

    const changeHandler = (event) => {
        dispatch({
            type: CHANGE,
            val: event.target.value,
            validators: props.validators,
        });
    };

    const toucheHandler = (event) => {
        dispatch({
            type: TOUCHE,
        })
    }

    const element = props.element === "input" 
    ? <input type={props.type} id={props.id} onChange={changeHandler} onBlur={toucheHandler}/> 
    : <textarea />;

    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouche && 'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouche && <p>{props.errorText}</p>}
        </div>
    );
};

export default Input;

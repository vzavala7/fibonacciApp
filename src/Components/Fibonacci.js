import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    containerClass: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingClass: {
        fontSize: '2rem',
        margin: '4rem 0 0',
    },
    seriesContainerClass: {
        display: 'flex',
        width: '50%',
        flexWrap: 'wrap',
        fontSize: '1.5rem',
        justifyContent: 'space-between',
        marginTop: '-5px',
        marginBottom: '1rem',
    },
    spanClass: {
        margin: '0 .6rem',
    },
    inputContainerClass: {
        width: '50%',
        backgroundColor: '#005ea6',
        color: 'white',
        textAlign: 'center',
        fontSize: '1.7rem',
        padding: '.5rem 0rem 1rem',
        borderRadius: '5px',
    },
    inputClass: {
        marginTop:'-14px',
    },
    responseContainerClass: {
        marginTop: '2rem',
        backgroundColor: '#d1ecf1',
        color: '#0c5460',
        border: '#bee5eb',
        width: '45%',
        textAlign: 'center',
        padding: '1.5rem',
        fontSize: '1.7rem',
        borderRadius: '5px',
    },
};

function Fibonacci(props) {
    const { limit, classes, successMessage, failureMessage, inputLabel, heading } = props;
    const [number, setNumber] = useState(0);
    const [message, setMessage] = useState('');
    const arr = [0, 1];
    const generateSerie = () => {
        for (let i = 2; i < limit; i++) {
            arr.push(arr[i-1] + arr[i-2]);
        }
    };
    generateSerie();
    const series = arr.map(el => {
                        return <span className={classes.spanClass}>{el}</span>
                    });
    const onChangeHandler = (event) => {
        setNumber(event.target.value);
    }
    const checkNumber = () => {
        arr.some(el => el === parseInt(number)) ?
        setMessage(successMessage) : setMessage(failureMessage);
    }
    return (
        <div className={classes.containerClass}>
            <h1 className={classes.headingClass}>{heading}</h1>
            <div className={classes.seriesContainerClass}>{series}</div>
            <div className={classes.inputContainerClass}>
                <label>
                    {inputLabel}
                    <div className={classes.inputClass}>
                        <input
                            type="number"
                            name={inputLabel}
                            value={number}
                            onChange={onChangeHandler}
                        />
                        <button onClick={checkNumber}>&rarr;</button>
                    </div>
                </label>
            </div>
            { message.length > 0 &&
                <div className={classes.responseContainerClass}>{message}</div>
            }
        </div>
    )
}

export default withStyles(styles)(Fibonacci);

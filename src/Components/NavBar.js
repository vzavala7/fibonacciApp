import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    buttonClass: {
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
    },
    navBarClass: {
        backgroundColor: '#005ea6',
        padding: '.2rem',
    }
}

function NavBar(props) {
    const { handleClick, homeLabel, excerciseLabel, classes } = props;
    return (
        <nav className={classes.navBarClass}>
            <button className={classes.buttonClass} onClick={() => handleClick(homeLabel)}>{homeLabel}</button>
            <button className={classes.buttonClass} onClick={() => handleClick(excerciseLabel)}>{excerciseLabel}</button>
        </nav>
    )
}

export default withStyles(styles)(NavBar);

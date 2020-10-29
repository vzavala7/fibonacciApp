import { useState } from 'react';
import NavBar from './NavBar';
import Fibonacci from './Fibonacci';
import { withStyles } from '@material-ui/styles';

const styles = {
    containerClass: {
        paddingTop: '8rem',
        color: 'black',
        display: 'flex',
        fontSize: '5rem',
        fontWeight: '500',
        height: '90vh',
        justifyContent: 'center',
    },
};

function MainContainer(props) {
    const { navBarHomeLabel, welcomeMessage, navBarExcerciseLabel, fibonacciContainer, classes } = props;

    const [section, setSection] = useState(navBarHomeLabel);

    const onClick = (section) => {
        setSection(section)
    };

    const welcome = (
        <div className={classes.containerClass}>{welcomeMessage}</div>
    );

    return (
        <>
        <NavBar handleClick={onClick} homeLabel={navBarHomeLabel} excerciseLabel={navBarExcerciseLabel} />
        {
            section === navBarHomeLabel ? welcome : (
            <Fibonacci
                {...fibonacciContainer}
            />
            )
        }
        </>
    );
}

export default withStyles(styles)(MainContainer);

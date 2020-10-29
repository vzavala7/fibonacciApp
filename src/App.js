import MainContainer from './Components/MainContainer';
import './App.css';

// Initial props simulate fetching content from a content manager
const initialProps = {
  navBarHomeLabel: 'Home',
  navBarExcerciseLabel: 'Excercise',
  welcomeMessage: 'Welcome!',
  fibonacciContainer: {
    heading: 'Fibonacci List',
    limit: 20,
    inputLabel: 'Verify number belongs to the series',
    successMessage: 'Belongs to series',
    failureMessage: 'Does not belong to series',
  },
};

function App() {
  return (
    <MainContainer {...initialProps} />
  );
}

export default App;

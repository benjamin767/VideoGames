import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Route 
        path='/home'
        component={Home}
      />
    </>
  );
}

export default App;

import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import VideoDetailsContainer from './components/VideoDetailsContainer/VideoDetailsContainer';

function App() {
  return (
    <>
      <Route 
        exact
        path='/home'
        component={Home}
      />
      <Route 
        exact
        path='/home/:id'
        component={VideoDetailsContainer}
      />
    </>
  );
}

export default App;

import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import VideoDetailsContainer from './components/VideoDetailsContainer/VideoDetailsContainer';
import NavBar from './components/NavBar/NavBar';
import CreateVideogame from './components/CreateVideogame/CreateVideogame';

function App() {
  return (
    <>
      <Route 
        exact
        path='/home'
        component={NavBar}
      />
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
      <Route 
        exact
        path='/create'
        component={CreateVideogame}
      />
    </>
  );
}

export default App;

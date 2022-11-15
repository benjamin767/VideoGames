import Card from '../Card/Card';
import { getAllVideogames } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Spinner from '../Spinner/Spinner';

function Cards() {
  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllVideogames());
  }, [dispatch]);
  const isLoading = useSelector(state => state.isLoading);
  const videogames = useSelector(state => state.videogames);

  return (
    <div >

      {isLoading ? <Spinner/> : videogames.map((videogame) => <Card key={videogame.id} pokemon={videogame}/>)}

    </div>
  );
}

export default Cards;
import Card from '../Card/Card';
import { getAllVideogames } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Spinner from '../Spinner/Spinner';
import Paginated from '../Paginated/Paginated';

function Cards() {
    let dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllVideogames());
    }, [dispatch]);
    const isLoading = useSelector(state => state.isLoading);
    const videogames = useSelector(state => state.videogames);
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPage, setVideogamesPage] = useState(15);
    const indexOfLastVideogame = currentPage * videogamesPage;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPage;
    const currentVideogames = videogames.slice(indexOfFirstVideogame,indexOfLastVideogame);
    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
     <div >
        {isLoading ? <Spinner/> : currentVideogames.map((videogame) => <Card key={videogame.id} videogame={videogame}/>)}

        <Paginated 
            videogamesPage={videogamesPage}
            videogames={videogames.length}
            paginated={paginated}
        />
     </div>
    );
}

export default Cards;
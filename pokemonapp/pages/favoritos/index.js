import React, {useState} from 'react'

import Layout from '../../components/layout/Layout';

const FavoritesPage = () => {
    const[favoritePokemons, setFavoritePokemons] = usestate()
    return ( 
    <Layout title="Pokedex|favoritos">
         {
            favoritePokemons.length === 0 ? (
            <h2>No Hay Favoritos</h2>
            ) : (
            <h2>La Lista de Favoritos</h2>
            )
         }
    </Layout> );
}
 
export default Favoritos;
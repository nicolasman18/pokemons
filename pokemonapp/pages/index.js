  import { Card, Grid } from "@nextui-org/react";
  import Image from "next/image";
  import pokeApi from "../apis/pokeApi";
  import Layout from "../components/layout/Layout";
  import PokemonCard from "../components/pokemon/PokemonCard";
  import { useEffect, useState } from "react";


  export default function Home() {
    const [pokemons, setPokemons] = useState([])
    const getData = async () => {
      const {data} = await pokeApi.get('/pokemon?limit=151');
      
      setPokemons (data.results.map((pokemon, index) => ({
        id:index + 1,
        ...pokemon,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
      })))
      
    }
    
    useEffect(() => {
      getData();
    }, [])

    console.log(pokemons);
    
    return (
      <Layout title={"listado de pokemons"}>
        <Grid.Container gap={2} justify="flex-start">
          <Grid xs={12} sm={3} cdd={{alingItems: "stretch"}}>
          
   
            <Card>
         
              <Card.Header >
                <text>Búsqueda</text>
              </Card.Header>
              <Card.Body>
                <h3>Filtros</h3>
              </Card.Body>
     
            </Card>
          </Grid>
          <Grid xs={12} sm={9} md={10} className="content-results">
              <Grid.Container grap={2} justify="flex-start">
            {pokemons.map((pokemon)=>(
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))} 
              </Grid.Container>
          </Grid>
        </Grid.Container>
      </Layout>
    );
  }

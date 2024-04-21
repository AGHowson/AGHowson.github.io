import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetail({ id }) {
    const param = useParams();
    const [pokedex, setPokedex] = useState({});
    
    useEffect(() => {
        const getDetails = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + param.name);
            const data = await res.json();
            setPokedex(data);
            getEvolution(data.id);
        }

        const getEvolution = async (id) => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + id);
            const data = await res.json();
            fetch(data.evolution_chain.url)
            .then(response => response.json())
            .then(newData => console.log(newData))
        }
        getDetails();
    }, [])

    console.log("detailspage")
    return (
        <div>
            <h1 className="text-lg">{pokedex.name}</h1>
            <img src={pokedex.sprites?.front_default} alt={pokedex.name} />
            <p>Type: {pokedex.types && pokedex.types.map((type, index) => (
                <span key={index}>{type.type.name} </span>
            ))}</p>
            <p>Height: {pokedex.height}</p>
            <p>Weight: {pokedex.weight}</p>
            <p>Stats:</p>
            <ul>
                {pokedex.stats && pokedex.stats.map((stat, index) => (
                    <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonDetail;

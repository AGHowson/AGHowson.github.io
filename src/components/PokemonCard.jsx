function PokemonCard({ pokemon }) {
  function getColor(type) {
  }

  return (
    <span style={{ background: `${getColor(pokemon.types[0].type.name)}, ${getColor(pokemon.types[pokemon.types.length - 1].type.name)})` }}>
      <div>
      <p>
        <span>#{String(pokemon.id).padStart(3, '0')} </span>
        {pokemon.name}
      </p>
      </div>
    </span>
  );
}

export default PokemonCard;
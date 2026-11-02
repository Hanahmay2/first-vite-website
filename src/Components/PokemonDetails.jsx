function PokemonDetails({ pokemon }) {
  if (!pokemon) {
    return (
      <div className="pokemon-details">
        <p>Select a Pokémon to see its details.</p>
      </div>
    );
  }

  return (
    <div className="pokemon-details">
      <p className="details-label">SELECTED POKÉMON</p>

      <img
        className="details-image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
      />

      <h2>{pokemon.name}</h2>

      <p className="pokemon-id">#{String(pokemon.id).padStart(3, "0")}</p>

      <span className={`type-badge type-${pokemon.type.toLowerCase()}`}>
        {pokemon.type}
      </span>

      <div className="stats">
        <h3>Base Stats</h3>

        <div className="stat-row">
          <span>HP</span>
          <strong>{pokemon.hp}</strong>
        </div>

        <div className="stat-row">
          <span>Attack</span>
          <strong>{pokemon.attack}</strong>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;

function PokemonCard({ pokemon, onClick, isSelected }) {
  return (
    <button
      className={`pokemon-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
      />

      <h3>{pokemon.name}</h3>

      <span className={`type-badge type-${pokemon.type.toLowerCase()}`}>
        {pokemon.type}
      </span>

      <div className="card-stats">
        <span>HP: {pokemon.hp}</span>
        <span>ATK: {pokemon.attack}</span>
      </div>
    </button>
  );
}

export default PokemonCard;

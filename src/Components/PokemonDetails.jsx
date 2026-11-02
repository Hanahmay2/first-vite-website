function PokemonDetails({ pokemon }) {
  if (!pokemon) {
    return (
      <div className="pokemon-details">
        <p>Select a Pokémon to see its details.</p>
      </div>
    );
  }

  const types = pokemon.type.split("/");

  const typeColours = {
    Normal: "#929292",
    Fire: "#e87950",
    Water: "#5795d1",
    Electric: "#d5ad35",
    Grass: "#65a879",
    Ice: "#75cbd0",
    Fighting: "#bd625b",
    Poison: "#a16ac4",
    Ground: "#c49b55",
    Flying: "#8b9bd3",
    Psychic: "#c16ab5",
    Bug: "#91a83b",
    Rock: "#9b8955",
    Ghost: "#7561a6",
    Dragon: "#6273bc",
    Dark: "#625b58",
    Steel: "#8295a5",
    Fairy: "#e69ab5",
  };

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

      <div className="details-types">
        {types.map((type) => (
          <span
            key={type}
            className="type-badge"
            style={{ backgroundColor: typeColours[type] }}
          >
            {type}
          </span>
        ))}
      </div>

      <div className="stats">
        <h3>Base Stats</h3>

        <div className="stat-row">
          <span>HP</span>
          <strong>{pokemon.hp}</strong>
        </div>

        <div className="stat-bar">
          <div
            className="stat-fill"
            style={{
              width: `${(pokemon.hp / 255) * 100}%`,
              backgroundColor: "#65a879",
            }}
          />
        </div>

        <div className="stat-row">
          <span>Attack</span>
          <strong>{pokemon.attack}</strong>
        </div>

        <div className="stat-bar">
          <div
            className="stat-fill"
            style={{
              width: `${(pokemon.attack / 255) * 100}%`,
              backgroundColor: "#e87950",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;

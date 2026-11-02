function PokemonCard({
  pokemon,
  onClick,
  isSelected,
  isFavourite,
  onToggleFavourite,
}) {
  // Get the colour associated with the Pokémon's primary type
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

  // Use the first type if the Pokémon has two
  const primaryType = pokemon.type.split("/")[0];
  const colour = typeColours[primaryType];

  return (
    <div className="pokemon-card-wrapper">
      {/* Favourite heart */}
      <button
        type="button"
        className={`favourite-heart ${isFavourite ? "active" : ""}`}
        onClick={(event) => {
          event.stopPropagation();
          onToggleFavourite(pokemon.id);
        }}
        aria-label={
          isFavourite ? "Remove from favourites" : "Add to favourites"
        }
      >
        {isFavourite ? "♥" : "♡"}
      </button>

      {/* Pokémon card */}
      <button
        className={`pokemon-card ${isSelected ? "selected" : ""}`}
        onClick={onClick}
        style={{
          borderColor: isSelected ? colour : "#e5e7eb",
          borderWidth: isSelected ? "2px" : "1px",
        }}
      >
        <span className="pokemon-id">
          #{String(pokemon.id).padStart(3, "0")}
        </span>

        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />

        <h3>{pokemon.name}</h3>

        <span
          className="type-badge"
          style={{
            backgroundColor: `${colour}25`,
            color: colour,
          }}
        >
          {pokemon.type}
        </span>

        <div className="card-stats">
          <div className="stat-row">
            <span>HP</span>
            <strong>{pokemon.hp}</strong>
          </div>

          <div className="stat-bar">
            <div
              className="stat-fill"
              style={{
                width: `${(pokemon.hp / 255) * 100}%`,
                backgroundColor: colour,
              }}
            />
          </div>

          <div className="stat-row">
            <span>ATK</span>
            <strong>{pokemon.attack}</strong>
          </div>

          <div className="stat-bar">
            <div
              className="stat-fill"
              style={{
                width: `${(pokemon.attack / 255) * 100}%`,
                backgroundColor: colour,
              }}
            />
          </div>
        </div>
      </button>
    </div>
  );
}

export default PokemonCard;

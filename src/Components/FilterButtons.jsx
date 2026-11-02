function FilterButtons({
  selectedType,
  onTypeChange,
  showFavouritesOnly,
  onFavouritesChange,
}) {
  const types = [
    "All",
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];

  const colours = {
    All: "#6366f1",
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
    <div className="filter-buttons">
      {/* Favourites button */}
      <button
        onClick={() => onFavouritesChange(!showFavouritesOnly)}
        style={{
          backgroundColor: showFavouritesOnly ? "#ec4899" : "#fce7f3",
          color: showFavouritesOnly ? "white" : "#ec4899",
          border: "1px solid #ec4899",
          borderRadius: "25px",
          padding: "9px 17px",
          fontSize: "13px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        ♥ Favourites
      </button>

      {types.map((type) => {
        const isActive = selectedType === type;
        const colour = colours[type];

        return (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            style={{
              backgroundColor: isActive ? colour : `${colour}20`,
              color: isActive ? "white" : colour,
              border: `1px solid ${colour}`,
              borderRadius: "25px",
              padding: "9px 17px",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
}

export default FilterButtons;

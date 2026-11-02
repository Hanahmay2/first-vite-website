function FilterButtons({ selectedType, onTypeChange }) {
  const types = [
    "All",
    "Grass",
    "Fire",
    "Water",
    "Electric",
    "Psychic",
    "Normal",
    "Ghost",
    "Dragon",
    "Fighting",
    "Rock",
  ];

  const colours = {
    All: "#6366f1",
    Grass: "#65a879",
    Fire: "#e87950",
    Water: "#5795d1",
    Electric: "#d5ad35",
    Psychic: "#a16ac4",
    Normal: "#929292",
    Ghost: "#7561a6",
    Dragon: "#6273bc",
    Fighting: "#bd625b",
    Rock: "#9b8955",
  };

  return (
    <div className="filter-buttons">
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

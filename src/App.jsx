import { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./Components/PokemonCard";
import PokemonDetails from "./Components/PokemonDetails";
import FilterButtons from "./Components/FilterButtons";

const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];

function App() {
  // Remember the currently selected Pokémon
  const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0]);

  // Remember the currently selected type filter
  const [selectedType, setSelectedType] = useState("All");

  // Filter the Pokémon based on their type
  const filteredPokemon =
    selectedType === "All"
      ? pokemons
      : pokemons.filter((pokemon) => pokemon.type === selectedType);

  // Update the details panel if the selected Pokémon
  // is no longer visible after filtering
  useEffect(() => {
    if (
      filteredPokemon.length > 0 &&
      !filteredPokemon.some((pokemon) => pokemon.id === selectedPokemon.id)
    ) {
      setSelectedPokemon(filteredPokemon[0]);
    }
  }, [selectedType]);

  return (
    <div className="app">
      {/* Page heading */}
      <header className="app-header">
        <div>
          <h1>Pokémon Explorer</h1>
          <p>Discover and explore your favourite Pokémon.</p>
        </div>

        <div className="pokemon-count">{filteredPokemon.length} Pokémon</div>
      </header>

      {/* Main dashboard layout */}
      <main className="dashboard-layout">
        {/* Left: Pokémon collection */}
        <section className="collection-section">
          <h2>Pokémon Collection</h2>

          {/* Type filter buttons */}
          <FilterButtons
            selectedType={selectedType}
            onTypeChange={setSelectedType}
          />

          {/* Pokémon cards */}
          <div className="pokemon-grid">
            {filteredPokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onClick={() => setSelectedPokemon(pokemon)}
                isSelected={selectedPokemon.id === pokemon.id}
              />
            ))}
          </div>
        </section>

        {/* Right: Selected Pokémon details */}
        <aside className="details-section">
          <PokemonDetails pokemon={selectedPokemon} />
        </aside>
      </main>
    </div>
  );
}

export default App;

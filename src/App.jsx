import { useState, useEffect } from "react";
import "./App.css";
import PokemonCard from "./Components/PokemonCard";
import PokemonDetails from "./Components/PokemonDetails";
import FilterButtons from "./Components/FilterButtons";

const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass/Poison", hp: 45, attack: 49 },
  { id: 2, name: "Ivysaur", type: "Grass/Poison", hp: 60, attack: 62 },
  { id: 3, name: "Venusaur", type: "Grass/Poison", hp: 80, attack: 82 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 5, name: "Charmeleon", type: "Fire", hp: 58, attack: 64 },
  { id: 6, name: "Charizard", type: "Fire/Flying", hp: 78, attack: 84 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 8, name: "Wartortle", type: "Water", hp: 59, attack: 63 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 10, name: "Caterpie", type: "Bug", hp: 45, attack: 30 },
  { id: 11, name: "Metapod", type: "Bug", hp: 50, attack: 20 },
  { id: 12, name: "Butterfree", type: "Bug/Flying", hp: 60, attack: 45 },
  { id: 13, name: "Weedle", type: "Bug/Poison", hp: 40, attack: 35 },
  { id: 14, name: "Kakuna", type: "Bug/Poison", hp: 45, attack: 25 },
  { id: 15, name: "Beedrill", type: "Bug/Poison", hp: 65, attack: 90 },
  { id: 16, name: "Pidgey", type: "Normal/Flying", hp: 40, attack: 45 },
  { id: 17, name: "Pidgeotto", type: "Normal/Flying", hp: 63, attack: 60 },
  { id: 18, name: "Pidgeot", type: "Normal/Flying", hp: 83, attack: 80 },
  { id: 19, name: "Rattata", type: "Normal", hp: 30, attack: 56 },
  { id: 20, name: "Raticate", type: "Normal", hp: 55, attack: 81 },
  { id: 21, name: "Spearow", type: "Normal/Flying", hp: 40, attack: 60 },
  { id: 22, name: "Fearow", type: "Normal/Flying", hp: 65, attack: 90 },
  { id: 23, name: "Ekans", type: "Poison", hp: 35, attack: 60 },
  { id: 24, name: "Arbok", type: "Poison", hp: 60, attack: 95 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 26, name: "Raichu", type: "Electric", hp: 60, attack: 90 },
  { id: 27, name: "Sandshrew", type: "Ground", hp: 50, attack: 75 },
  { id: 28, name: "Sandslash", type: "Ground", hp: 75, attack: 100 },
  { id: 29, name: "Nidoran♀", type: "Poison", hp: 55, attack: 47 },
  { id: 30, name: "Nidorina", type: "Poison", hp: 70, attack: 62 },
  { id: 31, name: "Nidoqueen", type: "Poison/Ground", hp: 90, attack: 92 },
  { id: 32, name: "Nidoran♂", type: "Poison", hp: 46, attack: 57 },
  { id: 33, name: "Nidorino", type: "Poison", hp: 61, attack: 72 },
  { id: 34, name: "Nidoking", type: "Poison/Ground", hp: 81, attack: 102 },
  { id: 35, name: "Clefairy", type: "Fairy", hp: 70, attack: 45 },
  { id: 36, name: "Clefable", type: "Fairy", hp: 95, attack: 70 },
  { id: 37, name: "Vulpix", type: "Fire", hp: 38, attack: 41 },
  { id: 38, name: "Ninetales", type: "Fire", hp: 73, attack: 76 },
  { id: 39, name: "Jigglypuff", type: "Normal/Fairy", hp: 115, attack: 45 },
  { id: 40, name: "Wigglytuff", type: "Normal/Fairy", hp: 140, attack: 70 },
  { id: 41, name: "Zubat", type: "Poison/Flying", hp: 40, attack: 45 },
  { id: 42, name: "Golbat", type: "Poison/Flying", hp: 75, attack: 80 },
  { id: 43, name: "Oddish", type: "Grass/Poison", hp: 45, attack: 50 },
  { id: 44, name: "Gloom", type: "Grass/Poison", hp: 60, attack: 65 },
  { id: 45, name: "Vileplume", type: "Grass/Poison", hp: 75, attack: 80 },
  { id: 46, name: "Paras", type: "Bug/Grass", hp: 35, attack: 70 },
  { id: 47, name: "Parasect", type: "Bug/Grass", hp: 60, attack: 95 },
  { id: 48, name: "Venonat", type: "Bug/Poison", hp: 60, attack: 55 },
  { id: 49, name: "Venomoth", type: "Bug/Poison", hp: 70, attack: 65 },
  { id: 50, name: "Diglett", type: "Ground", hp: 10, attack: 55 },
  { id: 51, name: "Dugtrio", type: "Ground", hp: 35, attack: 100 },
  { id: 52, name: "Meowth", type: "Normal", hp: 40, attack: 45 },
  { id: 53, name: "Persian", type: "Normal", hp: 65, attack: 70 },
  { id: 54, name: "Psyduck", type: "Water", hp: 50, attack: 52 },
  { id: 55, name: "Golduck", type: "Water", hp: 80, attack: 82 },
  { id: 56, name: "Mankey", type: "Fighting", hp: 40, attack: 80 },
  { id: 57, name: "Primeape", type: "Fighting", hp: 65, attack: 105 },
  { id: 58, name: "Growlithe", type: "Fire", hp: 55, attack: 70 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 60, name: "Poliwag", type: "Water", hp: 40, attack: 50 },
  { id: 61, name: "Poliwhirl", type: "Water", hp: 65, attack: 65 },
  { id: 62, name: "Poliwrath", type: "Water/Fighting", hp: 90, attack: 95 },
  { id: 63, name: "Abra", type: "Psychic", hp: 25, attack: 20 },
  { id: 64, name: "Kadabra", type: "Psychic", hp: 40, attack: 35 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 66, name: "Machop", type: "Fighting", hp: 70, attack: 80 },
  { id: 67, name: "Machoke", type: "Fighting", hp: 80, attack: 100 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 69, name: "Bellsprout", type: "Grass/Poison", hp: 50, attack: 75 },
  { id: 70, name: "Weepinbell", type: "Grass/Poison", hp: 65, attack: 90 },
  { id: 71, name: "Victreebel", type: "Grass/Poison", hp: 80, attack: 105 },
  { id: 72, name: "Tentacool", type: "Water/Poison", hp: 40, attack: 40 },
  { id: 73, name: "Tentacruel", type: "Water/Poison", hp: 80, attack: 70 },
  { id: 74, name: "Geodude", type: "Rock/Ground", hp: 40, attack: 80 },
  { id: 75, name: "Graveler", type: "Rock/Ground", hp: 55, attack: 95 },
  { id: 76, name: "Golem", type: "Rock/Ground", hp: 80, attack: 120 },
  { id: 77, name: "Ponyta", type: "Fire", hp: 50, attack: 85 },
  { id: 78, name: "Rapidash", type: "Fire", hp: 65, attack: 100 },
  { id: 79, name: "Slowpoke", type: "Water/Psychic", hp: 90, attack: 65 },
  { id: 80, name: "Slowbro", type: "Water/Psychic", hp: 95, attack: 75 },
  { id: 81, name: "Magnemite", type: "Electric/Steel", hp: 25, attack: 35 },
  { id: 82, name: "Magneton", type: "Electric/Steel", hp: 50, attack: 60 },
  { id: 83, name: "Farfetch'd", type: "Normal/Flying", hp: 52, attack: 90 },
  { id: 84, name: "Doduo", type: "Normal/Flying", hp: 35, attack: 85 },
  { id: 85, name: "Dodrio", type: "Normal/Flying", hp: 60, attack: 110 },
  { id: 86, name: "Seel", type: "Water", hp: 65, attack: 45 },
  { id: 87, name: "Dewgong", type: "Water/Ice", hp: 90, attack: 70 },
  { id: 88, name: "Grimer", type: "Poison", hp: 80, attack: 80 },
  { id: 89, name: "Muk", type: "Poison", hp: 105, attack: 105 },
  { id: 90, name: "Shellder", type: "Water", hp: 30, attack: 65 },
  { id: 91, name: "Cloyster", type: "Water/Ice", hp: 50, attack: 95 },
  { id: 92, name: "Gastly", type: "Ghost/Poison", hp: 30, attack: 35 },
  { id: 93, name: "Haunter", type: "Ghost/Poison", hp: 45, attack: 50 },
  { id: 94, name: "Gengar", type: "Ghost/Poison", hp: 60, attack: 65 },
  { id: 95, name: "Onix", type: "Rock/Ground", hp: 35, attack: 45 },
  { id: 96, name: "Drowzee", type: "Psychic", hp: 60, attack: 48 },
  { id: 97, name: "Hypno", type: "Psychic", hp: 85, attack: 73 },
  { id: 98, name: "Krabby", type: "Water", hp: 30, attack: 105 },
  { id: 99, name: "Kingler", type: "Water", hp: 55, attack: 130 },
  { id: 100, name: "Voltorb", type: "Electric", hp: 40, attack: 30 },
  { id: 101, name: "Electrode", type: "Electric", hp: 60, attack: 50 },
  { id: 102, name: "Exeggcute", type: "Grass/Psychic", hp: 60, attack: 40 },
  { id: 103, name: "Exeggutor", type: "Grass/Psychic", hp: 95, attack: 95 },
  { id: 104, name: "Cubone", type: "Ground", hp: 50, attack: 50 },
  { id: 105, name: "Marowak", type: "Ground", hp: 60, attack: 80 },
  { id: 106, name: "Hitmonlee", type: "Fighting", hp: 50, attack: 120 },
  { id: 107, name: "Hitmonchan", type: "Fighting", hp: 50, attack: 105 },
  { id: 108, name: "Lickitung", type: "Normal", hp: 90, attack: 55 },
  { id: 109, name: "Koffing", type: "Poison", hp: 40, attack: 65 },
  { id: 110, name: "Weezing", type: "Poison", hp: 65, attack: 90 },
  { id: 111, name: "Rhyhorn", type: "Ground/Rock", hp: 80, attack: 85 },
  { id: 112, name: "Rhydon", type: "Ground/Rock", hp: 105, attack: 130 },
  { id: 113, name: "Chansey", type: "Normal", hp: 250, attack: 5 },
  { id: 114, name: "Tangela", type: "Grass", hp: 65, attack: 55 },
  { id: 115, name: "Kangaskhan", type: "Normal", hp: 105, attack: 95 },
  { id: 116, name: "Horsea", type: "Water", hp: 30, attack: 40 },
  { id: 117, name: "Seadra", type: "Water", hp: 55, attack: 65 },
  { id: 118, name: "Goldeen", type: "Water", hp: 45, attack: 67 },
  { id: 119, name: "Seaking", type: "Water", hp: 80, attack: 92 },
  { id: 120, name: "Staryu", type: "Water", hp: 30, attack: 45 },
  { id: 121, name: "Starmie", type: "Water/Psychic", hp: 60, attack: 75 },
  { id: 122, name: "Mr. Mime", type: "Psychic/Fairy", hp: 40, attack: 45 },
  { id: 123, name: "Scyther", type: "Bug/Flying", hp: 70, attack: 110 },
  { id: 124, name: "Jynx", type: "Ice/Psychic", hp: 65, attack: 50 },
  { id: 125, name: "Electabuzz", type: "Electric", hp: 65, attack: 83 },
  { id: 126, name: "Magmar", type: "Fire", hp: 65, attack: 95 },
  { id: 127, name: "Pinsir", type: "Bug", hp: 65, attack: 125 },
  { id: 128, name: "Tauros", type: "Normal", hp: 75, attack: 100 },
  { id: 129, name: "Magikarp", type: "Water", hp: 20, attack: 10 },
  { id: 130, name: "Gyarados", type: "Water/Flying", hp: 95, attack: 125 },
  { id: 131, name: "Lapras", type: "Water/Ice", hp: 130, attack: 85 },
  { id: 132, name: "Ditto", type: "Normal", hp: 48, attack: 48 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 134, name: "Vaporeon", type: "Water", hp: 130, attack: 65 },
  { id: 135, name: "Jolteon", type: "Electric", hp: 65, attack: 65 },
  { id: 136, name: "Flareon", type: "Fire", hp: 65, attack: 130 },
  { id: 137, name: "Porygon", type: "Normal", hp: 65, attack: 60 },
  { id: 138, name: "Omanyte", type: "Rock/Water", hp: 35, attack: 40 },
  { id: 139, name: "Omastar", type: "Rock/Water", hp: 70, attack: 60 },
  { id: 140, name: "Kabuto", type: "Rock/Water", hp: 30, attack: 80 },
  { id: 141, name: "Kabutops", type: "Rock/Water", hp: 60, attack: 115 },
  { id: 142, name: "Aerodactyl", type: "Rock/Flying", hp: 80, attack: 105 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 144, name: "Articuno", type: "Ice/Flying", hp: 90, attack: 85 },
  { id: 145, name: "Zapdos", type: "Electric/Flying", hp: 90, attack: 90 },
  { id: 146, name: "Moltres", type: "Fire/Flying", hp: 90, attack: 100 },
  { id: 147, name: "Dratini", type: "Dragon", hp: 41, attack: 64 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
  { id: 149, name: "Dragonite", type: "Dragon/Flying", hp: 91, attack: 134 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 151, name: "Mew", type: "Psychic", hp: 100, attack: 100 },
];

function App() {
  // Remember the currently selected Pokémon
  const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0]);

  // Remember the currently selected type filter
  const [selectedType, setSelectedType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const [favourites, setFavourites] = useState([]);
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);

  // Add or remove a Pokémon from favourites
  const toggleFavourite = (pokemonId) => {
    setFavourites((currentFavourites) =>
      currentFavourites.includes(pokemonId)
        ? currentFavourites.filter((id) => id !== pokemonId)
        : [...currentFavourites, pokemonId],
    );
  };

  // Filter the Pokémon based on their type

  const filteredPokemon = pokemons.filter((pokemon) => {
    const matchesType =
      selectedType === "All" || pokemon.type.split("/").includes(selectedType);

    const matchesSearch = pokemon.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFavourite =
      !showFavouritesOnly || favourites.includes(pokemon.id);

    return matchesType && matchesSearch && matchesFavourite;
  });

  // Update the details panel if the selected Pokémon
  // is no longer visible after filtering
  useEffect(() => {
    if (
      filteredPokemon.length > 0 &&
      !filteredPokemon.some((pokemon) => pokemon.id === selectedPokemon.id)
    ) {
      setSelectedPokemon(filteredPokemon[0]);
    }
  }, [
    selectedType,
    searchTerm,
    selectedPokemon,
    showFavouritesOnly,
    favourites,
  ]);

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

          {/* Search bar */}
          <input
            className="pokemon-search"
            type="text"
            placeholder="Search Pokémon..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          {/* Type filter buttons */}
          <FilterButtons
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            showFavouritesOnly={showFavouritesOnly}
            onFavouritesChange={setShowFavouritesOnly}
          />

          {/* Pokémon cards */}
          <div className="pokemon-grid">
            {filteredPokemon.length > 0 ? (
              filteredPokemon.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  onClick={() => setSelectedPokemon(pokemon)}
                  isSelected={selectedPokemon.id === pokemon.id}
                  isFavourite={favourites.includes(pokemon.id)}
                  onToggleFavourite={toggleFavourite}
                />
              ))
            ) : (
              <p className="no-results">
                No Pokémon found. Try another search!
              </p>
            )}
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

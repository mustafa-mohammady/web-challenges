import React, { useState } from "react";
import FilterButton from "./FilterButton";
import "./styles.css";
import AnimalList from "./AnimalList";
import { animals } from "./data";

const habitats = ["Mountains", "Ocean", "Forest", "Domestic Animal"];

export default function App() {
  const [selectedHabit, setSelectedHabit] = useState("");

  function handleFilter({ habit }) {
    setSelectedHabit(habit);
  }

  const filteredAnimal = animals.filter(
    (animal) => animal.habitat == selectedHabit,
  );

  const filter = filteredAnimal.length > 0 ? filteredAnimal : animals;

  return (
    <>
      {habitats.map((habit) => {
        return (
          <FilterButton
            key={habit}
            habit={habit}
            selectedHabit={selectedHabit}
            handleFilter={handleFilter}
          />
        );
      })}

      {/* Filterd Data  */}
      <ul>
        {filter.map((animal) => (
          <AnimalList key={animal.id} emoji={animal.emoji} name={animal.name} />
        ))}
      </ul>
    </>
  );
}

import React, {useState} from "react";

function SearchBar({handleSort}) {
  const [isAlpha, setIsAlpha] = useState(true)

  function handleChange(e){
    setIsAlpha(!isAlpha)
    handleSort(e.target.value)
  }

  return (
    <div className="search-bar">
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="alphabetically"
          name="sort"
          checked={isAlpha ? true : false}
          onChange={handleChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="price"
          name="sort"
          checked={isAlpha ? false : true}
          onChange={handleChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;

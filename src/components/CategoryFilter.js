import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
 
  function handleClick(e) {
    const selected = e.target.textContent;
    setSelectedCategory(selected);
  }    

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
        {categories.map(cat => (
        <button
          key={cat}
          className={cat === selectedCategory ? 'selected' : ''}
          onClick={handleClick}
        >
          {cat}
        </button>
      ))} 
    </div>
  );
}

export default CategoryFilter;

import React from "react";

function CategoryFilter({ categories, Selectedcategory, onCategoryClick }) {
  const categoryButtons = categories.map((category) => {
    const categoryClass = category === Selectedcategory ? "selected" : "";
    return (
      <button
        key={category}
        className={categoryClass}
        onClick={() => onCategoryClick(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

import CategoryItem from "../category-item/category-item.components";

import "./categoriesComponent.styles.scss";

const CategoriesComponent = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesComponent;

import DirectoryItem from "../directory-item/directory-item.components";
import "./directory.styles.scss";

const DirectoryComponent = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryComponent;

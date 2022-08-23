import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { CategoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(CategoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={CategoriesMap[title]}
        />
      ))}
    </Fragment>
  );
};

export default CategoriesPreview;

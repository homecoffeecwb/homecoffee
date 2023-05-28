import { AppBar, Tab, Tabs } from "@mui/material";
import React from "react";
import useLanguage from "../../../common/hooks/useLanguage";
import { useCategories } from "../../../common/hooks/useCategories";
import { useProducts } from "../../../common/hooks/useProducts";
import ProductItem from "../ProductItem";

interface CategoriesNavbarProps {
  // TODO: Component props
}

/**
 * Navbar shown bellow the Header with the available categories,
 * stored in the Dashboard
 */
const CategoriesNavbar: React.FunctionComponent<CategoriesNavbarProps> = () => {
  const { categories } = useCategories();
  const { products } = useProducts();
  const [category, setCategory] = React.useState<number>(1);
  const { getAria } = useLanguage();

  const handleChange = React.useCallback(
    (_e: React.SyntheticEvent, newValue: number) => {
      setCategory(newValue);
    },
    []
  );

  React.useEffect(() => {
    if (categories.length === 0) return;
    setCategory(categories[0]?.id);
  }, [categories]);

  return (
    <div>
      <AppBar
        position="static"
        variant="elevation"
        elevation={0}
        color="transparent"
      >
        {categories.length > 0 && (
          <Tabs
            value={category}
            onChange={handleChange}
            aria-label={getAria("categoriesNavbar")}
            indicatorColor="primary"
            variant="fullWidth"
            centered
          >
            {categories.map((c) => (
              <Tab value={c.id} key={c.id} label={c.name} />
            ))}
          </Tabs>
        )}
      </AppBar>
      <div className="list-container">
        {products
          .filter((product) => product.category == category)
          .map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoriesNavbar;

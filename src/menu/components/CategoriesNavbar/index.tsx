import { AppBar, Tab, Tabs } from "@mui/material";
import React from "react";
import useLanguage from "../../../common/hooks/useLanguage";
import { useCategories } from "../../../common/hooks/useCategories";
import { useProducts } from "../../../common/hooks/useProducts";

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
  const [category, setCategory] = React.useState<number>(categories[0].id);
  const { language, getAria } = useLanguage();

	const handleChange = React.useCallback((_e: React.SyntheticEvent, newValue: number) => {
		setCategory(newValue)
	}, [])

  React.useEffect(() => {
    console.log(products);
  }, []);

  return (
    <div>
      <AppBar
        position="static"
        variant="elevation"
        elevation={0}
        color="transparent"
      >
        <Tabs
          value={category}
          onChange={handleChange}
          aria-label={getAria("categoriesNavbar")}
					indicatorColor="primary"
					variant="fullWidth"
          centered
        >
          {categories.map((c) => (
            <Tab
              key={c.id}
              label={c.name[language.current]}
            />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
};

export default CategoriesNavbar;

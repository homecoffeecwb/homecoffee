import { AppBar, Tab, Tabs } from "@mui/material";
import React from "react";
import useLanguage from "../../../common/hooks/useLanguage";
import { useCategories } from "../../../common/hooks/useCategories";

interface CategoriesNavbarProps {
  // TODO: Component props
}

/**
 * Navbar shown bellow the Header with the available categories,
 * stored in the Dashboard
 */
const CategoriesNavbar: React.FunctionComponent<CategoriesNavbarProps> = () => {
  const { language, getAria } = useLanguage();
  const categories = useCategories();
  const [category, setCategory] = React.useState<number>(categories[0].id);

  const handleChange = React.useCallback(
    (_e: React.SyntheticEvent, newValue: number) => {
      setCategory(newValue);
    },
    []
  );

  return (
    <div>
      <AppBar position="static" variant="outlined" color="transparent">
        <Tabs
          value={category}
          onChange={handleChange}
          aria-label={getAria("categoriesNavbar")}
          indicatorColor="primary"
          variant="fullWidth"
          centered
        >
          {categories.map((c) => (
            <Tab key={c.id} label={c.name[language.current]} />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
};

export default CategoriesNavbar;

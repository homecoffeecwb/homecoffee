import React, { createContext, useState, useCallback } from "react";

import { PT, EN } from "../../assets/languages";

interface LanguageObject {
	[key: string]: string | { [key: string]: string };
  current: string;
  aria: { [key: string]: string };
}

interface LanguageContextValues {
	getText: (key: string) => string;
	getAria: (key: string) => string;
  language: LanguageObject;
  togglePT_EN: () => void;
}

const LanguageContext = createContext<LanguageContextValues | null>(null);
export default LanguageContext;

interface LanguageProviderProps {
  children: React.ReactNode;
}

/**
 * Language context for changing the language of the app
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<LanguageObject>(PT);

  const togglePT_EN = useCallback(() => {
    if (language === PT) setLanguage(EN);
    else setLanguage(PT);
  }, [language]);

	const getText = React.useCallback((key: string) => {
		if (!language[key]) {
			return "";
		}

		return String(language[key]);
	}, [language])

	const getAria = React.useCallback((key: string) => {
		if (!language.aria[key]) {
			return "";
		}

		return String(language.aria[key]);
	}, [language])

  return (
    <LanguageContext.Provider
      value={{
				getText,
				getAria,
        language,
        togglePT_EN,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

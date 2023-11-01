import React, { createContext, useState, useContext } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

interface ITheme {
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
            
        green: string;
        greentext: string;
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const themeSaved = localStorage.getItem('@websitenavagro:theme');

        if(themeSaved) {
            return JSON.parse(themeSaved);
        }else{
            return light;
        }
    });

    const toggleTheme = () => {
        if(theme.title === 'dark'){
            setTheme(dark);
            localStorage.setItem('@websitenavagro:theme', JSON.stringify(dark));
        }else{
            setTheme(light);
            localStorage.setItem('@websitenavagro:theme', JSON.stringify(light));
        }
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    return context;
}


export { ThemeProvider, useTheme };

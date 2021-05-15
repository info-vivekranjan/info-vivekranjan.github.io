import React, { createContext, useState } from 'react';


const ThemeContext = createContext();


const themeValue = {
    light: {
        bodyBackground: "white",
        navBackground: "#F6F6F7",


    },
    dark: {
        bodyBackground: "#161625",
        navBackground: "#1E1E30",
        statewiseBG: "#1C1C2B",
        covidtableHeaderBG: "#191933",
        tableBorder: "1px solid black",
        textColor: "#a8a8a8",
        mainInputBG: "#1E1E30",
        boxShadow: "2px 2px 12px 7px #1C1C2B",
        resourcesBG: "#151D33"
    }
}



function ThemeContextProvider({ children }) {

    const [currentTheme, setCurrentTheme] = useState("light");

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === "light" ? "dark" : "light")
    }


    const value = {
        currentTheme,
        toggleTheme,
        theme: themeValue[currentTheme]
    }


    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}
export { ThemeContextProvider, ThemeContext }
import React, { createContext } from "react";

const GlobalState = createContext();

const DataProvider = ({ children }) => {
    return (
        <GlobalState.Provider value={"value in globals"}>{children}</GlobalState.Provider>
    );
};

export { GlobalState };
export default DataProvider;

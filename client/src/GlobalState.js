import React, { createContext, useState } from "react";
import ProductsApi from './api/productApi'
const GlobalState = createContext();

const DataProvider = ({ children }) => {
    const [token, setToken] = useState(false)

    const state = {
        token: [token, setToken],
        productsApi: ProductsApi()
    }
    return (
        <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
    );
};

export { GlobalState };
export default DataProvider;

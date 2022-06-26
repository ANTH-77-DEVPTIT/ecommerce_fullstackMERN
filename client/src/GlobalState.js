import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import ProductsApi from './api/productApi'
const GlobalState = createContext();

const DataProvider = ({ children }) => {
    const [token, setToken] = useState(false)

    const refreshToken = async () => {
        const res = await axios.get('/user/refresh_token')
        setToken(res.data.accesstoken)
    }

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
    }, [])

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

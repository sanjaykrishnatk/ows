import React, { createContext, useState } from "react";

export const registerContext = createContext({});
export const loginContext = createContext({});
export const editContext = createContext({});
export const deleteContext = createContext({});
export const cartContext = createContext({});
export const updateContext = createContext({});
export const categoryContext = createContext({});
export const searchContext = createContext({});
function DataShare({ children }) {
  const [registerData, setRegisterData] = useState({});
  const [loginData, setLoginData] = useState({});
  const [editData, setEditData] = useState({});
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [updateData, setUpdateData] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchData, setSearchData] = useState([]);
  return (
    <registerContext.Provider value={{ registerData, setRegisterData }}>
      <loginContext.Provider value={{ loginData, setLoginData }}>
        <editContext.Provider value={{ editData, setEditData }}>
          <deleteContext.Provider value={{ deleteStatus, setDeleteStatus }}>
            <cartContext.Provider value={{ cartData, setCartData }}>
              <updateContext.Provider value={{ updateData, setUpdateData }}>
                <categoryContext.Provider value={{ category, setCategory }}>
                  <searchContext.Provider value={{ searchData, setSearchData }}>
                    {children}
                  </searchContext.Provider>
                </categoryContext.Provider>
              </updateContext.Provider>
            </cartContext.Provider>
          </deleteContext.Provider>
        </editContext.Provider>
      </loginContext.Provider>
    </registerContext.Provider>
  );
}

export default DataShare;

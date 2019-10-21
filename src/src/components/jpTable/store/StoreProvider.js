import React, { useState } from "react";

export const FirstContext = React.createContext();
export const SecondContext = React.createContext();

const StoreProvider = ({ children }) => {
    const [firstValue, setFirstValue] = useState("fValue");
    const [secondValue, setSecondValue] = useState("sValue");

    return (
        <FirstContext.Provider value={[firstValue, setFirstValue]}>
            <SecondContext.Provider value={[secondValue, setSecondValue]}>
                {children}
            </SecondContext.Provider>
        </FirstContext.Provider>
    );
};

export default StoreProvider;
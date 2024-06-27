import { createContext, useContext, useState, } from "react";

const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)

let GlobalStates = (children) => {
    
    const [progressWidth, setProgressWidth] = useState(33.33); // Initial width in percentage

    return <GlobalContext.Provider value={{
        progressWidth,
         setProgressWidth
    }}>
        {children.children}
    </GlobalContext.Provider>
}

export {
    GlobalStates,
    useGlobalState
}
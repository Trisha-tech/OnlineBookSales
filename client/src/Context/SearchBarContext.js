import { useState, createContext, useContext } from "react"

const SearchBarContext = createContext()

const SearchBarContextProvider = ({children}) => {
    const [searchBarTerm, setSearchBarTerm] = useState("")

    return (
        <SearchBarContext.Provider value={{searchBarTerm, setSearchBarTerm}}>
            {children}
        </SearchBarContext.Provider>
    )
}

let useSearchBar = () => useContext(SearchBarContext)

export { useSearchBar, SearchBarContextProvider };
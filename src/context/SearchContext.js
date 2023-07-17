import { createContext, useReducer } from "react";

const Initial={
    city:undefined,
    date:[],
    options:{
        adult:undefined,
        children:undefined,
        room:undefined,
    },
};

export const SearchContext=createContext(Initial)

const SearchReader=(state,action)=>{
    switch(action.type){
        case "New_Search":
            return action.payload;
        case "Reset_Search":
            return Initial;
        default:
            return state
    }
}
export const SearchContextProvider=({children})=>{
    const [state,dispatch]=useReducer(SearchReader,Initial)

    return(
        <SearchContext.Provider value={{city:state.city,
        date:state.date,options:state.options,dispatch}}>
            {children}
        </SearchContext.Provider>
    )
}
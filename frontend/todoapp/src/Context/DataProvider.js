import {createContext, useState} from "react"


export const DataContext = createContext(null);

//when we pass something inside component it is called props but when we pass inside opening and closing tag then it is called children
const DataProvider = ({children}) => {

    const [notes,setNotes] = useState([])
    const [archiveNotes,setArchiveNotes] = useState([])
    const [deletedNotes,setDeletedNotes] = useState([])
    return(
        <DataContext.Provider value={{
          notes,
          setNotes,
          archiveNotes,
          setArchiveNotes,
          deletedNotes,
          setDeletedNotes
        }}>

            {children}

        </DataContext.Provider>
    )
}



export default DataProvider;
import { createContext } from "react"
import { useState } from "react"


 export const MainContext=createContext()


function MainProvider({children}) {
 
function addbasket(item) {
  setbasket([...basket,item])
  
}

const [basket, setbasket] = useState([])
  return (
    <MainContext.Provider value={{basket , addbasket}} >
      {children}
    </MainContext.Provider>
  )
}

export default MainProvider
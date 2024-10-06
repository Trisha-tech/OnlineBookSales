
import { useState, useContext, createContext } from 'react'

const ToastContext = createContext()

let ToastContextProvider = ({children}) => {
  const [toastList, setToastList] = useState([])

  let toastProperties = null;

  const showToast = (typeOfToast, toastTitle, toastDescription, time=5000) =>
  {
    switch(typeOfToast)
    {
      case "success" : toastProperties = {
        id : toastList.length+1,
        title : toastTitle,
        description : toastDescription,
        type:"success",
        time: time

      }
        
      break;
      case "error" : toastProperties = {
        id : toastList.length+1,
        title : toastTitle,
        description : toastDescription,
        type:"error",
        time: time
      }
      break;
      case "warning" : toastProperties = {
        id : toastList.length+1,
        title : toastTitle,
        description : toastDescription,
        type:"warning",
        time: time
      }
      break;
      case "info" : toastProperties = {
        id : toastList.length+1,
        title : toastTitle,
        description : toastDescription,
        type:"info",
        time: time
      }
      break;
      default : toastProperties = {}
    }
    
    setToastList(toastList=>[...toastList, toastProperties])
  }

  return (
      <ToastContext.Provider value={{toastList, setToastList, showToast}}>
          {children}
      </ToastContext.Provider>
  )
}

let useToast = () => useContext(ToastContext)

export { ToastContextProvider, useToast };
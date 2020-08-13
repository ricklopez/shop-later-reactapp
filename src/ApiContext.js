import React from 'react'

export default React.createContext({
  lists: [],
  folders: [],
  addFolder: () => {},
  addList: () => {},
  deleteList: () => {},
})
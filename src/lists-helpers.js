export const findFolder = (folders=[], folderId) =>
folders.find(folder => folder.id === folderId)

export const findList = (lists=[], listId) =>
lists.find(list => list.id === listId)

export const getListsForFolder = (lists=[], folderId) => (
(!folderId)
  ? lists
  : lists.filter(list => list.folderId === folderId)
)

export const countListsForFolder = (lists=[], folderId) =>
lists.filter(list => list.folderId === folderId).length

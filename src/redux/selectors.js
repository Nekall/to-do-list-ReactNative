//Selectors (Pour selectionner une partie du store)
export const getTasks = store => store.tasksList
export const getCompletedTasks = store => store.tasksList.filter(task => task.isCompleted)

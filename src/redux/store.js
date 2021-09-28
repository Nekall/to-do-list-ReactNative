import {createStore, combineReducers} from 'redux';

//Selectors (Pour selectionner une partie du store)

export const getTasks = store => store.tasksList
export const getCompletedTasks = store => store.tasksList.filter(task => task.isCompleted)

//Actions (fonctions qui renvoient un objet aux reducers : { type: MON_ACTION, payload : { DATA } })

const ADD_TASK = "ADD_TASK"

export function addNTask(title){
  return{
    type: ADD_TASK,
    payload: {
      title,
    },
  };
};

const TOGGLE_TASK = "TOGGLE_TASK"
/*
function toggleTask(title){
  return{
    type: ADD_TASK,
    payload: {
      title
    }
  }
}*/

const DELETE_TASK = "DELETE_TASK"
/*
function deleteTask(id){
  return{
    type: ADD_TASK,
    payload: {
      title
    }
  }
}*/

//Reducers (retourne un nouveau state)
const initialState = [{id:1, title: "Init task", isCompleted: false}];

const tasksList = (state  = initialState, action) => {
  switch(action.type){
    case ADD_TASK:
      return [...state, {
        id: new Date().getTime(),
        title: action.payload.title,
        isCompleted: false
      }]
    default:
      return state
  }
};

//Store = {
//    tasksList: [{id:1, title: "Init task", isCompleted: false}];
//}

const rootReducers = combineReducers({
  tasksList,
})

//Store (pour stocker et avoir accès partout dans l'app)
export const store = createStore(rootReducers);

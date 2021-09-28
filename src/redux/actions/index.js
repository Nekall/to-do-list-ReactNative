import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from "./actionsType";

//Actions (fonctions qui renvoient un objet aux reducers : { type: MON_ACTION, payload : { DATA } })
export const addNTask = title => ({
    type: ADD_TASK,
    payload: {
      title,
    },
});

export const toggleTask = id => ({
    type: TOGGLE_TASK,
    payload: {
      id,
    }
});

export const removeTask = id => ({
    type: DELETE_TASK,
    payload: {
      id,
    }
});

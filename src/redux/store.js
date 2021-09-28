import {createStore} from 'redux';
import {rootReducers} from "./reducers"
//Store = {
//    tasksList: [{id:1, title: "Init task", isCompleted: false}];
//}

//Store (pour stocker et avoir accès partout dans l'app)
export const store = createStore(rootReducers);

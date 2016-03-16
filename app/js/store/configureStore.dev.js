import { createStore } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools'

export default function configureStore(initialState){
  return createStore(
      rootReducer,
      initialState,
      DevTools.instrument()
  );
}
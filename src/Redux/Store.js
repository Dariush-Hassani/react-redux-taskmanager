import { createStore} from 'redux';
import RootReducer from './RootReducer';

const Store = createStore(RootReducer,window.devToolsExtension ? window.devToolsExtension() : f => f);
export default Store;
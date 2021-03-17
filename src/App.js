import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store'
import IceCreamContainer from './components/iceCreamContainer';
import CakeContainer from './components/cakeContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer/>
     <IceCreamContainer/>
     <NewCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;

import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utilities/appStore';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <div>
          <Header />  
          <Body />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

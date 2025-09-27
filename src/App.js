import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utilities/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Shorts from './components/Shorts';
import Subscriptions from './components/Subscriptions';
import Library from './components/Library';
import WatchVideo from './components/WatchVideo';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <Body />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shorts",
          element: <Shorts />
        },
        {
          path: "/subscriptions",
          element: <Subscriptions />
        },
        {
          path: "/library",
          element: <Library />
        },
        {
          path: "/watch",
          element: <WatchVideo />
        }
      ],
    }
  ]);
  
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

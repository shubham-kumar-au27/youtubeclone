import './App.css';
import {Provider} from "react-redux";
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    }

  ]
}])

function App() {
  
  return (
    <Provider store={store}>
      <div >
        <Head/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  

  /**
   * head
   * Body
   *  sideBar
   *    MenuItems
   *  Maincontainer
   *    ButtonList
   *    VideoContainer
   *      videoCard
   * 
   */
  );
}

export default App;

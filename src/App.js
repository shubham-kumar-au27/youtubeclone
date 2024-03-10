import './App.css';
import {Provider} from "react-redux";
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';

function App() {
  
  return (
    <Provider store={store}>
      <div >
        <Head/>
        <Body/>
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


import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import WatchContainer from './components/WatchContainer';



const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/watch",
      element:<WatchContainer/>,
    },
    {
      path:"/",
      element:<VideoContainer/>
    }
  ]
}])


function App() {

  return (
    <Provider store={store}>

    <div className="">
      <Header/>
      <RouterProvider router={appRouter}/>
    
      </div>
    </Provider>

/*
- Head 
- SideBar
    -menu-items 
- Body 
    - btn-list
    - video-container
        - video-cards
-
*/





  );
}

export default App;

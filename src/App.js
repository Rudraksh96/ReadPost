
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from '../src/Store';
import { Provider } from 'react-redux';
import Showdata from './Post/Showdata';
import Header from './Navbar/Header';
import Addpost from './Post/Addpost';
import ViewPost from './Post/ViewPost';
import NotFound from './Post/NotFound';
import Login from './Login';
import HeaderComm from './HeaderComm';
import UpdatePost from './Post/UpdatePost';
import { DeletePost } from './Post/DeletePost';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter forceRefresh={true}>
   {/* <HeaderComm/> */}
        <Routes>
          {/* <Route exact path="Login" element={<Login />} /> */}
          <Route exact path="ViewPost/:id" element={<ViewPost />} />
          <Route exact path="/ReadPost" element={<Showdata />} />
          <Route exact path="Addpost" element={<Addpost />} />
          {/* <Route component={NotFound} /> */}
          <Route exact path="UpdatePost/:id" element={<UpdatePost />} />
          <Route exact path="DeletePost/:id" element={<DeletePost />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

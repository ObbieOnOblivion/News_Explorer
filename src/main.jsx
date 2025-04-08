
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import NotFoundPage from './pages/NotFoundPage';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: 'about', element: <AboutPage /> },
//       { path: '*', element: <NotFoundPage /> }
//     ]
//   }
// ]);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );



// og code 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/app/App.jsx";
import store from "./store/store.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);


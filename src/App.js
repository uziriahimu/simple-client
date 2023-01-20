import logo from './logo.svg';
import './App.css';
import AllData from './components/AllData';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import SingleData from './components/SingleData';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/alldata',
        element: <AllData></AllData>,
      },
      {
        path: '/textdata/:id',
        element: <SingleData></SingleData>,
        loader: ({ params }) => fetch(`http://localhost:5000/textdata/${params.id}`)
      }

    ]
  }
]
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Routes
import Dashboard, { dashboardLoader, dashboardAction } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { mainLoader } from "./layouts/Main";
import { logoutAction } from "./actions/logout";

// Library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExpensesPage, { expensesAction, expensesLoader } from "./pages/ExpensesPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div> 
  );
}

export default App;

/**
 * Pakistan 
 * Pop = 24 cr
 * GDP = 376 billion $
 * GDP per capita	= $1,658 
 * HDI = 0.544
 * Expenses = 75 $ billion
 * Revenue = 45 billion $
 * 
 * Rajasthan
 * Pop = 8 cr
 * GDP = 191 billion $ = $2,100
 * HDI = 0.628
 * Expenses = 34 billion $
 * Revenue = 27 billion $
 */
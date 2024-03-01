import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import { createContext } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Groceries = lazy(() => import("./components/Groceries"));

export const creator = createContext({
    name : "Naveen Vishak",
    email : "naveenvishak2002@gmail.com"
});

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
    const [asstCreator, setAsstCreator] = useState({
        name : "Bharath Raj",
        email : "react@namastedev.com"
    });
    return <div className="app">
        <Provider store={appStore}>
            <Header />
            <creator.Provider value={{asstCreator, setAsstCreator}}>
                <Outlet />
            </creator.Provider>
        </Provider>
    </div>
};
const AppRoutes = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : (<Suspense fallback={() => <h1>Loading Groceries page</h1>}>
                    <About/>
                </Suspense>)
            },
            {
                path : "/contact",
                element : <ContactUs/>
            },
            {
                path : "/groceries",
                element : (<Suspense fallback={<h2>loading groceries page</h2>}>
                    <Groceries/>
                </Suspense>)
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantInfo/>
            },
            {
                path : "/cart",
                element : <Cart/>
            }
        ]
    }
])
root.render(<RouterProvider router={AppRoutes} />);
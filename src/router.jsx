import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home/Home";
import { CheckOut } from "./pages/CheckOut/CheckOut";
import { Category } from "./pages/Category/Category";
import { Product } from "./pages/Product/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          // home page
          { index: true, element: <Navigate to="/home" /> },
          { path: "/home", element: <Home /> },
          {
            path: "/",
            children: [
              { index: true, element: <Home /> },
              {
                path: ":category",
                children: [
                  // category page
                  { index: true, element: <Category /> },
                  // product page
                  { path: ":slug", element: <Product /> },
                ],
              },
            ],
          },
          { path: "checkout", element: <CheckOut /> },
        ],
      },
    ],
  },
]);

// error handeling
function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div className="container">
        <h1>Error - Something went wrong</h1>
        {import.meta.env.MODE !== "production" && (
          <>
            <pre>{error.message}</pre>
            <pre>{error.stack}</pre>
          </>
        )}
      </div>
    </>
  );
}

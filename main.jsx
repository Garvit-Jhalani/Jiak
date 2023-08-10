import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Register from "./Register.jsx";
import Auth from "./Auth.jsx";
import ResetPassword from "./ResetPassword.jsx";
import Password from "./Password.jsx";
import Verify from "./Verify.jsx";
import Dashboard from "./Dashboard.jsx";
import Aboutus from "./AboutUs.jsx";
import Faqs from "./Faqs.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import Protected from "./Protected.jsx";
import { AuthProvider } from "./auth.context.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "login",
          element: <App />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "resetPassword",
          element: <ResetPassword />,
        },
        {
          path: "password",
          element: <Password />,
        },
        {
          path: "verify",
          element: <Verify />,
        },
        {
          path: "aboutUs",
          element: <Aboutus />,
        },
        {
          path: "faq",
          element: <Faqs />,
        },
        {
          path: "dashboard",
          element: (
            // <Protected>
              <Dashboard />
            // </Protected>
          ),
        },
      ],
    },
  ],
  { replace: true }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// replace:true
// if(!loggedIn()) return <Redirect to

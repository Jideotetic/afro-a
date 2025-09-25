import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [{ index: true, Component: HomePage }],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

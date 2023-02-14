
import {
  createBrowserRouter,

  RouterProvider,

} from "react-router-dom";
import "./App.css";
import { Home } from "./home";

import {
  ComponentOne,
  ComponentThree,
  ComponentTwo,
} from "./TaskThree/MyComponent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home
            children={[<ComponentOne />, <ComponentTwo />, <ComponentThree />]}
          />
        </>
      ),
    },
    {
      path: "/first",
      element: (
        <>
          <Home children={[<ComponentOne />, <ComponentTwo />]} />
        </>
      ),
    },
    {
      path: "/first/second",
      element: (
        <>
          <Home children={[<ComponentTwo />, <ComponentThree />]} />
        </>
      ),
    },
    {
      path: "first/second/third",
      element: (
        <>
          <Home children={[<ComponentOne />, <ComponentThree />]} />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;

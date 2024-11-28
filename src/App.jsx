import { RouterProvider } from "react-router-dom";
import router from "./Router/Index";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;

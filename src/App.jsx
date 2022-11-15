import Login from "./components/auth/login";
import { Provider } from 'react-redux';
import Store from "./store";

function App() {

  return (

    <Provider store={Store}>
      <Login />
    </Provider>


  )
}

export default App

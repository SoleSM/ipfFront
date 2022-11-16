import { Provider } from 'react-redux';
import Store from "./store";
import Rutas from './routes/Rutas';
function App() {

  return (

    <Provider store={Store}>
      <Rutas/>
    </Provider>


  )
}

export default App

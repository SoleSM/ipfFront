import { Provider } from 'react-redux';
import Store from "./redux/store";
import Rutas from './routes/Rutas';
function App() {

  return (
    <Provider store={Store}>
      <Rutas/>
    </Provider>
  )
}

export default App

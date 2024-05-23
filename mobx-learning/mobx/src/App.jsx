import './App.css'
import userStore from './models/userStore'
import Home from './pages/Home'

function App() {
  const store = new userStore();
  return (
    <>
      <Home store={store}  />
    </>
  )
}

export default App

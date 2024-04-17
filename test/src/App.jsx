import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import { Context } from './context/context'
import { useContext, useState } from 'react'
function App() {
  const [context, setContext] = useState(useContext(Context))
  const obj = { context, setContext }

  return (
    <>
      <Context.Provider value={obj}>
        <Header />
        <div>
          <h1>Body</h1>
          <h1>
            Este es el contexto: {context}
          </h1>
        </div>
        <footer>
          <h1>Footer</h1>
        </footer>
      </Context.Provider>
    </>
  )
}

export default App

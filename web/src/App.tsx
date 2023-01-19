import './styles/global.css'

import { Habit } from './components/Habit'

function App() {
  return (
    <>
      <h1>Hello NLW Setup</h1>
      <Habit completed={3} />
      <Habit completed={10} />
    </>
  )
}

export default App

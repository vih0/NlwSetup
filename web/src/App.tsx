import './styles/global.css';

import { Habit } from "./components/Habits";



function App() {


  return (
    <div className="App">
      <Habit completed={5}/>
      <Habit completed={5}/>
      <Habit completed={5}/>
      <Habit completed={5}/>
      <Habit completed={5}/>
      <Habit completed={5}/>
        
    
    </div>
  )
}

export default App

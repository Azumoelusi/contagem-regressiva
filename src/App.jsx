import Title from './components/Title'
import Counter from './components/couter'
import NewYear from './assets/fireworks.jpg'  

import './App.css'

import useCountdown from './hooks/useCountdown' 

function App() {
  const [day, hour, minute, second] = useCountdown()
  return (
    <div className="App" style={{backgroundImage: `url(${NewYear})`}}>
      <div className="container">
        <Title title='Contagem regressiva para 2024!' />
        <div className="contdown-container">
          <Counter title='Dias' number={day}/>
          <Counter title='Horas' number={hour}/>
          <Counter title='Minutos' number={minute}/>
          <Counter title='Segundos' number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App

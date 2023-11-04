import { LineChart } from 'recharts'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LiveChart from './components/LiveChart/LiveChart'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LiveChart></LiveChart>
    </div>
  )
}

export default App

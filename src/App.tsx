import './App.css'
import { ReactGraphComponent } from './components/ReactGraphComponent'
import SideBar from './components/SideBar'
function App() {
  return (
    <div className="app">
      <div className=''>
          <ReactGraphComponent />
          <SideBar />
      </div>
    </div> 
  )
}

export default App

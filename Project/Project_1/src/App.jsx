import Apphead from './components/Apphead.jsx'
import Appcontent1 from './components/Appcontent1.jsx'
import  Appcontent2 from './components/Appcontent2.jsx'
import './components/App.css'

function App() {
  return (
    
    <div>
      <center class="todo-container">
        <h1>TODO LIST</h1>
        <div class="container">
          <Apphead />
          <div class="content-item">
          <Appcontent1/>
          <Appcontent2/>
          </div>
</div>
      </center>
    </div>
  )
}

export default App

import logo from "./logo.svg"
import "./App.css"
import { FieldView } from "./components/FieldView"
import { Scoreboard } from "./components/Scoreboard"
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <div className="App">
      <main>
        <div className="Scoreboard">
          <Scoreboard />
        </div>
        <div className="container">
          <div className="field-wrapper">
            <FieldView />
          </div>
          <aside className="sidebar"><Sidebar /></aside>
        </div>
      </main>
    </div>
  )
}

export default App

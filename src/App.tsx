import logo from "./logo.svg"
import "./App.css"
import { FieldView } from "./components/FieldView"
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <div className="App">
      <header className="App-header">Aquarium</header>
      <main>
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <div className="field-wrapper">
          <FieldView />
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default App

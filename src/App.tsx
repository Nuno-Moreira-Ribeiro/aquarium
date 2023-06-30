import logo from "./logo.svg"
import "./App.css"
import { FieldView } from "./components/FieldView"

function App() {
  return (
    <div className="App">
      <header className="App-header">Aquarium</header>
      <main>
        <aside className="sidebar"></aside>
        <div className="field-wrapper">
          <FieldView />
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default App

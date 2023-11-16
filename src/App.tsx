import logo from "./logo.svg"
import "./App.css"
import { FieldView } from "./components/FieldView"

function App() {
  return (
    <div className="App">
      <header className="App-header">Aquarium</header>
      <main>
        <div className="field-wrapper">
          <FieldView />
        </div>
        <aside className="sidebar"></aside>
      </main>
      <footer></footer>
    </div>
  )
}

export default App

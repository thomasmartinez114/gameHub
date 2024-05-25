import ListGroup from "./components/ListGroup"

function App() {
  let items = ["New York", "Providence", "Austin", "Orlando"]
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  )
}

export default App

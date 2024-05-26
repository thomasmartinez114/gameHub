import { useState } from "react"

// import ListGroup from "./components/ListGroup"
import Button from "./components/Button"
import Alert from "./components/Alert"

function App() {
  // let items = ["New York", "Providence", "Austin", "Orlando"]

  // const handleSelectItem = (item: string) => {
  //   console.log(item)
  // }

  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
  )
}

export default App

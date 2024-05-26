// import ListGroup from "./components/ListGroup"

import Button from "./components/Button"

// import Alert from "./components/Alert"

function App() {
  // let items = ["New York", "Providence", "Austin", "Orlando"]

  // const handleSelectItem = (item: string) => {
  //   console.log(item)
  // }

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      <Button onClick={() => console.log("Click")}>My Button</Button>
    </div>
  )
}

export default App

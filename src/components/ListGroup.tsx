import { MouseEvent } from "react"

function ListGroup() {
  let items = ["New York", "Providence", "Austin", "Orlando"]

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1>List below</h1>
      {/* Ternary */}
      {/* {items.length === 0 ? <p>No Item Found</p> : null}  */}
      {/* better way to write without the null being needed */}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup

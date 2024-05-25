import { useState } from "react"

function ListGroup() {
  let items = ["New York", "Providence", "Austin", "Orlando"]
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>List below</h1>
      {/* Ternary */}
      {/* {items.length === 0 ? <p>No Item Found</p> : null}  */}
      {/* better way to write without the null being needed */}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup

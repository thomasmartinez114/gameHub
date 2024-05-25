import { useState } from "react"

// pass obj with two properities
// {items: [], heading: string}
interface Props {
  items: string[]
  heading: string
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
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

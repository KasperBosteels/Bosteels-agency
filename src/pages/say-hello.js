import * as React from "react"
import Greeting from "../components/Greeting"
const SayHello = () => {
  return (
    <div>
      <Greeting name="Kasper" />
      <Greeting name="Alberto" />
    </div>
  )
}
export default SayHello

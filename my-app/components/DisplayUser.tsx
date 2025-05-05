import { FC } from "react"

type DisplayUserProps = {
    id: number;
}

const DisplayUser: FC<DisplayUserProps> = ( {id} ) => {
  return (
    <div>{id}</div>
  )
}

export default DisplayUser
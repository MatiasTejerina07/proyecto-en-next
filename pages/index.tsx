import { FC } from "react"
import { Button } from "@nextui-org/react"

const HomePage: FC = () => {
  return (
    <>
      <div className="w-screen h-screen flex-col flex justify-center items-center">
        <h1 className=''>Hola MUNDO</h1>
        <Button name="hola" color={"primary"} ghost >HOLA</Button>
      </div>

    </>
  )
}
export default HomePage


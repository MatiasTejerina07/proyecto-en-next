import { FC } from "react"
import { Button } from "@nextui-org/react"
import { Layout } from "@/components/layouts"

const HomePage: FC = () => {
  return (
    <Layout>
      <div className="w-screen h-screen flex-col flex justify-center items-center">

        <h1 className=''>Hola MUNDO</h1>
        <Button name="hola" color={"primary"} ghost >HOLA</Button>

      </div>

    </Layout >
  )
}
export default HomePage


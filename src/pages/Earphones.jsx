import { useSelector } from "react-redux"
import PageHeader from "../components/PageHeader"
import EarphonesList from "../components/EarphonesList"


const Earphones = () => {
  return (
    <div>
     <PageHeader text="earphones" />
     <EarphonesList />
    </div>
  )
}

export default Earphones
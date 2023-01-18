import { useSelector } from "react-redux"
import PageHeader from "../components/PageHeader"
import HeadPhonesList from "../components/HeadPhonesList"


const Headphones = () => {
  return (
    <div>
     <PageHeader text="headphones" />
     <HeadPhonesList />
    </div>
  )
}

export default Headphones
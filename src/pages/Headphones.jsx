import { useSelector } from "react-redux"
import PageHeader from "../components/PageHeader"
import HeadPhonesList from "../components/HeadPhonesList"
import { useEffect } from "react"


const Headphones = () => {

  return (
    <div>
     <PageHeader text="headphones" />
     <HeadPhonesList />
    </div>
  )
}

export default Headphones
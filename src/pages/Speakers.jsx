import { useSelector } from "react-redux"
import PageHeader from "../components/PageHeader"
import SpeakersList from "../components/SpeakersList"


const Speakers = () => {
  return (
    <div>
     <PageHeader text="speakers" />
     <SpeakersList />
    </div>
  )
}

export default Speakers
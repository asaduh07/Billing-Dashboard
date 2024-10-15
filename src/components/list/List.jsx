import { useSelector } from "react-redux"
import ListCard from "../listCard/ListCard"
import { billingSelector } from "../../features/billing/billingSlice"

const List=()=>{
    const {companies}=useSelector(billingSelector);

    return(

        <div className="container">
            {companies.length?companies.map((company)=>
            <ListCard company={company}/>
            ):<div>No data</div>}

        </div>
    )
}

export default List;
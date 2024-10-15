import { useSelector } from "react-redux"
import ListCard from "../listCard/ListCard"
import { billingSelector } from "../../features/billing/billingSlice"
import styles from './list.module.css';
const List=()=>{
    const {filteredCompanies,selectedCompany}=useSelector(billingSelector);

    const totalCost = filteredCompanies.reduce((acc, company) => {
        return acc + company.totalcost.reduce((sum, cost) => sum + parseFloat(cost || 0), 0);
    }, 0);

    const totalDelivered = filteredCompanies.reduce((acc, company) => {
        return acc + company.delivered.reduce((sum, delivered) => sum + parseInt(delivered || 0), 0);
    }, 0);

    return(

        <div className={styles.container}>
            {selectedCompany === "all" && (
                <div className={styles.totalContainer}>
                    <span className={styles.totalText}>
                        Total Cost of All Companies: <strong>{totalCost.toFixed(2)}</strong> &nbsp;|&nbsp; 
                        Total Submissions: <strong>{totalDelivered}</strong>
                    </span>
                </div>
            )}
            {filteredCompanies.length ? (
                filteredCompanies.map((company, index) => (
                    <ListCard key={index} company={company} />
                ))
            ) : (
                <div className={styles.noData}>No data available</div>
            )}
        </div>
    )
}

export default List;
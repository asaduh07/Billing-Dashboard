import styles from './searchBar.module.css'
import { fetchDataAsync } from '../../features/billing/billingSlice'
import { useDispatch,useSelector } from 'react-redux'
import { billingSelector } from '../../features/billing/billingSlice'
import { setFromDate,setToDate,setSelectedCompany } from '../../features/billing/billingSlice'
const SearchBar = () => {
    const dispatch= useDispatch();
   
    const {companies,filteredCompanies, fromDate,toDate,selectedCompany}= useSelector(billingSelector);
       
    const handleClick=()=>{
        dispatch(fetchDataAsync());

    }

    const handleDateChange =(e,setter)=>{
        const dateValue= e.target.value;  
        dispatch(setter(dateValue));
    }

    const handleCompanyChange=(e)=>{
        const companyValue=e.target.value;
        dispatch(setSelectedCompany(companyValue));
    }
    
    return (
        <div className={styles.container}>
            <h1>Customer Billing</h1>
            <div className={styles.bottom}>
                <div className={styles.option}>
                    <h2>Company</h2>
                    <select name="company" id="company" value={selectedCompany} onChange={handleCompanyChange}>
                        <option value="all" default>All Company</option>
                        {companies.map((com, index) => <option value={com.serviceProvider} key={index}>{com.serviceProvider}</option>)}
                    </select>
                </div>
                <div className={styles.option}>
                    <h2>From Date</h2>
                    <input type="date" value={fromDate} onChange={(e) => handleDateChange(e, setFromDate)} />
                </div>
                <div className={styles.option}>
                    <h2>To Date</h2>
                    <input type="date" value={toDate} onChange={(e) => handleDateChange(e, setToDate)} />
                </div>
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar;
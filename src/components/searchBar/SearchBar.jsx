import styles from './searchBar.module.css'
import { fetchDataAsync } from '../../features/billing/billingSlice'
import { useDispatch,useSelector } from 'react-redux'
import { billingSelector } from '../../features/billing/billingSlice'
import { setFromDate,setToDate } from '../../features/billing/billingSlice'
const SearchBar = () => {
    const dispatch= useDispatch();
   
    const {companies,fromDate,toDate}= useSelector(billingSelector);
   
    const handleClick=()=>{
        
        dispatch(fetchDataAsync());

    }
    const handleDateChange =(e,setter)=>{
        const dateValue= e.target.value;
        
        dispatch(setter(dateValue));
    }
    return (
        <div className={styles.container}>
            <h1>Customer Billing</h1>
            <div className={styles.bottom}>
                <div className={styles.option}>
                    <h2>Company</h2>
                    <select name="company" id="company">
                        <option value="all" default>All Company</option>
                       {companies.map((com ,index)=><option value="" key={index}>{com.key}</option>) }
                    </select>

                </div>
                <div className={styles.option}>
                    <h2>From Date</h2>
                    <input type="date" name="" id="" value ={fromDate}onChange={(e)=>handleDateChange(e,setFromDate)}/>

                </div>
                <div className={styles.option}>
                    <h2>Date to</h2>
                    <input type="date" name="" id="" value={toDate} onChange={(e)=>handleDateChange(e,setToDate)} />

                </div>
                <button onClick={handleClick} >Search</button>
            </div>
        </div>
    )
}

export default SearchBar;
import styles from './listcard.module.css'

const ListCard =({company})=>{

    return(
        <div className={styles.container}>
            <div className="companyName">
                <span>{company.key}</span>

            </div>
            <div className="cost">
                <span>Total Cost:</span>

            </div>
            <div className="submission">
                <span>Total Submission:</span>

            </div>
        </div>
    )
}

export default ListCard;
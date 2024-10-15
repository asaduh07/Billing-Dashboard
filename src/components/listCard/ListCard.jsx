import styles from './listcard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import TableCard from '../table/TableCard';

const ListCard = ({ company }) => {
    const [isTableVisible, setIsTableVisible] = useState(false);

    const toggleTable = () => {
        setIsTableVisible(prevState => !prevState);
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.container} onClick={toggleTable}>
                <div className={styles.companyName}>
                    <span>{company.serviceProvider}</span>
                </div>
                <div className={styles.cost}>
                    <span>Total Cost: {company.totalcost.reduce((acc, curr) => acc + curr)}</span>
                </div>
                <div className={styles.submission}>
                    <span>Total Submission:
                        {
                            company.delivered.reduce((acc, val) => acc + parseInt(val || 0), 0) +
                            company.failed.reduce((acc, val) => acc + parseInt(val || 0), 0) +
                            company.other.reduce((acc, val) => acc + parseInt(val || 0), 0)
                        }
                    </span>
                </div>

                <FontAwesomeIcon
                    icon={isTableVisible ? faCaretUp : faCaretDown}
                    className={styles.icon}
                />
            </div>
            {isTableVisible && <TableCard company={company} />}
        </div>
    )
}

export default ListCard;
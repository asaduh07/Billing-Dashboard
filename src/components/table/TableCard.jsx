import styles from './tablecard.module.css';

const TableCard = ({ company }) => {
    return (
        <div className={styles.container}>
            {Array.isArray(company.countryCode) && company.countryCode.map((code, index) => (
                <div key={index}> {/* Use key for each mapped item */}
                    <h4>Country Code: {code}</h4> {/* Display the country code */}
                    <table>
                        {/* Table Header */}
                        <thead>
                            <tr>
                                <th>TOTAL COST</th>
                                <th>SMS COST</th>
                                <th>DELIVERED</th>
                                <th>FAILED</th>
                                <th>OTHER</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            <tr>
                                <td>{company.totalcost[index]}</td>
                                <td>{company.smscost[index]}</td>
                                <td>{company.delivered[index]}</td>
                                <td>{company.failed[index]}</td>
                                <td>{company.other[index]}</td> {/* Handle undefined or missing values appropriately */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default TableCard;

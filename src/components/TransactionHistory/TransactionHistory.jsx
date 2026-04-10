import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <div className={styles.transactionBox}>
      <h1 className={styles.transactionTitle}>Transaction history</h1>
      <table className={styles.transactionTable}>
        <thead>
          <tr className={styles.transactionTheadTr}>
            <th className={styles.transactionTh}>Type</th>
            <th className={styles.transactionTh}>Amount</th>
            <th className={styles.transactionTh}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id} className={styles.transactionTr}>
              <td className={styles.transactionTd}>{item.type}</td>
              <td className={styles.transactionTd}>{item.amount}</td>
              <td className={styles.transactionTd}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

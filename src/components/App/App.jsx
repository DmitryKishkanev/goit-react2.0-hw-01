import userData from '@/userData.json';
import friends from '@/friends.json';
import transactions from '@/transactions.json';
import Profile from '../Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory';
import style from '@/components/App/App.module.css';

export default function App() {
  return (
    <div className={style.app}>
      <div></div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

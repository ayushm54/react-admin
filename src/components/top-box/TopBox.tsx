import { topDealUsers } from "../../data";
import "./topBox.scss";

const TopBox = () => {
  return (
    <div className="top-box">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="list-item" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="user-text">
                <span className="user-name">{user.username}</span>
                <span className="user-email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;

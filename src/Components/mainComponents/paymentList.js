import { Link } from "react-router-dom";

const PaymentList = () => {
  let data = [];
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));

  if (dataFromLocalStorage) {
    data = dataFromLocalStorage;
  }

  let arrTemp = [];
  let f = data.length - 1;
  while (f >= 0 && data.length - f <= 5) {
    arrTemp.push(data[f--]);
  }

  return (
    <div className="listContainer">
      <div className="listHeader">
        <h3>Recent</h3>
        <Link to="/history">
          <button>View All</button>
        </Link>
      </div>

      {arrTemp.map((items) => {
        const { name, amount, id } = items;
        return (
          <div
            key={id}
            className={
              "listItems " + (amount < 0 ? "expenseItems" : "incomeItems")
            }
          >
            <h1>{name}</h1>
            <h4>₹ {Math.abs(amount)}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentList;
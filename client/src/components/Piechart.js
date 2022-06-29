import { PieChart, Pie } from "recharts";
import transactions from "../data/transactions";

const Piechart = () => {
  const transactionArray = transactions[0].transactions.transactions.booked[0];
  console.log(transactionArray);

  const groupedMap = transactionArray.reduce(
    (entryMap, transaction) =>
      entryMap.set(transaction.creditorName, [
        ...(entryMap.get(transaction.creditorName) || []),
        transaction,
      ]),
    new Map()
  );

  let array = [];
  console.log(groupedMap.size);

  const keys = groupedMap.keys();
  const values = groupedMap.values();

  for (let i = 1; i <= groupedMap.size; i++) {
    array.push({ name: keys.next().value, value: values.next().value.length });
  }

  console.log(array);

  const groupedCurrencies = transactionArray.reduce(
    (entryMap, transaction) =>
      entryMap.set(transaction.transactionAmount.currency, [
        ...(entryMap.get(transaction.transactionAmount.currency) || []),
        transaction,
      ]),
    new Map()
  );

  console.log(groupedCurrencies);

  const currKeys = groupedCurrencies.keys();
  const currValues = groupedCurrencies.values();

  let currArray = [];

  for (let i = 1; i <= groupedCurrencies.size; i++) {
    currArray.push({
      name: currKeys.next().value,
      value: currValues.next().value.length,
    });
  }

  let totalSpent = 0;
  for (let i = 0; i < transactionArray.length; i++) {
    totalSpent += transactionArray[i].transactionAmount.amount;
  }
  totalSpent = Math.round(totalSpent * 100) / 100;

  const averageExpenditure =
    Math.round((totalSpent / transactionArray.length) * 100) / 100;

  return (
    <div>
      <div>
        <h2>Number of transactions by vendor: </h2>
        {array.map((vendor) => (
          <p>
            {vendor.name} {vendor.value} Transactions
          </p>
        ))}
      </div>

      <div>
        <h2>Number of transactions by currency: </h2>
        {currArray.map((currency) => (
          <p>
            {currency.name} {currency.value} Transactions
          </p>
        ))}
      </div>

      <div>
        <h2>Additional Details</h2>
        <p>Total number of transactions: {transactionArray.length}</p>
        <p>Total spent in time period {totalSpent}</p>
        <p>Average transaction price: {averageExpenditure}</p>
      </div>
    </div>
  );
};

export default Piechart;

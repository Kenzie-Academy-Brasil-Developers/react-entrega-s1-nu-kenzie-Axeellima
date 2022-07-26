function TotalMoney({ listTransactions }) {
  return (
    <section className="container-totalmoney">
      <div>
        <h2>Valor Total:</h2>
        <p>O valor se refere ao saldo</p>
      </div>
      <h2 className="total-value">
        R${" "}
        {listTransactions.reduce((previous, current) => {
          return previous + current.value;
        }, 0)}
      </h2>
    </section>
  );
}
export default TotalMoney;

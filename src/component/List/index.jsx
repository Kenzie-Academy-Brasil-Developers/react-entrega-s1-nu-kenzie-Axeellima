import Card from "../Card";

function List({ listTransactions, setListTransactions }) {
  return (
    <div className="container-card">
      <div className="filters">
        <h1>Resumo Financeiro</h1>
        <div className="button-filters">
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </div>
      </div>
      {listTransactions.map((transaction, index) => (
        <Card
          setListTransactions={setListTransactions}
          transaction={transaction}
          key={index}
        />
      ))}
    </div>
  );
}
export default List;

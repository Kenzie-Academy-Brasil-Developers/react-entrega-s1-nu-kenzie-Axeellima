import { IoMdTrash } from "react-icons/io";

function Card({ transaction, setListTransactions }) {
  function handleAll(remove) {
    return setListTransactions((all) =>
      all.filter((items) => {
        return items !== remove;
      })
    );
  }
  return (
    <div>
      {transaction.type === "entrada" ? (
        <div className="card card-input">
          <div>
            <h1>{transaction.description}</h1>
            <p className="card-value">R$ {transaction.value},00</p>
          </div>
          <div>
            <p>Entrada</p>
            <IoMdTrash
              onClick={() => {
                handleAll(transaction);
              }}
              size={20}
            />
          </div>
        </div>
      ) : (
        <div className="card card-exit">
          <div>
            <h1>{transaction.description}</h1>
            <p className="card-value">R$ {transaction.value},00</p>
          </div>
          <div>
            <p>Saída</p>
            <IoMdTrash
              onClick={() => {
                handleAll(transaction);
              }}
              size={20}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Card;

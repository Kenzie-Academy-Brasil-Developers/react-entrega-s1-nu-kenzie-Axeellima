import "./App.css";
import { useState } from "react";
import Form from "./component/Form";
import List from "./component/List";
import TotalMoney from "./component/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className="App">
      <header className="header">
        <h1>
          <strong>Nu</strong> Kenzie
        </h1>

        <button className="exit-button">Início</button>
      </header>

      <main className="container">
        <div className="container-newInput">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>

        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </main>
    </div>
  );
}

export default App;

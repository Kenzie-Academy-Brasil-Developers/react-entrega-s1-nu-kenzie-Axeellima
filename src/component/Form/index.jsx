import { useState } from "react";

function Form({ listTransactions, setListTransactions }) {
  const [valueInput, setValueInput] = useState(0);
  const [descriptionInput, setDescriptionInput] = useState("");
  const [typeSelect, setTypeSelect] = useState("entrada");
  return (
    <div className="newInput">
      <h3 className="description">Descrição</h3>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        value={descriptionInput}
        onChange={(event) => setDescriptionInput(event.target.value)}
        className="new-description"
      />
      <p className="description-p">Ex. Compra de roupas</p>

      <h3 className="value-title">Valor</h3>
      <h3 className="type-value-title">Tipo de Valor</h3>
      <input
        type="number"
        min="1"
        step="any"
        value={valueInput}
        onChange={(event) => setValueInput(Number(event.target.value))}
        className="value"
      />

      <select
        name="Tipo de Valor"
        onChange={(event) => setTypeSelect(event.target.value)}
        className="type-value"
      >
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>
      <button
        onClick={() => {
          if (typeSelect === "entrada" || typeSelect !== "saida") {
            const newObject = {
              description: descriptionInput,
              type: typeSelect,
              value: valueInput,
            };
            setListTransactions((lista) => [...lista, newObject]);
          } else {
            const valueNegative = valueInput * -1;
            const newObject = {
              description: descriptionInput,
              type: typeSelect,
              value: valueNegative,
            };
            setListTransactions((lista) => [...lista, newObject]);
          }
        }}
        className="put-value"
      >
        Inserir valor
      </button>
    </div>
  );
}
export default Form;

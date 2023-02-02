export default function TransactionInfo (props) {
  return (
    <tr key = {props.value.key}>
      <td>{props.value.id}</td>
      <td>{props.value.createdAt}</td>
      <td>{props.value.type}</td>
      <td>{props.value.accountNumber}</td>
      <td>{props.value.note}</td>
      <td>{(props.value.type === "credit") ? "+" : "-" }{props.value.amount}</td>
    </tr>
  );
}

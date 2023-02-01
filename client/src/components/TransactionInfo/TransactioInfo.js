export default function TransactionInfo (props) {
  console.log(Date.parse(props.value.createdAt))
  return (
    <tr key = {props.value.key}>
      <td>{props.value.id}</td>
      <td>{props.value.createdAt}</td>
      <td>{props.value.type}</td>
      <td>{props.value.accountNumber}</td>
      <td>{props.value.note}</td>
      <td>{props.value.amount}</td>

    </tr>
  );
}

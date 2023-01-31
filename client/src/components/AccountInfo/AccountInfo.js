export default function AccountInfo(props) {
  return (
    <tr key = {props.value.key}>
      <td>{props.value.accountId}</td>
      <td>{props.value.accountNumber}</td>
      <td>{props.value.balance}</td>

    </tr>
  );
}

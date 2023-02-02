export default function AccountInfo(props) {
  return (
    <div key={props.value.key} className="account-info">
      <h3>Account Number</h3>
      <p>{props.value.accountNumber}</p>
      {props.value.accountId}
      {props.value.balance}
    </div>
  );
}

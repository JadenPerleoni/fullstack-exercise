export default function AccountInfo(props) {
  return (
    <div key={props.value.key} className="account-info">
      Account Number
      {props.value.accountId}
      {props.value.accountNumber}
      {props.value.balance}
    </div>
  );
}

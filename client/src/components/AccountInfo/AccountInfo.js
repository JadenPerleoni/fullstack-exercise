export default function AccountInfo(props) {
  return (
    <div key={props.value.key} className="account-info">
      <h3>Account Number</h3>
      <p>{props.value.accountNumber}</p>

      <div style={{ top: "60px",position: "relative" }}>
        <p style = {{position: "absolute", width: "400px"}}>
          Current balance{" "}
          <span style={{ float: "right" }}>${props.value.balance}</span>
        </p>
      </div>
    </div>
  );
}

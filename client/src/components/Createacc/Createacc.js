import { useState } from "react";

import generateUniqueId from "generate-unique-id";;



// TODO: Generate random unique account number?
function Createacc() {
  const [form, setForm] = useState({
    accountId: "",
    accountNumber: "",
    balance: 0,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <div className="App">
        <div className="login-form">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Account id:
              <input
                type="text"
                name="accountid"
                value={form.accountId || ""}
                onChange={(e) =>
                  setForm({ ...form, accountId: e.target.value })
                }
              />
            </label>
            <label>
              Balance:
              <input
                type="number"
                name="balance"
                value={form.balance || ""}
                onChange={(e) =>
                  setForm({ ...form, balance: e.target.value })
                }
              />
            </label>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Createacc;

import React, { Component } from "react";
import formatNumber from "format-number";
//import photographer from "./images/girl.png";
import "./App.css";
import store from "./store";
import { withdrawMoney } from "./actions";

class App extends Component {
  
  withdrawMoneyAction = (e) => {
    const amount = e.target.dataset.amount;
    store.dispatch(withdrawMoney(amount));
  }
  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={"https://i.picsum.photos/id/566/200/200.jpg?hmac=b6_RMcsCCCu5ULi6A3V8vdRrnNhtsnbHdakcGNIQd8s"} alt="photographer" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={this.withdrawMoneyAction}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={this.withdrawMoneyAction}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;

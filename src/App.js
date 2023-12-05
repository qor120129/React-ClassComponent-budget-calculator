import { Component } from "react";
import "./App.css"
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseList: [],
      inputValue: {},
      charge: '',
      amount: '',
    };
  }
  id = 0
  total= 0

  clickDelete = (id, DeleteAmount) => {
    const newExpenseList = this.state.expenseList.filter((value) => value.id !== id)
    this.setState({ expenseList: newExpenseList })
    this.total -= Number(DeleteAmount)
  }

  clickDeleteAll = () => {
    this.setState({
      expenseList: [],
    })
    this.total = 0
  }

  inputChange = (e) => {
    const { name, value } = e.target;
    const newInputValue = { ...this.state.inputValue, [name]: value }
    this.setState({
      inputValue: newInputValue,
      [name]: value
    })
  }



  clickAdd = (e) => {
    e.preventDefault()
    const newExpenseList = { ...this.state.inputValue, id: this.id++ }
    this.total += Number(this.state.amount)

    if (this.state.amount && this.state.charge) {
      this.setState({
        expenseList: this.state.expenseList.concat(newExpenseList),
        inputValue: {},
        charge: '',
        amount: '',
      })

    }
  }

  render() {
    return (
      <main className="main_container">
        <h1 className="title">예산 계산기</h1>
        <div className="expense_form">{
          <ExpenseForm
            inputChange={this.inputChange}
            clickAdd={this.clickAdd}
            charge={this.state.charge}
            amount={this.state.amount}

          />}
        </div>
        <div className="expense_lsit" >
          {
            <ExpenseList
              expenseList={this.state.expenseList}
              clickDelete={this.clickDelete}
              clickDeleteAll={this.clickDeleteAll}
            />
          }
        </div>
        <div className="total_wrap">
          <div className="total">
            <span>총지출:</span>
            <span>{this.total}원</span>
          </div>
        </div>
      </main>
    )
  }
}
export default App;



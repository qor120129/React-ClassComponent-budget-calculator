import { Component } from "react";
import "./App.css"
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseList: [],
      inputValue: [{ charge: '', amount: '' }]
    };
  }



  clickDelete = (id) => {
    const newExpenseList = this.state.expenseList.filter((value) => value.id !== id)
    this.setState({ expenseList: newExpenseList })
  }

  clickDeleteAll = () => {
    this.setState({ expenseList: [] })
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    const newExpenseList = { ...this.state.inputValue, [name]: value, }
    this.setState({ inputValue: newExpenseList })
  }

  id = 0
  clickAdd = () => {
    const newExpenseList = [{ ...this.state.inputValue, id: this.id++ }]
    this.setState({ expenseList: this.state.expenseList.concat(newExpenseList) })
  }

  render() {
    return (
      <main className="main_container">
        <h1 className="title">예산 계산기</h1>
        <div className="expense_form">{
          <ExpenseForm
            handleInput={this.handleInput}
            clickAdd={this.clickAdd}
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
            <span>원</span>
          </div>
        </div>
      </main>
    )
  }
}
export default App;



import React, { Component } from 'react'
import '../css/ExpenseItem.css'
import { MdDelete, MdEdit } from 'react-icons/md'


export class ExpenseItem extends Component {
  render() {
    return (
      <>
        <li className='list_item'>
          <div className='info'>
            <span className='expense' >{this.props.expense.charge}</span>
            <span className='amount' >{this.props.expense.amount} 원</span>
          </div>
          <div className='btn_wrap'>
            <button className='btn edit'><MdEdit/></button>
            <button className='btn delete'><MdDelete onClick={()=> this.props.clickDelete(this.props.expense.id, this.props.expense.amount)}/></button>
          </div>
        </li>
      </>
    )
  }
}

export default ExpenseItem
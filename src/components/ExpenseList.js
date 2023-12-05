import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem'
import '../css/ExpenseList.css'
import { MdDelete } from 'react-icons/md'


export class ExpenseList extends Component {
  render() {
    console.log('inputValue', this.props.inputValue)
    return (
      <>
        <ul className='list'>
          {(this.props.expenseList).map(value => {
            return (
              <ExpenseItem
                key={value.id}
                expense={value}
                clickDelete={this.props.clickDelete}
              />
            )
          })
          }

        </ul>
        <div className='btn_wrap'>
          <button className='btn' onClick={() => this.props.clickDeleteAll()}> 목록 지우기 <MdDelete /></button>
        </div>
      </>
    )
  }
}

export default ExpenseList
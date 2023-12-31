import React, { Component } from 'react'
import '../css/ExpenseForm.css'
import { MdSend } from 'react-icons/md'


export class ExpenseForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.clickAdd}>
        <div className='form_center'>
          <div className='form_group'>
            <label htmlFor='charge'>지출 항목</label>
            <input
              type='text'
              className='form_control'
              id='charge'
              name='charge' 
              onChange={this.props.inputChange}
              value={this.props.charge}
              autocomplete="off"
              placeholder='예) 렌트비'>
            </input>
          </div>
          <div className='form_group'>
            <label htmlFor='amount'>비용</label>
            <input
              type='number'
              className='form_control'
              id='amount'
              name='amount'
              onChange={this.props.inputChange}
              value={this.props.amount}
              placeholder='예) 100'>
            </input>
          </div>
        </div>
        <div className='btn_wrap'>
          <button type='submit' className='btn' > 제출 <MdSend /></button>
        </div>
      </form>
    )
  }
}

export default ExpenseForm
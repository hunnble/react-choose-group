import React from 'react'
import ReactDOM from 'react-dom'
import { Group } from '../index.jsx'

const container = document.querySelector('#container')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      radioValue: 'apolo',
      radioItems: ['apolo', 'zeus', 'athena'],
      checkboxValues: ['Lannister', 'Stark'],
      checkboxItems: ['Lannister', 'Stark', 'Greyjoey']
    }
  }
  onRadioChange = (value) => {
    this.setState({
      radioValue: value
    })
  }
  onCheckboxChange = (values) => {
    this.setState({
      checkboxValues: values
    })
  }
  render () {
    return (
      <div>
        <h3>radio group</h3>
        <Group
          type='radio'
          name='radioGroup'
          items={this.state.radioItems}
          value={this.state.radioValue}
          onChange={this.onRadioChange}
        />
        <h3>{this.state.radioValue}</h3>
        <h3>checkbox group</h3>
        <Group
          type='checkbox'
          name='checkboxGroup'
          items={this.state.checkboxItems}
          value={this.state.checkboxValues}
          onChange={this.onCheckboxChange}
        />
        <ul>
          {
            this.state.checkboxValues.map((value, index) => (
              <li key={'checkboxValue'+index}>{value}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  container
)
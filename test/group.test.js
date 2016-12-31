import React from 'react'
import { mount } from 'enzyme'
import { Group } from '../index.jsx'
import { expect } from 'chai'

const wrapperClassName = 'wrapper-classname'
const wrapperStyle = {}
const itemClassName = 'item-classname'
const itemStyle = {}
const groupItems = ['a', 'b', 'c']

function createRadioGroup () {
  let group = mount(
    <Group
      type='radio'
      name='radioGroup'
      value='a'
      items={groupItems}
      onChange={(value) => null}
      wrapperClassName={wrapperClassName}
      wrapperStyle={wrapperStyle}
      itemClassName={itemClassName}
      itemStyle={itemStyle}
    />
  )

  return group
}

function createCheckboxGroup () {
  let checkboxValues = []
  let group = mount(
    <Group
      type='checkbox'
      name='checkboxGroup'
      value={checkboxValues}
      items={groupItems}
      onChange={(values) => {checkboxValues=values}}
      wrapperClassName={wrapperClassName}
      wrapperStyle={wrapperStyle}
      itemClassName={itemClassName}
      itemStyle={itemStyle}
    />
  )

  return group
}

describe('Test Group component', () => {
  it('at the `wrapperClassName` prop and the `wrapperStyle` prop to the wrapper', () => {
    const group = createRadioGroup()
    expect(group.hasClass(wrapperClassName)).to.be.true
  })

  it('Passes props down to the items', () => {
    const group = createRadioGroup()
    expect(group.find('div > label > input[type="radio"]').length).to.equal(groupItems.length)
    expect(group.find('div > label').at(0).hasClass(itemClassName)).to.be.true
  })

  it('Get default checked props when set the value(radio)', () => {
    let group = createRadioGroup()
    expect(group.find('div > label > input[type="radio"]').at(0).props().checked).to.be.true
    group.find('div > label > input[type="radio"]').at(1).simulate('click')
  })

  it('Get default checked props when set the value(checkbox)', () => {
    let group = createCheckboxGroup()
    expect(group.find('div > label > input[type="checkbox"]').at(0).props().checked).to.be.false
    group.find('div > label > input[type="checkbox"]').at(0).simulate('click')
  })

  it('Change value while being controlled && clicked', () => {
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
              otherValues={{
                show: true,
                separator: ';'
              }}
            />
            <h3>{this.state.radioValue}</h3>
            <h3>checkbox group</h3>
            <Group
              type='checkbox'
              name='checkboxGroup'
              items={this.state.checkboxItems}
              value={this.state.checkboxValues}
              onChange={this.onCheckboxChange}
              otherValues={{
                show: true,
                separator: ';'
              }}
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
    let group = mount(<App />)
    expect(group.find('label > input').at(3).props().checked).to.be.true
    group.find('label > input').at(3).simulate('change')
    expect(group.find('label > input').at(3).props().checked).to.be.false
  })
})
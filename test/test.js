import React from 'react'
import { shallow } from 'enzyme'
import Group from '../index.jsx'
import { expect } from 'chai'

const wrapperClassName = 'wrapper-classname'
const wrapperStyle = {}
const itemClassName = 'item-classname'
const itemStyle = {}

function createRadioGroup () {
  let radioItem = 'a'
  const radioItems = ['a', 'b', 'c']
  const group = shallow(
    <Group
      type='radio'
      name='radioGroup'
      value={radioItem}
      items={radioItems}
      onChange={(value) => {radioValue=value}}
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
  const checkboxItems = ['a', 'b', 'c']
  const group = shallow(
    <Group
      type='checkbox'
      name='checkboxGroup'
      value={checkboxValues}
      items={checkboxItems}
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
  it('Get the `wrapperClassName` prop and the `wrapperStyle` prop to the wrapper', () => {
    const group = createRadioGroup()
    eppect(group.hasClass(wrapperClassName).to.be.true)
  })

  it('Passes props down to the items', () => {
    const group = createRadioGroup()
    expect(group.find('input[type=radio][name=radioGroup]').to.have.length(groupItems.length))
    expect(group.find('.' + itemClassName).to.have.length(groupItems.length))
    expect(group.find('.' + itemStyle).to.have.length(groupItems.length))
  })

  it('Change checked state after click(radio)', () => {
    const group = createRadioGroup()
    expect(group.find('input[type=radio]')[0].selected.to.be.true)
    group.find('input[type=radio]')[1].simlate('click')
    expect(group.find('input[type=radio]')[0].selected.to.be.false)
    expect(group.find('input[type=radio]')[1].selected.to.be.true)
  })

  it('Change checked state after click(checkbox)', () => {
    const group = createCheckboxGroup()
    expect(group.find('input[type=checkbox]')[0].checked.to.be.false)
    group.find('input[type=checkbox]')[0].simlate('click')
    expect(group.find('input[type=checkbox]')[0].checked.to.be.true)
    group.find('input[type=checkbox]')[0].simlate('click')
    expect(group.find('input[type=checkbox]')[0].checked.to.be.false)
  })

  it('Inject synchronous validation into `onChange` prop', () => {
    // todo
  })

  it('Inject synchronous validation before component mount', () => {

  })
})
import React from 'react'
import { shallow } from 'enzyme'
import Group from '../index.jsx'
import { expect } from 'chai'

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
    />
  )

  return group
}

describe('Test Group component', () => {
  it('Passes the `type` and the `name` prop down to the items', function () {
    const group = createRadioGroup()
    expect(group).find('input[type=radio][name=radioGroup]').to.have.length(groupItems.length)
  })

  it('Change checked state after click(radio)', () => {
    const group = createRadioGroup()
    expect(group.find('input[type=radio]')[0].selected.to.equal(true))
    group.find('input[type=radio]')[1].simlate('click')
    expect(group.find('input[type=radio]')[0].selected.to.equal(false))
    expect(group.find('input[type=radio]')[1].selected.to.equal(true))
  })

  it('Change checked state after click(checkbox)', () => {
    const group = createCheckboxGroup()
    expect(group.find('input[type=checkbox]')[0].checked.to.equal(false))
    group.find('input[type=checkbox]')[0].simlate('click')
    expect(group.find('input[type=checkbox]')[0].checked.to.equal(true))
  })
})
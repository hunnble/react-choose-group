import React, { PropTypes } from 'react'

export class Group extends React.Component {
  constructor (props) {
    super(props)
  }
  handleChange = (item) => {
    const { type, value, onChange } = this.props
    switch (type) {
      case 'radio':
        onChange(item)
        break
      case 'checkbox':
        const newItems = value.concat()
        const indexOfItem = newItems.indexOf(item)
        if (indexOfItem !== -1) {
          newItems.splice(indexOfItem, 1)
        } else {
          newItems.push(item)
        }
        onChange(newItems)
        break
      default:
        throw new Error('Incorrect type of component, check <Group> component please')
    }
  }
  render () {
    const {
      wrapperClassName,
      wrapperStyle,
      itemClassName,
      itemStyle,
      name,
      value,
      type,
      items,
      onChange
    } = this.props
    return (
      <div className={wrapperClassName} style={wrapperStyle}>
        {
          type === 'radio' &&
          items.map((item, index) => (
            <label key={'@@group-item'+index} className={itemClassName} style={itemStyle}>
              <input
                type={'radio'}
                checked={item===value}
                name={name}
                value={item}
                onChange={() => {this.handleChange(item)}}
              />
              {item}
            </label>
          ))
        }
        {
          type === 'checkbox' &&
          items.map((item, index) => (
            <label key={'@@group-item'+index} className={itemClassName} style={itemStyle}>
              <input
                type={'checkbox'}
                checked={value.indexOf(item) > -1}
                name={name}
                value={item}
                onChange={() => {this.handleChange(item)}}
              />
              {item}
            </label>
          ))
        }
      </div>
    )
  }
}

Group.propTypes = {
  wrapperClassName: PropTypes.string,
  wrapperStyle: PropTypes.object,
  itemClassName: PropTypes.string,
  itemStyle: PropTypes.object,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
}

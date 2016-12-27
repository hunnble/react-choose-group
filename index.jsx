import React, { PropTypes } from 'react'

export class Group extends React.Component {
  constructor (props) {
    super(props)
  }
  static PropTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.oneOf(['radio', 'checkbox']),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired
  }
  render () {
    const {
      className,
      style,
      type,
      name,
      items,
      onChange
    } = this.props
    return (
      <div className={className} style={style}>
        {
          items.map((item, index) => (
            <input
              key={'@@group-item'+index}
              type={type||'radio'}
              name={name}
              value={item}
              onClick={() => {onChange(item, index)}}
            />
          ))
        }
      </div>
    )
  }
}



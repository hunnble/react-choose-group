# react-choose

> Build radio/checkbox group in a short time.

[demo](http://hunnble.github.io/react-choose/example/example.html)

### example(/example/example.js)
```javascript
// import the Component
import { Group } from 'react-choose'
...
class YourComponent extends React.Component {
  // render the Component
  render () {
    return (
      <div>
        <Group
          type='radio'
          name='nameYourGroup'
          items={[1,2,3]}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
```

### props
props             | description   | required
-------------     | ------------- | -------------
wrapperClassName  | classname of the wrapper | 
wrapperStyle      | style of the wrapper | 
itemClassName     | classname of every item | 
itemStyle         | style of every item | 
name              | name of the group | Y
value             | as a controlled component, the value is the whole group's value | Y
type              | type of items, is `radio` or `checkbox` | Y
items             | items array | Y
onChange          | function to handle the changing of the value | Y
otherValues       | contains `show`(boolean) and `separator`, if `show` is true, an input(text) will be rendered to get other values, if type prop is `checkbox`, the input will be separated by the separator | 

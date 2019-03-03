# React Native Radio Button 2
Simple react native radio button.
 
![](https://raw.githubusercontent.com/bimalgrg519/images/master/react-native-radio-button-2.png)

### Installation
```sh
$ npm install --save react-native-radio-button-2
```

### Usage
```javascript
 import RadioButton from 'react-native-radio-button-2';
 
 export default class App extends React.Component {
  state = {
    selectedGender: 0,
  }
  render() {
    const { selectedGender } = this.state;
    
    const genderTypes = [
      { label: 'Male', value: 0 },
      { label: 'Female', value: 1 },
      { label: 'Others', value: 2}
    ];
    
    return (
      <RadioForm
        values={genderTypes}
        selectedValue={selectedGender}
        buttonColor="black"
        onPress={(value) => {
          this.setState({
            selectedGender: value,
          });
        }}
      />
      );
  }
 }
 ```
 
### Available props
| Prop | Description | Default |
|---|---|---|
|**`values`**|Array of objects that contains label and value of Radio button. |`18`|
|**`size`**|Size of the Radio Button. |`18`|
|**`buttonColor`**|Color of the Radio button. |`black`|
|**`selectedValue`**|Selected Radio button number |`0`|
|**`onPress`**|Function invoked on button press. |*None*|

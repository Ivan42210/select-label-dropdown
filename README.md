# SelectMenu Plugin

A simple label plugin with a dropdown menu to select options for forms.

## Installation

You can install the SelectMenu plugin via npm. Run the following command:

```
npm install select-menu-plugin
```

## Usage

To use the SelectMenu plugin, follow these steps:

1. Import the `SelectMenu` component from the package:

```javascript
import SelectMenu from 'select-menu-plugin';
```

2. Use the `SelectMenu` component in your code by providing the necessary props:

```javascript
<SelectMenu
  labelName="Select an option"
  options={['Option 1', 'Option 2', 'Option 3']}
  onChange={(selectedOption) => console.log(selectedOption)}
/>
```

### Props

The `SelectMenu` component accepts the following props:

- `labelName` (string, required): The label text for the SelectMenu.
- `options` (array of strings, required): The options to display in the dropdown menu.
- `onChange` (function, required): A callback function triggered when an option is selected. It receives the selected option as a parameter.

## Example

Here's an example of using the SelectMenu plugin:

```jsx
import React from 'react';
import SelectMenu from 'select-menu-plugin';

const App = () => {
  const handleOptionChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <div>
      <h1>My Form</h1>
      <SelectMenu
        labelName="Select an option"
        options={['Option 1', 'Option 2', 'Option 3']}
        onChange={handleOptionChange}
      />
    </div>
  );
};

export default App;
```

## License

This plugin is released under the [MIT License](https://opensource.org/licenses/MIT).
```


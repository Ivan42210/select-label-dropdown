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

## Styling

The SelectMenu plugin comes with basic styling. You can customize the appearance by modifying the CSS classes provided. Here's an explanation of the CSS classes and their styles:

- `.selector`: The container for the SelectMenu component.
- `.selector-btn`: The style for the label button that triggers the dropdown menu.
- `.selector-list`: The style for the dropdown menu.
- `.selector-item`: The style for each item in the dropdown menu.
- `.selector-icon`: The style for the icon displayed in the label button.

Feel free to modify and customize these styles to match your desired design. You can override the styles or add your own hover styles as needed.

```css
/*Here the plug in basic style, feel free to custom it as you need*/

.selector {
    position: relative;
    height: auto;
}

.selector-btn {
    padding: 7px;
    background: whitesmoke;
    border: solid 1px black;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.selector-list {
    position: absolute;
    z-index: 999;
    width: 100%;
    background: whitesmoke;
    border: solid 1px black;
}

.selector-item {
    padding: 10px;
    cursor: pointer;
}

/*
Make your own hover style here

.selector-item:hover {
    background: black;
    color: whitesmoke;
}*/

.selector-icon {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid black;
}

```

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

Please note that the styling code provided should be added to your project's CSS file or styled components for the styles to take effect.
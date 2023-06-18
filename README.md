# select-label-dropdown

[![npm version](https://badge.fury.io/js/select-label-dropdown.svg)](https://badge.fury.io/js/select-label-dropdown)

A customizable dropdown component with a label.

## Installation

You can install the `select-label-dropdown` package using npm:

```shell
npm install select-label-dropdown
```

## Usage

To use the `select-label-dropdown` component in your project, import it and render it with the desired props:

```jsx
import Selector from 'select-label-dropdown';

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <div>
      <h1>Select an option:</h1>
      <Selector labelName="Select an option" options={options} onChange={handleChange} />
    </div>
  );
}

export default App;
```

## Props

The `select-label-dropdown` component accepts the following props:

| Prop        | Type       | Description                                 |
| ----------- | ---------- | ------------------------------------------- |
| labelName   | string     | The label text for the Selector.             |
| options     | string[]   | The options to display in the dropdown menu. |
| onChange    | Function   | A callback function triggered when an option is selected. |

## Styling

The `select-label-dropdown` component comes with default styles that you can customize according to your needs. To apply custom styles, import the CSS file and override the desired CSS classes.

Example CSS:

```css
/* Custom styles for select-label-dropdown */
.mbic-selector {
  /* Add your custom styles here */
}

.mbic-selector-btn {
  /* Add your custom styles here */
}

.mbic-selector-list {
  /* Add your custom styles here */
}

.mbic-selector-item {
  /* Add your custom styles here */
}

.mbic-selector-item:hover {
  /* Add your custom styles here */
}

.mbic-selector-icon {
  /* Add your custom styles here */
}
```

You can import the CSS file in your project as follows:

```jsx
import 'select-label-dropdown/dist/Selector.css';
```

Then, update the CSS classes with your desired styles to customize the appearance of the `select-label-dropdown` component.

## Example

Here's an example of customizing the styles of the `select-label-dropdown` component:

```jsx
import Selector from 'select-label-dropdown';
import 'select-label-dropdown/dist/Selector.css'; // Import the CSS file

function App() {
  const options = ['Red', 'Green', 'Blue'];

  const handleChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <div>
      <h1>Select a color:</h1>
      <Selector
        labelName="Select a color"
        options={options}
        onChange={handleChange}
        className="my-custom-selector" // Apply custom class for additional styling
      />
    </div>
  );
}

export default App;
```

In this example, the `select-label-dropdown` component is customized by applying a custom CSS class `my-custom-selector`. You can then define the styles for this class in your CSS file.

## License

This component is released under the MIT License.

## Contributing

Contributions to the `select-label-dropdown` package are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/your-repo).

## Credits

The `select-label-dropdown
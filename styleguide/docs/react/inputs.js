/*doc
---
title: Basic Inputs
name: 00_form_basic_input_react
parent: form_react
---

<code class="pam">
<i class="fa fa-download" alt="Install the Components">
npm install pui-react-inputs --save
</i>
</code>

Require the subcomponent:

```
var BasicInput = require('pui-react-inputs').BasicInput;
```

Input components can be used on their own as inputs. They accept standard
text input properties (such as `placeholder`).

Basic Inputs will render a label if given `label`. If given `id`, clicking on the label
will focus the input.

```react_example
<BasicInput label="Label" id="theInput" placeholder="Enter text here if you dare"/>
```

Basic Inputs display a custom `errorMessage` when the `displayError` parameter is truthy.

```react_example
<BasicInput
  label="Label!"
  labelClassName="hello"
  displayError={true}
  errorMessage="Try Again, Fool"
  inputClassName="hey"
/>

```
Basic Inputs display a checkmark when the `success` prop is given.

```react_example
<BasicInput
 success
 label="Great Label for a Great Job!"
 placeholder="YOU ARE SO COOL"
/>
```
*/

/*doc
 ---
 title: Checkbox
 name: 00_form_checkbox_react
 parent: form_react
 ---

 Require the subcomponent:

 ```
 var Checkbox = require('pui-react-inputs').Checkbox;
 ```

 A Checkbox component renders a checkbox with a label. It accepts standard
 checkbox input properties (such as `placeholder`).

 ```react_example
 <Checkbox label="Label"/>
 ```

 A Checkbox component display a custom `errorMessage` when the `displayError` parameter is truthy.

 ```react_example
 <Checkbox
 label="Label!"
 labelClassName="hello"
 displayError={true}
 errorMessage="You must accept the terms and conditions!"
 inputClassName="hey"
 />
 ```
*/

/*doc
---
title: Search Inputs
name: 01_form_search_input_react
parent: form_react
---

Require the subcomponent:

```
var SearchInput = require('pui-react-inputs').SearchInput;
```

```react_example
<SearchInput placeholder="Search..."/>
```

To demonstrate how to use a SearchInput in a more complex example, let's say
we want to filter a list based on the user's input. We can accomplish this
by creating a stateful component which is composed of the SearchInput and the
list to filter.

```jsx_example
var FilteringSearchExample = React.createClass({
  getInitialState: function () {
    return {
      filter: "",
      items: ['Apple', 'Banana', 'Orange']
    }
  },

  updateFilter: function (event) {
    this.setState({ filter: event.target.value });
  },

  render: function () {
    var filterRegex = new RegExp(this.state.filter, "i");
    var listItems = this.state.items.map(function (item) {
      return item.match(filterRegex) && <li key={item}>{item}</li>;
    });

    return (
      <div>
        <SearchInput placeholder='Filter by...' onChange={this.updateFilter}/>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});
```

```react_example
<FilteringSearchExample />
```

*/
import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
const App = () => {
  // const dataAcorddion = [
  //   {
  //     'title': 'what is react?',
  //     'content': 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
  //   },
  //   {
  //     'title': 'why use react?',
  //     'content': 'Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.'
  //   }
  // ]
  // const options = [
  //   {
  //     label: 'The Color Red',
  //     value: 'red'
  //   },
  //   {
  //     label: 'The Color Green',
  //     value: 'green'
  //   },
  //   {
  //     label: 'The shade of Blue',
  //     value: 'blue'
  //   },
  // ];
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
      {/* {showDropdown ? 
        <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> : null} */}
      {/* <Accordion dataa={dataAcorddion} />  */}
      <Translate />


    </div>
  );
}

export default App;

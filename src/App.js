import React from 'react' 
import Accordion from './components/Accordion'
import Search from './components/Search'
const App = () => {
  const dataAcorddion = [
    {
      'title': 'what is react?',
      'content': 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
    },
    {
      'title': 'why use react?',
      'content': 'Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.'
    }
  ]
  return (
    <div className="ui container">
      <Search />
      {/* <Accordion dataa={dataAcorddion} />  */}
    </div>
  );
}

export default App;

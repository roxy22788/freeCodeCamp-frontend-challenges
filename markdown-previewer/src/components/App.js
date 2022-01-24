import { React, useState } from 'react';
import { marked } from 'marked';

import Editor from './Editor';
import Preview from './Preview';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [markedV, setMarkedV] = useState('');

  function handleChangeEdit(e) {
    setMarkdown(e.target.value);
    setMarkedV(marked.parse(e.target.value));
  }

  return (
    <div>
      <Editor 
        markdown={markdown}
        onChange={handleChangeEdit} />
      
      <Preview 
        markdown={markedV} />
    </div>
  );
}

export default App;

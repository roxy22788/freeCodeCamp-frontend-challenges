import { React, useState } from 'react';
import { marked } from 'marked';

import ToolBar from './ToolBar';
import Editor from './Editor';
import Preview from './Preview';

import './css/index.css'

function App() {
  const [markdown, setMarkdown] = useState('');
  const [markedV, setMarkedV] = useState('');

  function handleChangeEdit(e) {
    setMarkdown(e.target.value);
    setMarkedV(marked.parse(e.target.value));
  }

  return (
    <div>
      <div className='editor'>
        <ToolBar 
          text='Editor'/>
        <Editor
          markdown={markdown}
          onChange={handleChangeEdit} />
      </div>
      <div className='preview'>
        <ToolBar 
          text='Preview'/>
        <Preview
          markdown={markedV} />
      </div>
    </div>
  );
}

export default App;

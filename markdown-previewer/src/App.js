import React, { useState } from 'react';
import { marked } from 'marked'
import { useEffect } from 'react/cjs/react.development';

function App() {
  const [html, setHtml] = useState('');

  useEffect(() => {
    let seila = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
    setHtml(seila);
  });

  return (
    <div dangerouslySetInnerHTML={{__html: html}} />
  );
}

export default App;

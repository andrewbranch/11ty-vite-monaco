import './configureMonaco.js';

import * as monaco from 'monaco-editor';

monaco.editor.create(document.getElementById('app')!, {
  value: 'function hello() {\n\talert(\'Hello, world!\');\n}',
});
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddSusbscriber from './AddSubscriber';
import registerServiceWorker  from './registerServiceWorker';
import './common/common.css';

ReactDOM.render(<AddSusbscriber />, document.getElementById('root'));
registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';

function Form() {
     return (
          <div>
               <h1>Form Page</h1>
          </div>
     );
}

export default Form;

if (document.getElementById('form')) {
     ReactDOM.render(<Form />, document.getElementById('form'));
}
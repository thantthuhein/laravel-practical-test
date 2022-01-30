import React from 'react';
import ReactDOM from 'react-dom';

const FieldsToRender = () => {
     return (
          <div>
               <h1>Fields To Render Page</h1>
          </div>
     );
}

export default FieldsToRender;

if (document.getElementById('fields-to-render')) {
     ReactDOM.render(<FieldsToRender />, document.getElementById('fields-to-render'));
}
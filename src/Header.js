import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
   render() {
     var myStyle = {
      fontSize:50,
      color:'black'
     }
      return (
         <div>
            <h1 style = { myStyle }>Tic Tac Toe:</h1>
         </div>
      );
   }
}

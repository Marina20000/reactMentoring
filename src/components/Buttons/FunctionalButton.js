import React from "react";

export const createButton=() => {
        function handleClick(e) {
          e.preventDefault();
          console.log('The link was clicked.');
        }
      
        return (
          <button style={{ width: 200, height: 30, color: 'blue' }} onClick={handleClick}>
            Click me
          </button>
        );
      }
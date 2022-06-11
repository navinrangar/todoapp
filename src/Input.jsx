import React from 'react';

function Input (props){
  return(
    
   <input value={props.value} onChange={props.onChange} class="p-2 m-8 w-96 border border-black " placeholder="eg. write a blog post for this week."/>
  
  );
  
}

export default Input;
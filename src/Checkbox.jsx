import React from 'react';

function Checkbox(props){
  return(
<>
<input type="checkbox" checked={props.checked} onChange={props.onChange} className={"font-bold mt-1 w-6 h-4 text-3xl"}/>
</> 
  );
}


export default Checkbox;
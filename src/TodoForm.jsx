import React from 'react';
import H1 from "./H1";
import Button from "./Button";
import Input from "./Input";



function TodoForm(props){

const [inputValue, setInputValue]= React.useState('');

  const onInputChange=(event)=>{
    setInputValue(event.target.value);
  };
  

  function saveTodo(){
    props.onCreate(inputValue);
    setInputValue('');
    props.onClose();
  }
  
  return(
<div class="shadow-lg">

  <H1> Create a ToDo </H1>
  <Input value={inputValue} onChange={onInputChange} class="p-2 m-8 w-96 border border-black " placeholder="eg. write a blog post for this week."/>

  <div class="flex">
  <Button type="save" onClick={saveTodo}> Save </Button>

  <Button type="cancel" onClick={props.onClose}> Cancel </Button>
</div>
</div> 
  );
}


export default TodoForm;
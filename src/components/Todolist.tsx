import React, { useState } from "react";
import { filterType, tasksType } from "../App";
import { Button } from "./Button";
import { DataMap } from "./DataMap";
import { Input } from "./Input";

type TodolistPropsType = {
  data: tasksType[];
  setFilter: (filter: filterType) => void;
  deleteTask: (tId: string) => void;
  addTask: (value: string) => void;
  newIsDoneChacked:(isChacked:boolean,isId:string) => void
  filter:filterType
};

export const Todolist = (props: TodolistPropsType) => {
  
  
  
  const callBackHandlerAll = () => {
    props.setFilter("All");
    
   

  };
  const callBackHandlerActive = () => {
    props.setFilter("Active");
    
  };
  const callBackHandlerCompleted = () => {
    props.setFilter("Completed");
    
  };

  let [value, setValue] = useState("");
  const callBackHandlerAddTask = () => {
    if(value.trim() ){
      props.addTask(value.trim())
      setValue("");
    }else{
      setError('Title is required')
    }
   
    
  };
  const changeChacked =  (isChacked:boolean,isId:string) => {

props.newIsDoneChacked(isChacked,isId);


  }
  let[error,setError] = useState('')

  return (
    <div>
      <Input error={error}setError={setError} setValue={setValue} value={value}  addTask={callBackHandlerAddTask} />
      <Button   name="+" callBack={callBackHandlerAddTask} />
      <div className="error">{error}</div>
      

      <DataMap changeChacked={changeChacked} data={props.data} deleteTask={props.deleteTask} />
      <div>
        <Button className={props.filter === 'All' ? 'btn' : ''} name="All" callBack={callBackHandlerAll} />
        <Button className={props.filter === 'Active' ? 'btn' : ''} name="Active" callBack={callBackHandlerActive} />
        <Button className={props.filter === 'Completed' ? 'btn' : ''} name="Completed" callBack={callBackHandlerCompleted} />
      </div>
    </div>
  );
};

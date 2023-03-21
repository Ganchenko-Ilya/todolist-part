import React, { ChangeEvent, useState } from "react";
import { tasksType } from "../App";
import { Button } from "./Button";

type DataMapProps = {
  data: tasksType[];
  deleteTask: (tId: string) => void;
  changeChacked:(isChacked:boolean,isId:string) => void
};

export const DataMap = (props: DataMapProps) => {
  
  let data = props.data.map((el, index) => {
    const callBackHandlerDelete = () => {
      props.deleteTask(el.id);
      
    };
    
    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
      props.changeChacked(event.currentTarget.checked,el.id);
      
    }
    return (
      <div className={el.isDone === true ? 'opacity' : ''} key={index}>
        <li >
          <input checked={el.isDone} onChange={onChangeHandler} type="checkbox"  /> {el.title}
          <Button name="x" callBack={callBackHandlerDelete} />
        </li>
      </div>
    );
  });
  return <div>{data}</div>;
};

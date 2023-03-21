import React, { ChangeEvent, KeyboardEvent, useState } from "react";

type InputPropsType = {
  setValue: (value: string) => void;
  value: string;
  addTask:() => void
  setError:(error:string) => void
  error:string
};

export const Input = (props: InputPropsType) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {


    props.setValue(event.currentTarget.value);
  };
  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
props.setError('')
    if(event.key === 'Enter'){
        props.addTask()

    }
  };
  return (
    <input className={props.error ?"input-error":'' }
      onKeyDown={onKeyDownHandler}
      onChange={onChangeHandler}
      value={props.value}
      type="text"
    />
  );
};

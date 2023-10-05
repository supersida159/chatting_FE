'use client'
import { ChangeEvent, FC, useState } from "react";
import  Inputpage  from "../Inputs/InputText";


interface SearchBoxProps {
    count: number;
    value: string;
    onchangefunc: (e: ChangeEvent<HTMLInputElement>) => void;
  }

const SearchBox: FC<SearchBoxProps> = ({count,value,onchangefunc}) =>{

  // Define a function to handle input value changes

    return <>
    <Inputpage onChange={onchangefunc}/>
    <label htmlFor="">{"count down:"+count+value}</label>
    </>
}

export default SearchBox
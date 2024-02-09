"use client"
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


export default function CustomButton({type,text}:any) {
    return <AwesomeButton  type={type}>{text}</AwesomeButton>;
}
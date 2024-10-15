"use client"
import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image"

export default function ImagePicker({label,name}){
    const ImageInputRef = useRef()
    const [pickedImage,setPickedImage] = useState()
    const pickImage = () =>{
        ImageInputRef.current.click()
    }
    const handleImageChange = (e) =>{
        const file = e.target.files[0]
        if(!file){
            setPickedImage(null)
            return;
        }
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () =>{
            setPickedImage(fileReader.result)
        }
    }
    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {pickedImage ?
                    <Image src={pickedImage} fill></Image> 
                     : <p>Click the button to pick an image</p> }
                </div>
                <input 
                className={classes.input}
                type="file" 
                id={name} 
                accept="image/png, image/jpeg"
                name="image" 
                ref={ImageInputRef}
                onChange={handleImageChange}/>
             <button className={classes.button} type="button" onClick={pickImage}>
                Pick an image
            </button>
            </div>
        </div>
    )    
}
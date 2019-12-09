import React from 'react';
import {useState} from 'react';

function Application() {

    const [photo, setPhoto] = useState('');

   const selectFile = (event) =>{
        console.log(event.target.files);
        setPhoto(event.target.files[0]);
    };

    const uploadFile = (event) =>{
        const formData = new FormData();
       
        formData.append('image', photo);
        console.log(...formData);
    };


  return (
   <>
      <input type="file" onChange={selectFile}/>
      <button type="submit" onClick={uploadFile}/>
   </>
  );
}

export default Application;

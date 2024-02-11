import useShowToast from "./useShowToast";
import { useState } from "react"; 

const usePreviewimg = () => {
  const [selectedFile,setSelectedFile] = useState(null);
  const showToast = useShowToast();
  const maxFileSizeInBytes = 5 * 1024 * 1024 // 5mb

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
       if(file.size > maxFileSizeInBytes){
        showToast("Error", "file size must be less than 5mb", "error");
        setSelectedFile(null);
        return;
       }
       const reader = new FileReader();
       reader.onload = () => {
        setSelectedFile(reader.result)
       }
       reader.readAsDataURL(file)
    }else{
        showToast("Error", "Please select and image file", "error");
        setSelectedFile(null);
    }
  }

 return { selectedFile, handleImageChange, setSelectedFile };

};

export default usePreviewimg
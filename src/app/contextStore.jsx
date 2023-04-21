import { createContext, useState } from "react"
import {storage} from "../thirdparty/firebase"
import {ref,getDownloadURL, uploadBytesResumable} from "firebase/storage"

const DmfsseContex = createContext({})



export const DmfsseContextProvider = ({children}) => {
    const [error, setError] = useState(false);
    const [isFarmerOrSse, setIsFarmerOrSse] = useState(false);
    const [imageUrl, setImageUrl] = useState(null)
    const [progressPercent, setProgressPercent] = useState(0);
    const [file, setFile] = useState(null)

    const handleImageUpload = () => {
    
        if(!file) return
        const storageRef = ref(storage, `files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef,file)
    
        uploadTask.on("state_changed",
          (snapshot) => {

            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgressPercent(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL)
              setImageUrl(downloadURL)
            });
          }
        );
      }

    const context = {
        isFarmerOrSse,
        setIsFarmerOrSse,
        handleImageUpload,
        setFile,
        imageUrl,
        progressPercent,
        error
    }

    return <DmfsseContex.Provider value={context}>
        {children}
    </DmfsseContex.Provider>
}


export default DmfsseContex;
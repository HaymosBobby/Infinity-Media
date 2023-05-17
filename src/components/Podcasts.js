import { useRef, useState } from "react";
import Podcast from "./Podcast";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from ".././firebase";

const Podcasts = () => {
  const [file, setFile] = useState(null);
  const audioRef = useRef();

  const handleFileUpload = () => {
    const storage = getStorage(app);
    const storageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <input
        type="file"
        ref={audioRef}
        onChange={(e) => {

          e.preventDefault();
          setFile(e.target.files[0]);

        }}
      />
      <button onClick={handleFileUpload}>Upload</button>
      <Podcast />
      <Podcast />
      <Podcast />
      <Podcast />
      <Podcast />
      <Podcast />
      <Podcast />
    </div>
  );
};

export default Podcasts;

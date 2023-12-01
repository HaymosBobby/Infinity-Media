// import AuthContext from "../../context/AuthContext";
// import { v4 } from "uuid";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../firebase";

import axios from "axios";

const AddPodcasts = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [progress, setProgress] = useState(0);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const id = user.userDetails._id;

  const handlePodcastUpload = (e) => {
    e.preventDefault();
    if (file.type !== "audio/mpeg") {
      throw new Error("Only Audio is allowed....");
    }

    const filename = `${Date.now()}-imedia-${file.name}`;
    const storage = getStorage(app);
    const storageRef = ref(storage, `podcasts/${filename}`);
    const metadata = {
      contentType: "audio/mpeg",
    };

    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

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

        setProgress(progress);
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
        setProgress(0);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const addPodcast = async () => {
            try {
              const response = await axios.post(
                "http://localhost:5000/api/imedia-podcasts",

                {
                  title: title,
                  excerpt: excerpt,
                  podcastUrl: downloadURL,
                  userId: id,
                },
                {
                  headers: {
                    "x-auth-token": token,
                  },
                }
              );
              console.log(response);
            } catch (error) {
              console.log(error);
            }
          };

          addPodcast();
        });
      }
    );
  };

  return (
    <div className="add_podcasts">
      <form
        // action="http://localhost:5000/api/imedia-podcasts"
        // method="POST"
        // encType="multipart/form-data"
        onSubmit={handlePodcastUpload}
      >
        <div>
          <input
            type="file"
            name="podcast"
            onChange={(e) => {
              setFile(e.target.files[0]);
              console.log(file);
            }}
          />

          <input
            type="range"
            name=""
            id=""
            value={progress}
            onChange={(e) => e.preventDefault()}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            name="excerpt"
            onChange={(e) => {
              setExcerpt(e.target.value);
            }}
          />
        </div>
        <button type="submit">Create Podcast </button>
      </form>
    </div>
  );
};

export default AddPodcasts;

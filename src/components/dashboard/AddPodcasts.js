// import AuthContext from "../../context/AuthContext";
// import { v4 } from "uuid";

const AddPodcasts = () => {
  return (
    <div className="add_podcasts">
      <form
        action="http://localhost:8080/api/imedia-podcasts"
        method="POST"
        encType="multipart/form-data"
      >
        <div>
          <input type="file" name="podcast" />
        </div>
        <div>
          <input type="text" name="title" />
          <input type="text" name="excerpt" />
        </div>
        <button type="submit">Create Podcast </button>
      </form>
    </div>
  );
};

export default AddPodcasts;

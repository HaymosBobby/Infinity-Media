import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import Select from "react-select";

const AddPodcasts = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [programId, setProgramId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [programs, setPrograms] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const id = user.userDetails._id;

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/imedia-programs"
        );
        response && setPrograms(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPrograms();
  }, []);

  const handlePodcastUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("excerpt", excerpt);
    formData.append("podcast", file);
    formData.append("userId", id);
    formData.append("programId", programId);

    try {
      setIsLoading(true);
      setError(false);
      const response = await axios.post(
        "http://localhost:5000/api/imedia-podcasts",
        formData,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setIsLoading(false);
      console.log(response);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      setErrorMessage(
        error.response ? error.response.data.message : error.message
      );
      console.log(error);
    }
  };

  return (
    <div className="add_podcasts">
      <div className="top">
        <h1>Add new Podcast</h1>
      </div>
      <div className="bottom">
        <div className="message">
          <p>{error ? errorMessage : ""}</p>
        </div>
        <form onSubmit={handlePodcastUpload}>
          <div>
            <div className="form-group">
              <input
                type="file"
                name="podcast"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </div>
            <div className="form-group">
              {/* <select
                name="program"
                id="program"
                value={programId}
                onChange={(e) => {
                  setProgramId(e.target.value);
                }}
              >
                <option value="">Select Program</option>
                {programs.length > 0 &&
                  programs.map((program) => {
                    return (
                      <option value={program._id} key={program._id}>
                        {program.programName}
                      </option>
                    );
                  })}
              </select> */}
              <Select
                options={programs}
                value={programId}
                onChange={(selectedOptions) => setProgramId(selectedOptions)}
                getOptionLabel={(option) => option.programName}
                getOptionValue={(option) => option._id}
                // isMulti
                className="programs"
              />
            </div>
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
          <button type="submit">
            {isLoading ? <Spinner /> : "Create Podcast"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPodcasts;

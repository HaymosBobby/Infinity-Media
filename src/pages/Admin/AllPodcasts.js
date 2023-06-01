import { useEffect, useState } from "react";
import DataTable from "../../components/Datatable";
import axios from "axios";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import podcast from "../../img/podcast1.jpg";

const columns = [
  { field: "_id", headerName: "ID", width: 200 },
  {
    field: "podcast",
    headerName: "Podcast",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 300,
    renderCell: (params) => {
      return (
        <div className="image_cell">
          <img className="image" src={podcast} alt="" />
          {params.row.title}
        </div>
      );
    },
  },
  { field: "excerpt", headerName: "Excerpt", width: 250 },
];

const AllBlogs = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const url = "http://localhost:5000/api/imedia-podcasts";
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        const data = response.data;
        setPodcasts(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(true);
        if (!err.response) {
          return setErrorMsg(err.message);
        }
        setErrorMsg(err.response.data);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={errorMsg} />
      ) : (
        <DataTable rows={podcasts} columns={columns} name="podcast" />
      )}
    </div>
  );
};

export default AllBlogs;
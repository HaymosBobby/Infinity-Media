import { useContext } from "react";
import DataTable from "../../components/Datatable";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { AppContext } from "../../context/AppContext/Context";

const columns = [
  { field: "_id", headerName: "ID", width: 200 },
  {
    field: "post",
    headerName: "Post",
    // description: "This column has a value getter and is not sortable.",
    // sortable: false,
    width: 300,
    renderCell: (params) => {
      return (
        <div className="image_cell">
          <img className="image" src={params.row.picOneURL} alt="" />
          {params.row.title}
        </div>
      );
    },
  },
  { field: "excerpt", headerName: "Excerpt", width: 250 },
];

const AllBlogs = () => {
  const { isLoadingB, errorB, errorMessageB, blogs } = useContext(AppContext);
  // const [blogLists, setBlogLists] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");
  // const url = "http://localhost:5000/api/imedia-blogs";
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await axios.get(url);
  //       const data = response.data.data;
  //       setBlogLists(data);
  //       setIsLoading(false);
  //     } catch (err) {
  //       setIsLoading(false);
  //       setError(true);
  //       if (!err.response) {
  //         return setErrorMsg(err.message);
  //       }
  //       setErrorMsg(err.response.data);
  //     }
  //   };

  //   fetchData();
  // }, [url]);

  return (
    <div>
      {isLoadingB ? (
        <Loader />
      ) : errorB ? (
        <Error message={errorMessageB} />
      ) : (
        <DataTable rows={blogs} columns={columns} name="blog" />
      )}
    </div>
  );
};

export default AllBlogs;

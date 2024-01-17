import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const DataTable = ({ rows, columns, name }) => {
  const [data, setData] = useState(rows);
  const token = localStorage.getItem("user").userDetails;

  const handleDelete = async (id) => {
    try {
      // rows.splice(
      //   parseInt(rows.findIndex((row) => row._id === id)),
      //   1
      // );
      const newData = data.filter((d) => d._id !== id);

      setData(newData);

      await axios.delete(`http://localhost:5000/api/imedia-${name}s/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="actions">
            <Link to={`/${name}/${params.row._id}`}>
              <div className="view">View</div>
            </Link>
            <div
              className="delete"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="data_table">
      <DataGrid
        // rows={rows}
        rows={data}
        columns={columns.concat(actionColumn)}
        // columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default DataTable;

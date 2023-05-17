import React from "react";

const AddPrograms = () => {
  return (
    <div className="add_programs">
      <form
        action="http://localhost:8080/api/imedia-programs"
        method="POST"
        encType="multipart/form-data"
      >
        <div>
          <input type="file" name="pic" />
        </div>
        <div>
          <input type="text" name="program" />
          <input type="text" name="desc" />
        </div>
        <button type="submit">Create Program </button>
      </form>
    </div>
  );
};

export default AddPrograms;

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { getAllUsers } from "../../Axios/UserService";

const TableUsers = () => {
  const [listUsers, setListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const getUsers = async (page) => {
    const res = await getAllUsers(page);
    if (res && res.data) {
      setListUsers(res.data);
      setTotalUsers(res.total);
      setTotalPages(res.total_pages);
    }
  };

  const handleChange = (e) => {
    getUsers(+e.selected + 1);
  };

  useEffect(() => {
    getUsers(1);
  }, []);
  return (
    <>
      <div
        className="my-3 add-new"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <span>List Users: </span>
        <button className="btn btn-success">Add new user</button>
      </div>

      <div className="col-4 my-3">
        <input className="form-control" placeholder="Search user by email..." />
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>ID</span>
                <span>
                  <i
                    className="fa-solid fa-arrow-down-long"
                    style={{ cursor: "pointer" }}
                  ></i>
                  <i
                    className="fa-solid fa-arrow-up-long"
                    style={{ cursor: "pointer" }}
                  ></i>
                </span>
              </div>
            </th>
            <th>
              <span>Email</span>
            </th>
            <th>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>First Name</span>
                <span>
                  <i
                    className="fa-solid fa-arrow-down-long"
                    style={{ cursor: "pointer" }}
                  ></i>
                  <i
                    className="fa-solid fa-arrow-up-long"
                    style={{ cursor: "pointer" }}
                  ></i>
                </span>
              </div>
            </th>
            <th>
              <span>Last Name</span>
            </th>
            <th>
              <span>Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handleChange}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
};

export default TableUsers;

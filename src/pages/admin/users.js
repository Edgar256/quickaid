import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Spinner } from "react-bootstrap";

export default function index() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getAllUsers = async () => {
    try {
      axiosClient.get("/api/admins/getAllUsers").then((res) => {
        setUsers([...res.data.message]);
        return setIsLoading(false);
      });
    } catch (error) {
      setError("Error loading admins data");
      return setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h3 className="h2">Users</h3>
            </div>

            <div className="table-responsive small">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Date Created</th>
                    <th scope="col">Date Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading && (
                    <tr>
                      <td colSpan={5}>
                        <Spinner className="text-warning text-center mx-auto" />
                      </td>
                    </tr>
                  )}
                  {users.length > 0 ? (
                    <>
                      {users.map((elem, index) => {
                        return (
                          <tr key={elem.id}>
                            <td>{index + 1}</td>
                            <td>{elem.name}</td>
                            <td>{moment(elem.createdAt).format("LLLL")}</td>
                            <td>{moment(elem.updatedAt).format("LLLL")}</td>
                            <td>{elem.isActivated ? "ACTIVE" : "DEACTIVE"}</td>
                          </tr>
                        );
                      })}
                    </>
                  ) : (
                    <>No Patients found</>
                  )}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}

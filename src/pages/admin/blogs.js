import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import axiosClient from "../../../axiosClient";
import { Spinner } from "react-bootstrap";
import moment from "moment";

export default function index() {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getAllCategories = async () => {
    try {
      axiosClient.get("/api/admins/getAllBlogCategories").then((res) => {
        setCategories([...res.data.message]);
        return setIsLoading(false);
      });
    } catch (error) {
      setError("Error loading admins data");
      return setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {}, []);

  const handleCreateCategory = async (e) => {
    try {
      e.preventDefault();
      if (!name) {
        return setCategoryError("Please add category name");
      }
      const payload = { name };
      setIsLoading(true);
      axiosClient
        .post("/api/admins/createBlogCategory", payload)
        .then((res) => {
          getAllCategories();
          return setName("");
        })
        .catch((err) => {
          return;
        });
    } catch (error) {}
  };

  return (
    <main>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h3 className="h2">Blogs</h3>
            </div>
            <div>
              {categoryError && (
                <div className="alert alert-danger text-center">
                  {categoryError}
                </div>
              )}
              <form className="d-flex" onSubmit={handleCreateCategory}>
                <div className="form-floating my-0 flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Enter category name</label>
                </div>
                {isLoading ? (
                  <Spinner className="text-warning" />
                ) : (
                  <button className="btn btn-success py-0 my-2">
                    Create Category
                  </button>
                )}
              </form>
            </div>

            <div className="table-responsive small">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date Created</th>
                    <th scope="col">Date Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={5}>
                        <Spinner className="text-warning text-center mx-auto" />
                      </td>
                    </tr>
                  ) : (
                    <>
                      {categories.length > 0 ? (
                        <>
                          {categories.map((elem, index) => {
                            return (
                              <tr key={elem.id}>
                                <td>{index + 1}</td>
                                <td>{elem.name}</td>
                                <td>{moment(elem.createdAt).format("LLLL")}</td>
                                <td>{moment(elem.updatedAt).format("LLLL")}</td>
                              </tr>
                            );
                          })}
                        </>
                      ) : (
                        <tr>
                          <td colSpan={5} className="text-center">
                            No Categories found
                          </td>
                        </tr>
                      )}
                    </>
                  )}
                </tbody>
              </table>
            </div>

            <form className="d-flex" onSubmit={handleCreateCategory}>
                <div className="form-floating my-0 flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Enter category name</label>
                </div>
                {isLoading ? (
                  <Spinner className="text-warning" />
                ) : (
                  <button className="btn btn-success py-0 my-2">
                    Create Category
                  </button>
                )}
              </form>


          </main>
        </div>
      </div>
    </main>
  );
}

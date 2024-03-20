import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import axiosClient from "../../../axiosClient";
import { Spinner } from "react-bootstrap";
import moment from "moment";
import dynamic from "next/dynamic";
import parser from "html-react-parser";

var Editor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});

export default function index() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getAllBlogs = async () => {
    try {
      axiosClient.get("/api/admins/getAllBlogs").then((res) => {
        console.log(res.data.message);
        setBlogs([...res.data.message]);
        return setIsLoading(false);
      });
    } catch (error) {
      setError("Error loading blogs data");
      return setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

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
            {error && (
              <div className="alert alert-danger text-center">{error}</div>
            )}
            <div className="d-flex flex-wrap">
              {isLoading ? (
                <Spinner className="text-warning mx-auto" />
              ) : (
                <>
                  {blogs.length > 0 ? (
                    <>
                      {blogs.map((elem) => {
                        return (
                          <div className="col-6 p-2" key={elem.id}>
                            <div className="bg-light p-2 rounded shadow-sm">
                              <h4>{elem.title}</h4>
                              <p className="my-0">
                                <small>
                                  <i>
                                    Posted:{" "}
                                    {moment(elem.createdAt).format("LLLL")}
                                  </i>
                                </small>
                              </p>
                              <p className="fw-blod">{elem?.category?.name}</p>
                              <>{parser(elem.content)}</>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <h3 className="text-center">No blogs found</h3>
                    </>
                  )}
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}

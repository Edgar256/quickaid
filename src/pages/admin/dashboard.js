import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function index() {
  const options = {
    maintainAspectRatio: false, // Set to false to allow manual adjustment of aspectRatio
    aspectRatio: 100, // Set the desired aspect ratio (width:height)
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        // Use 'category' scale for the x-axis
        type: "category",
      },
    },
    // barThickness: 150,
  };

  return (
    <main>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h3 className="h2">Dashboard</h3>
            </div>

            <div className="row p-1">
              <div className="col-md-6 col-12 p-1">
                <div className="p-2 shadow-sm rounded border">
                  <h5>Users</h5>
                  <h6 className="text-success">+12%</h6>
                  <div className="m-2" style={{ height: "400px" }}>
                    <Line
                      datasetIdKey="id"
                      data={{
                        labels: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ],
                        datasets: [
                          {
                            id: 1,
                            label: "",
                            data: [5, 6, 7, 20, 2, 3, 4, 0, 12, 2, 34, 15],
                          },
                        ],
                      }}
                      options={{
                        maintainAspectRatio: false, // Set to false to allow manual adjustment of aspectRatio
                        aspectRatio: 100, // Set the desired aspect ratio (width:height)
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 p-1">
                <div className="p-2 shadow-sm rounded border">
                  <h5>FirstAid Requests</h5>
                  <h6 className="text-success">+12%</h6>
                  <div className="m-2" style={{ height: "400px" }}>
                    <Bar
                      data={{
                        labels: [
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                        ],
                        datasets: [
                          {
                            label: "Sales",
                            data: [65, 59, 80, 81, 56, 55, 40],
                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                            borderColor: "rgba(255, 99, 132, 1)",
                            borderWidth: 1,
                          },
                        ],
                      }}
                      options={options}
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}

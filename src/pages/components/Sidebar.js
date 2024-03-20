import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary text-dark">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Admin Dashboard
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2 active"
                aria-current="page"
                href="/admin/dashboard"
              >
                <i className="bi bi-speedometer"></i>
                Dashboard
              </Link>
            </li>
          </ul>

          <hr className="my-2" />

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>USER MANAGEMENT</span>
            <a
              className="link-secondary"
              href="#"
              aria-label="Add a new report"
            >
              <i class="bi bi-plus-circle-fill"></i>
            </a>
          </h6>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2"
                href="/admin/users"
              >
                <i class="bi bi-people-fill"></i>
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2"
                href="/admin/staff"
              >
                <i class="bi bi-person-bounding-box"></i>
                Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2"
                href="/admin/admins"
              >
                <i class="bi bi-person-circle"></i>
                Admins
              </Link>
            </li>
          </ul>

          <hr className="my-2" />

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>MODULE MANAGEMENT</span>
            <a
              className="link-secondary"
              href="#"
              aria-label="Add a new report"
            >
              <i class="bi bi-plus-circle-fill"></i>
            </a>
          </h6>

          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2"
                href="/admin/requests"
              >
                <i class="bi bi-folder-symlink-fill"></i>
                FirstAid Requests
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2"
                href="/admin/blogs"
              >
                <i class="bi bi-book-half"></i>
                Blogs
              </Link>
            </li>
          </ul>
          <hr className="my-2" />
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <Link
                className="nav-link d-flex align-items-center gap-2"
                href="/"
              >
                <i class="bi bi-box-arrow-left"></i>
                SignOut
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

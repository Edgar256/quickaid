import React from "react";

export default function Header() {
  return (
    <header
      className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow"
      data-bs-theme="dark"
    >
      <a
        className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
        href="#"
      >
        Admin Dashboard
      </a>

      <ul className="navbar-nav flex-row d-md-none">
        <li className="nav-item text-nowrap">
          <button
            className="nav-link px-3 text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-list text-white"></i>
          </button>
        </li>
      </ul>
    </header>
  );
}

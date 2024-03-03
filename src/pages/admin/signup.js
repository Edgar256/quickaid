import React from 'react';

export default function index() {
  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form>
          {/* <img
            className="mb-4"
            src="../assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          /> */}
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating my-2">
            <input
              type="text"
              className="form-control"
            />
            <label for="floatingInput">Full Names</label>
          </div>

          <div className="form-floating my-2">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating my-2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <label for="floatingPassword">Confirm Password</label>
          </div>          
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign Up
          </button>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2024–2025</p>
        </form>
      </main>
    </>
  );
}

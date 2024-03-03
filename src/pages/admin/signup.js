import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function index() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!name) return setNameError('Please enter Full name');
      setNameError('');

      if (!email) return setEmailError('Please enter valid email');
      setEmailError('');

      if (!password) return setPasswordError('Please enter your password');
      if (password.length < 6)
        return setPasswordError('Password must be at least 6 characters');
      setPasswordError('');

      if (password !== confirmPassword)
        return setConfirmPasswordError('Passwords do not match');
      setConfirmPasswordError('');

      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        console.log({ name, email, password });
        setName('');
        setEmail('');
        setPassword('');
        setTimeout(() => {
          router.push('/admin/signin');
        }, 1200);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          <Link href="/" className="d-flex">
            <Image
              src="/images/logo.png"
              alt=""
              width="150"
              height="150"
              className="mx-auto"
              priority={false}
            />
          </Link>
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating my-2">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInput">Full Names</label>
            {nameError && (
              <div className="alert alert-danger pt-1">{nameError}</div>
            )}
          </div>

          <div className="form-floating my-2">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
            {emailError && (
              <div className="alert alert-danger pt-1">{emailError}</div>
            )}
          </div>
          <div className="form-floating my-2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
            {passwordError && (
              <div className="alert alert-danger pt-1">{passwordError}</div>
            )}
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
            {confirmPasswordError && (
              <div className="alert alert-danger pt-1">
                {confirmPasswordError}
              </div>
            )}
          </div>
          {isLoading ? (
            <div className="d-flex">
              <Spinner className="text-warning mx-auto" />
            </div>
          ) : (
            <button className="btn btn-success w-100 py-2" type="submit">
              Sign Up
            </button>
          )}

          <div className="mt-3">
            Already have account <Link href="/admin/signin">Signin</Link>
          </div>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2024–2025</p>
        </form>
      </main>
    </>
  );
}

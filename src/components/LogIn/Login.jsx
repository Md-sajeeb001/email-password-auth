import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../FireBaseInit/FireBaseinit";
import { useState } from "react";

const Login = () => {

  const [errorMessage, setErrorMessage] = useState("");

  const handelSubmitForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setErrorMessage('')

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);

      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage.message);
      });
  };

  return (
    <div className="hero bg-base-200 w-full">
      <div
        className="hero-content flex-col w-[50%] lg:flex-row-reverse
       "
      >
        <div className="card bg-base-100 w-full shadow-2xl">
          <h1 className="text-5xl text-center font-bold pt-8">Login now!</h1>

          <form onSubmit={handelSubmitForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;

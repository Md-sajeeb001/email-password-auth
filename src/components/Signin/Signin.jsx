import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../FireBaseInit/FireBaseinit";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [error, setError] = useState("");

  const [success, setSuccess] = useState(false);

  const handelSingInSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // reset
    setSuccess(false);
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sing in now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelSingInSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
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
                name="password"
                type="password"
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
          {error && <p className="text-red-500">{error}</p>}
          {success && (
            <p className="text-green-500">user sing is successfully</p>
          )}

          <p>already have an account? please <Link className="text-white" to="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;

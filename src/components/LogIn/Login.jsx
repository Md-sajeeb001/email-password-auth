import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../FireBaseInit/FireBaseinit";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handelSubmitForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    console.log(email, password, terms);

    setErrorMessage("");
    setSuccess(false);

    if (!terms) {
      setErrorMessage("Please accept terms and condition");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(result.user);
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute right-4 top-14"
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-start gap-2 cursor-pointer">
                <input type="checkbox" name="terms" className="checkbox" />
                <span className="label-text">
                  accept our terms and condition
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {success && (
            <p className="text-green-500">
              user email: add successful {success.email}
            </p>
          )}
          <p>
            new to the website ? please
            <Link className="text-white" to="/singin">
              Sing in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

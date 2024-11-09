import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../FireBaseInit/FireBaseinit";

const Register = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const address = e.target.address.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("ERROR",error);
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-2 gap-6 ">
          <div className="space-y-3">
            <label>Name:</label> <br />
            <input
              name="name"
              type="name"
              placeholder="your name"
              className="input input-bordered w-full"
              autoComplete="off"
            />
          </div>
          <div className="space-y-3">
            <label>Email:</label> <br />
            <input
              name="email"
              type="email"
              placeholder="your email"
              className="input input-bordered w-full"
              autoComplete="off"
            />
          </div>
          <div className="space-y-3">
            <label>Password:</label> <br />
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered w-full"
              autoComplete="off"
            />
          </div>
          <div className="space-y-3">
            <label>Address:</label> <br />
            <input
              name="address"
              type="address"
              placeholder="your address"
              className="input input-bordered w-full"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="pt-14">
          <textarea
            name="message"
            autoComplete="off"
            placeholder="message"
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>
        </div>
        <div className="pt-6 text-center">
          <button className="btn">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

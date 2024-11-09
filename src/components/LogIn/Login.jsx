const Login = () => {
  return (
    <div>
      <form method="POST">
        <div className="grid grid-cols-2 gap-6 ">
          <div className="space-y-3">
            <label>Name:</label> <br />
            <input
              name="name"
              type="text"
              placeholder="your name"
              className="input input-bordered w-full"
              autoComplete="off"
            />
          </div>
          <div className="space-y-3">
            <label>Email:</label> <br />
            <input
              name="email"
              type="text"
              placeholder="your email"
              className="input input-bordered w-full"
              autoComplete="off"
            />
          </div>
          <div className="space-y-3">
            <label>Password:</label> <br />
            <input
              name="password"
              type="text"
              placeholder="password"
              className="input input-bordered w-full"
              autoComplete="off"
            />
          </div>
          <div className="space-y-3">
            <label>Address:</label> <br />
            <input
              name="address"
              type="text"
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
          <button className="btn">Log in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

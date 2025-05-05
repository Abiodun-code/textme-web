import { Link } from "react-router-dom";
import { CustomButton, CustomInput } from "../../shared";
import { TopTitle } from "../../utils/TopTitle";

const Register = () => {
  
  TopTitle('Register - TaskMe');

  return (
    <div className="flex items-center xl:w-[90%] lg:w-[90%] xl:mx-auto lg:mx-auto justify-start my-auto overflow-y-scroll">
      <div className="xl:justify-start w-full xl:items-start mt-7">
        <div className="mb-[2rem]">
          <h1 className="font-inter text-[2rem] font-semibold leading-[3rem]">Register an account</h1>
          <p className="font-quick text-[1.2rem] font-medium text-gray-500">Start your journey with TaskMe</p>
        </div>

        <div>
          <div>
            <h2 className="font-league text-lg">Full Name</h2>
            <CustomInput
              placeholder="First Name"
              className="mb-6"
            />
          </div>

          <div>
            <h2 className="font-league text-lg">Username</h2>
            <CustomInput
              placeholder="Last Name"
              className="mb-6"
            />
          </div>

          <div>
            <h2 className="font-league text-lg">Email</h2>
            <CustomInput
              placeholder="Email"
              className="mb-6"
            />
          </div>

          <div>
            <h2 className="font-league text-lg">Password</h2>
            <CustomInput
              placeholder="Password"
              type="password"
              className="mb-6"
            />
          </div>

          <CustomButton className="mb-4">
            Register
          </CustomButton>

          <span className="text-[1.1rem] font-quick flex items-center justify-center gap-[.6rem] text-stone-400">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
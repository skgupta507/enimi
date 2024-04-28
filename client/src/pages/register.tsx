import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="auth_card border-r-muted bg-muted w-full hidden lg:block h-full border-r">
        {/* <img src="" alt="" /> */}
      </div>

      <div className="h-full flex flex-col justify-between items-center w-full">
        <div className="flex items-center justify-between w-full px-8">
            <div className="text-lg text-primary font-semibold">
                Enimi
            </div>

            <div className="">
                
            </div>
        </div>

        <div className=" w-full rounded border-muted px-8">
          <h1 className="text-5xl font-medium">Create an Account?</h1>
          <p className="text-muted-foreground text-sm">
            Creating an account on enimi will open features such as (currently
            watching etc.)
          </p>

          <div className="">
            <p className="text-muted-foreground">
              Already have an account?
              <Link
                to="/login"
                className="text-primary underline underline-offset-2 ml-1"
              >
                Login.
              </Link>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between"></div>
      </div>
    </>
  );
};
export default Register;
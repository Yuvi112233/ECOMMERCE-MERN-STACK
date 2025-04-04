import { Outlet } from "react-router-dom";
import bgImage from "@/assets/bg1.jpg"; // ✅ Import the image

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Background Image */}
      <div
        className="hidden lg:flex items-center justify-center w-1/2 px-12"
        style={{
          backgroundImage: `url(${bgImage})`, // ✅ Set the image as background
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to E-Commerce Shopping
          </h1>
        </div>
      </div>

      {/* Right Side - Login/Signup Form */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;

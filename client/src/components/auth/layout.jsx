import { Outlet } from "react-router-dom";
import Particles from "@/components/ui/Particles";
import bgImage from "@/assets/bg1.jpg";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Background Image with Particles */}
      <div className="hidden lg:flex relative w-1/2 items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Particles - Positioned Inside the Left Div */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <Particles
            particleColors={["#ffffff", "#cccccc"]}
            particleCount={500} // More particles
            particleSpread={20} // Wider spread
            speed={0.1}
            particleBaseSize={120} // Bigger particles
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

        {/* Centered Text with Proper Positioning */}
        <div className="relative z-20 text-center text-white max-w-md">
          <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-lg">
            Welcome to <br /> E-Commerce Shopping
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

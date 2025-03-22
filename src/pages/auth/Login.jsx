import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Login = () => {
  const handleConnect = async (e) => {
    e.preventDefault();
    try {
      const serverUrl = import.meta.env.VITE_REACT_APP_SERVER_URL;
      if (!serverUrl) return alert("server url not found");
      const response = await axios.get(`${serverUrl}/get-url`, {
        withCredentials: true,
      });
      window.open(response?.data?.authUrl, "_blank");
    } catch (error) {
      console.log("server url not found", error);
    }
  };
  return (
    <section
      className={`w-full h-svh md:h-screen overflow-y-scroll scroll-0 bg-[#f0f0f0] md:bg-[url('https://res.cloudinary.com/hamzanafasat/image/upload/v1742559578/hymhem1uuburthm3aewg.png')]  bg-contain bg-no-repeat bg-left`}
    >
      <section className="container mx-auto px-5 py-8 md:py-14 w-full h-full grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-6 hidden lg:block"></div>
        <div className="lg:col-span-6 grid place-items-center">
          <div className="w-full rounded-lg py-5 px-4">
            <h6 className="text-center text-gray-950 text-xl md:text-2xl font-semibold">Login</h6>
            <form className="mt-5 rounded-lg max-w-[500px] mx-auto grid grid-cols-1 gap-4">
              <button
                onClick={handleConnect}
                className="flex items-center justify-center gap-4 w-full mx-auto h-[50px] px-4 rounded-md shadow-lg bg-white cursor-pointer font-medium"
              >
                <FcGoogle fontSize={24} />
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;

import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleConnect = (e) => {
    e.preventDefault();
    const clientId = import.meta.env.VITE_REACT_APP_NYLAS_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_REACT_APP_NYLAS_REDIRECT_URI;
    console.log(clientId, redirectUri);
    const codeChallenge = "nylas";
    const authUrl = `https://api.us.nylas.com/v3/connect/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=code&code_challenge=${codeChallenge}&code_challenge_method=plain`;

    window.open(authUrl, "_blank");
  };
  return (
    <section className="w-full h-svh md:h-screen overflow-y-scroll scroll-0 bg-[#f0f0f0] md:bg-[url('../../../src/assets/images/authimage.png')] bg-contain bg-no-repeat bg-left">
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

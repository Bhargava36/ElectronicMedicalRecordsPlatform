import { useState } from "react";

function Patientloginpage() {
  const [patientId, setPatientId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (patientId === "" || password === "") {
      setMessage("Please enter all details");
    } else {
      setMessage("Login form submitted successfully!");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url()] p-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

        {/* Logo */}
        <div className="text-center mb-6">
          <div className="text-4xl text-teal-600">✚</div>
          <h2 className="text-2xl font-bold text-teal-700">
            CareSync EMR
          </h2>
          <p className="text-sm text-gray-500">
            Electronic Medical Records Platform
          </p>
        </div>

        {/* Welcome */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back!
          </h1>
          <p className="text-gray-500 mt-2">
            Sign in to access your health records.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>

          {/* Patient ID */}
          <label className="block mb-2 font-medium text-gray-700">
            Email / Patient ID
          </label>

          <input
            type="text"
            placeholder="Enter your email or Patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className="w-full p-3 mb-5 border rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          {/* Password */}
          <label className="block mb-2 font-medium text-gray-700">
            Password
          </label>

          <div className="relative mb-5">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pr-16 border rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-teal-700 font-medium"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Remember and Forgot Password */}
          <div className="flex items-center justify-between gap-2 mb-6 text-sm">

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-teal-600"
              />
              Remember me
            </label>

            <button
              type="button"
              onClick={() =>
                setMessage("Please connect your password reset page.")
              }
              className="text-teal-700 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg font-semibold hover:bg-teal-700"
          >
            Login
          </button>

          {/* Message */}
          {message && (
            <p className="text-center text-sm text-teal-700 mt-4">
              {message}
            </p>
          )}

        </form>

        {/* Registration */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() =>
              setMessage("Please connect your registration page.")
            }
            className="text-teal-700 font-semibold hover:underline"
          >
            Create Account
          </button>
        </p>

        {/* Security */}
        <div className="border-t mt-6 pt-5 text-center">
          <p className="text-sm text-gray-500">
            🔒 Your health information is private and secure.
          </p>

          <p className="mt-4 text-sm">
            Need help?{" "}
            <a
              href="mailto:support@example.com"
              className="text-teal-700 hover:underline"
            >
              Help &amp; Support
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Patientloginpage;
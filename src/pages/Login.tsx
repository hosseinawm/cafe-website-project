import { useState, FormEvent } from "react";
import axiosInstance from "../api/axios";

interface ErrorResponse {
  email?: string[];
  code?: string[];
}

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<ErrorResponse>({});
  const [code, setCode] = useState<string>("");
  const [showOtpInput, setShowOtpInput] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [verifying, setVerifying] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const res = await axiosInstance.post("/send-otp/", { email });
      if (res.data.success) {
        setShowOtpInput(true);
      } else {
        setErrors(res.data.data || {});
        console.log(errors);
      }
    } catch (err: any) {
      console.error("Login error:", err);

      if (err.response && err.response.data?.data) {
        setErrors(err.response.data.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    setVerifying(true);

    try {
      const res = await axiosInstance.post("/verify-otp/", { email, code });

      if (res.data.success) {
        const { access, refresh } = res.data.data;

        // Store tokens
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);

        // Redirect to home or dashboard
        window.location.href = "/";
      } else {
        setErrors(res.data.data || {});
      }
    } catch (err: any) {
      if (err.response && err.response.data.data) {
        setErrors(err.response.data.data);
      }
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 transition-all duration-300 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium  text-gray-700 mb-1"
            >
              E-mail
            </label>

            <input
              type="text"
              name="email"
              id="email"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none transition duration-200 
                ${
                  errors.email
                    ? "border-red-500 focus:ring-red-400 focus:border-red-500"
                    : "border-gray-300 focus:ring-amber-400 focus:border-amber-500"
                }`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-amber-600 hover:bg-amber-700"
            }`}
          >
            {loading ? "Sending..." : "Send Code"}
          </button>

          {showOtpInput && (
            <>
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  OTP Code
                </label>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  placeholder="Enter the code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none duration-200 ${
                    errors.code
                      ? "border-red-500 focus:ring-red-400 focus:border-red-500"
                      : "border-gray-300 focus:ring-amber-400 focus:border-amber-500"
                  }`}
                />
                {errors.code && (
                  <p className="text-red-500 text-sm mt-1">{errors.code[0]}</p>
                )}
              </div>

              <button
                onClick={handleVerify}
                disabled={verifying}
                className={`w-full text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md ${
                  verifying
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-cyan-900 hover:bg-cyan-950"
                }`}
              >
                {verifying ? "Verifying..." : "Verify Code"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

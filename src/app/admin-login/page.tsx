"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Import js-cookie

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLoggedIn = Cookies.get("admin_logged_in"); // Use cookies instead
      if (isLoggedIn) {
        router.push("/dashboard");
      }
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      credentials.username === "admin" &&
      credentials.password === "scalex25"
    ) {
      Cookies.set("admin_logged_in", "true", { expires: 1 }); // Set cookie for 1 day
      router.push("/dashboard");
      alert("Login successful!");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br to-black-950">
      <div className="bg-black-950 p-8 rounded-xl shadow-lg w-80 border border-yellow-400 text-center">
        <h2 className="text-xl font-semibold text-yellow-400 mb-4">
          Admin Login
        </h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full p-2 border rounded border-yellow-400 outline-none bg-black-900 text-white placeholder-gray-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-2 border rounded border-yellow-400 outline-none bg-black-900 text-white placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black-950 font-semibold py-2 rounded hover:bg-yellow-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

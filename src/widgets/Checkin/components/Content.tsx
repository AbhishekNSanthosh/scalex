"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { get, ref, update } from "firebase/database";
import { db } from "../../../common/config/firebaseConfig";

interface FormData {
  serialNumber: string;
}

export default function Content() {
  const [formData, setFormData] = useState<FormData>({ serialNumber: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const confirmCheckIn = async () => {
    setLoading(true);
    const serialNo = formData.serialNumber.trim();
    if (!serialNo) {
      setMessage("❌ Serial Number is required!");
      setLoading(false);
      return;
    }
    console.log(serialNo);

    try {
      const participantsRef = ref(db, "participants");
      const snapshot = await get(participantsRef);
      console.log("snapshot", snapshot);
      if (snapshot.exists()) {
        const participants = snapshot.val(); // Get all participants
        console.log("participants",participants)
        const participantIndex = Object.keys(participants).find(
          (key) => participants[key].serialNo === serialNo
        );

        console.log(participantIndex);
        if (participantIndex !== undefined) {
          // Update the found participant's check-in status
          await update(ref(db, `participants/${participantIndex}`), {
            checkedin: true,
          });

          setMessage("✅ Check-in successful!");
        } else {
          setMessage("❌ Serial Number not found!");
        }
      } else {
        setMessage("❌ No participants found!");
      }
    } catch (error) {
      console.error("Firebase Error:", error);
      setMessage("❌ Error checking in!");
    }

    setLoading(false);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-md space-y-4 h-screen flex flex-col items-center justify-center">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          height={1000}
          width={1000}
          className="w-[7rem]"
        />
      </Link>
      <h2 className="text-xl font-semibold">Check-in Form</h2>

      {message && <p className="text-red-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-3 w-full">
        <input
          type="text"
          name="serialNumber"
          placeholder="Serial Number"
          value={formData.serialNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded border-black-900 outline-yellow-400 bg-black-950"
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black-950 font-semibold py-2 rounded hover:bg-blue-700"
        >
          Check In
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 w-screen bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center">
          <div className="bg-black-950 gap-2 p-6 rounded-lg shadow-lg text-center border border-yellow-400 flex flex-col items-center">
            <FaCircleExclamation className="text-red-400 text-[40px]" />
            <p className="text-lg font-semibold">
              Are you sure you want to confirm?
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={confirmCheckIn}
                className={`bg-yellow-400 text-black-950 font-semibold px-4 py-2 rounded hover:bg-yellow-500 flex items-center space-x-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Processing..." : "Yes"}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="border-yellow-400 border text-white font-semibold px-4 py-2 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { get, ref, update } from "firebase/database";
import { db } from "../../../common/config/firebaseConfig";

const SERIAL_PREFIX = "SCALEX/CCET/"; // Non-editable prefix

interface FormData {
  serialNumber: string;
}

interface Participant {
  member1?: string;
  collegeName?: string;
  member2?: string;
  member3?: string;
  email: string;
  teamName: string;
  checkedin: boolean;
}

export default function Content() {
  const [formData, setFormData] = useState<FormData>({ serialNumber: "" });
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [participantKey, setParticipantKey] = useState<string | null>(null);
  const [fetching, setFetching] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ serialNumber: e.target.value });
    setMessage(null); // Clear message on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serialNo = SERIAL_PREFIX + formData.serialNumber.trim();

    if (!formData.serialNumber.trim()) {
      setMessage("❌ Serial Number is required!");
      return;
    }

    setFetching(true);
    setMessage(null); // Reset message
    try {
      const participantsRef = ref(db, "participants");
      const snapshot = await get(participantsRef);
      if (snapshot.exists()) {
        const participants = snapshot.val();

        const participantIndex = Object.keys(participants).find(
          (key) => participants[key].serialNo === serialNo
        );

        if (participantIndex) {
          setParticipant(participants[participantIndex]);
          setParticipantKey(participantIndex);
        } else {
          setParticipant(null);
          setMessage("❌ Serial Number not found!");
        }
      } else {
        setMessage("❌ No participants found!");
      }
    } catch (error) {
      console.error("Firebase Error:", error);
      setMessage("❌ Error fetching details!");
    }
    setFetching(false);
  };

  const confirmCheckIn = async () => {
    if (!participantKey) return;
    setLoading(true);

    try {
      await update(ref(db, `participants/${participantKey}`), {
        checkedin: true,
      });

      setMessage(
        "✅ Check-in successful! You can collect your goodies from the goodies counter."
      );
      setShowMsg(true);
      setParticipant((prev) => (prev ? { ...prev, checkedin: true } : null));
    } catch (error) {
      console.error("Firebase Error:", error);
      setMessage("❌ Error during check-in!");
    }

    setLoading(false);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto rounded-xl shadow-md space-y-4 min-h-screen flex flex-col items-center justify-center">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          height={1000}
          width={1000}
          className="w-[7rem]"
        />
      </Link>
      {message && <p className="text-green-400 text-center">{message}</p>}
      {showMsg && (
        <div className="text-center bg-black-950 text-gray-300 p-6 rounded-lg shadow-lg border border-yellow-400 animate-fade-in transition-all duration-500 ease-in-out hover:shadow-yellow-400/50">
          <h3 className="text-xl font-semibold text-yellow-400 drop-shadow-md">
            Welcome, {participant?.teamName}!
          </h3>
          <p className="mt-2 text-lg">
            You are now part of{" "}
            <span className="font-semibold text-yellow-400 bg-clip-text text-transparent">
              ScaleX
            </span>
            , where innovation meets scalability.
          </p>
          <p className="mt-2 text-base text-gray-400">
            Wishing you an inspiring journey ahead—collaborate, innovate, and
            make an impact!
          </p>
          <p className="mt-4 font-medium text-yellow-500 italic">
            — Team ScaleX
          </p>
        </div>
      )}

      {!showMsg && (
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-xl font-semibold">Check-in Form</h2>

          <form onSubmit={handleSubmit} className="space-y-3 w-full">
            <div className="w-full flex flex-col">
              <div className="w-full flex items-center border border-yellow-400 rounded bg-black-950 outline outline-2 outline-yellow-400">
                <span className="pl-3 py-2 bg-black-950 text-white rounded-l">
                  {SERIAL_PREFIX}
                </span>
                <input
                  type="text"
                  name="serialNumber"
                  placeholder="Enter last digits (e.g., 101)"
                  value={formData.serialNumber}
                  onChange={handleChange}
                  className="flex-1 p-2 bg-black-950 text-white rounded-r outline-none"
                  required
                  disabled={fetching}
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Serial number is provided in the Google Sheet shared.{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1wzaOU25fX7dC3pSBLXbvk-DIZny5pTUa45DNSgVRDFA/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 underline"
                >
                  Click here
                </a>
                .
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black-950 font-semibold py-2 rounded hover:bg-yellow-500"
              disabled={fetching}
            >
              {fetching ? "Fetching..." : "Get Details"}
            </button>
          </form>

          {participant && (
            <div className="w-full bg-black-950 p-6 rounded-xl mt-4 text-white border border-yellow-400 shadow-lg">
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-gray-300">Team:</span>{" "}
                  {participant.teamName}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">College:</span>{" "}
                  {participant.collegeName}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Member 1:</span>{" "}
                  {participant?.member1}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Member 2:</span>{" "}
                  {participant?.member2}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Member 3:</span>{" "}
                  {participant?.member3}
                </p>
                <p className="flex items-center">
                  <span className="font-semibold text-gray-300">Status:</span>
                  <span
                    className={`ml-2 font-medium ${
                      participant.checkedin ? "text-green-400" : "text-red-500"
                    }`}
                  >
                    {participant.checkedin
                      ? "✅ Checked-in"
                      : "❌ Not Checked-in"}
                  </span>
                </p>
              </div>

              {!participant.checkedin && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-yellow-400 text-black-950 font-semibold py-2 rounded-lg mt-4 transition duration-300 hover:bg-green-500"
                >
                  Check-in
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {isModalOpen && (
        <div
          className="fixed inset-0 w-screen bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center"
          role="dialog"
          aria-labelledby="check-in-confirmation"
        >
          <div className="bg-black-950 gap-2 p-6 rounded-lg shadow-lg text-center border border-yellow-400 flex flex-col items-center">
            <FaCircleExclamation className="text-red-400 text-[40px]" />
            <p id="check-in-confirmation" className="text-lg font-semibold">
              Are you sure you want to confirm check-in?
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={confirmCheckIn}
                className={`bg-yellow-400 text-black-950 font-semibold px-4 py-2 rounded ${
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
      <div className="absolute bottom-4">Made with 💛 by Scalex</div>
    </div>
  );
}

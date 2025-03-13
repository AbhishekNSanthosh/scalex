"use client";

import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../../common/config/firebaseConfig";

export default function DashboardPage() {
  const [participants, setParticipants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkinCount, setCheckinCount] = useState(0); // Track checked-in count

  // 📌 Fetch Participants from Firebase
  useEffect(() => {
    const participantsRef = ref(db, "participants");

    onValue(participantsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const participantsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setParticipants(participantsArray);

        // ✅ Count checked-in participants
        const checkedIn = participantsArray.filter((p) => p.checkedin).length;
        setCheckinCount(checkedIn);
      } else {
        setParticipants([]);
        setCheckinCount(0);
      }
      setLoading(false);
    });
  }, []);

  console.log(participants);

  return (
    <div className="p-3 bg-gray-950 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Participants List</h2>

      {/* ✅ Check-in count display */}
      <div className="mb-3 text-lg font-semibold text-yellow-400">
        Checked in: {checkinCount}
      </div>

      {loading ? (
        <p className="text-gray-400">Loading participants...</p>
      ) : participants.length === 0 ? (
        <p className="text-gray-400">No participants found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-600 rounded-md">
            <thead className="bg-black-950 text-gray-600">
              <tr>
                <th className="px-4 py-2 border border-black-900">ID</th>
                <th className="px-4 py-2 border border-black-900">Name</th>
                <th className="px-4 py-2 border border-black-900">Member 1</th>
                <th className="px-4 py-2 border border-black-900">Member 2</th>
                <th className="px-4 py-2 border border-black-900">Member 3</th>
                <th className="px-4 py-2 border border-black-900">
                  Checked In
                </th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant) => (
                <tr
                  key={participant.id}
                  className={`${
                    participant.checkedin ? "bg-yellow-500 text-black-950" : "bg-black-950 text-gray-500"
                  } hover:bg-gray-700`}
                >
                  <td className="px-4 py-2 border border-black-900">
                    {participant.serialNo}
                  </td>
                  <td className="px-4 py-2 border border-black-900">
                    {participant.teamName}
                  </td>
                  <td className="px-4 py-2 border border-black-900">
                    {participant.member1}
                  </td>
                  <td className="px-4 py-2 border border-black-900">
                    {participant.member2}
                  </td>
                  <td className="px-4 py-2 border border-black-900">
                    {participant.member3}
                  </td>
                  <td className="px-4 py-2 border border-black-900">
                    {participant.checkedin ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

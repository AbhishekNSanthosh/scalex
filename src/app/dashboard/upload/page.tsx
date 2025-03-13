"use client";

import React, { useState } from "react";
import Papa from "papaparse";
import { getDatabase, ref, set } from "firebase/database";
import { db } from "../../../common/config/firebaseConfig";
export default function Page() {
  const [csvData, setCsvData] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        // ✅ Add "checkedin: false" to each participant entry
        const formattedData = result.data.map((entry: any) => ({
          ...entry,
          checkedin: false, // Default value
        }));
  
        setCsvData(formattedData);
        console.log("Parsed CSV Data:", formattedData);
      },
      error: (err) => console.error("CSV Parsing Error:", err),
    });
  };
  
  // 📌 Upload Data to Firebase
  const uploadToFirebase = async () => {
    if (!csvData.length) return alert("No data to upload!");
  
    setUploading(true);
    try {
      await set(ref(db, "participants"), csvData);
      setMessage("✅ Data uploaded successfully!");
    } catch (error) {
      setMessage("❌ Error uploading data.");
      console.error("Upload Error:", error);
    }
    setUploading(false);
  };
  

  return (
    <div className="p-6 max-w-lg mx-auto bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload CSV & Save to Firebase</h2>

      {/* CSV File Input */}
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg cursor-pointer p-2"
      />

      {/* Upload Button */}
      <button
        onClick={uploadToFirebase}
        disabled={uploading}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload to Firebase"}
      </button>

      {/* Message Display */}
      {message && <p className="mt-4 text-green-400">{message}</p>}
    </div>
  );
}

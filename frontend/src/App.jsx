import { useState, useEffect } from "react";
import QuotePage from "./pages/QuotePage";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <QuotePage />
    </div>
  );
}

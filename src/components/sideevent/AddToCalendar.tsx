"use client";

export function AddToCalendar() {
  const handleDownload = () => {
    const event = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Quantum Hub//Event//EN",
      "BEGIN:VEVENT",
      "DTSTART:20260317T070000Z",
      "DTEND:20260317T103000Z",
      "SUMMARY:Autonomy in Motion: from AVs to humanoids",
      "DESCRIPTION:Hosted by Quantum Hub together with Hyundai and in partnership with Maniv. An exclusive side event exploring autonomous mobility\\, AI\\, and dual-use technologies.",
      "LOCATION:Peres Center for Peace and Innovation\\, Tel Aviv",
      "URL:https://luma.com/nahsqvhw",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([event], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "quantum-hub-side-event.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-text-secondary transition-all hover:border-white/20 hover:text-text-primary hover:bg-white/[0.04]"
    >
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      Add to Calendar
    </button>
  );
}

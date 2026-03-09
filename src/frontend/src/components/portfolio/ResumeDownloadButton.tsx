import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { useAssetAvailability } from "../../hooks/useAssetAvailability";

// Direct link to the publicly hosted resume PDF
const RESUME_DOWNLOAD_URL = "/assets/Hamza-Ali-Arshad-Resume.pdf";

export default function ResumeDownloadButton() {
  const { isAvailable, isChecking } = useAssetAvailability(RESUME_DOWNLOAD_URL);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Fetch the PDF as a blob
      const response = await fetch(RESUME_DOWNLOAD_URL);
      if (!response.ok) {
        throw new Error("Failed to download resume");
      }

      const blob = await response.blob();

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element and trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = "Hamza-Ali-Arshad-Resume.pdf"; // triggers download with clean filename
      document.body.appendChild(a);
      a.click();

      // Cleanup
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  if (isChecking) {
    return (
      <Button size="lg" variant="outline" disabled>
        <Download className="mr-2 h-4 w-4" />
        Loading...
      </Button>
    );
  }

  if (!isAvailable) {
    return (
      <Button size="lg" variant="outline" disabled title="Resume not available">
        <Download className="mr-2 h-4 w-4" />
        Resume Unavailable
      </Button>
    );
  }

  return (
    <Button
      size="lg"
      variant="outline"
      onClick={handleDownload}
      disabled={isDownloading}
    >
      <Download className="mr-2 h-4 w-4" />
      {isDownloading ? "Downloading..." : "Download Resume"}
    </Button>
  );
}

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAssetAvailability } from '../../hooks/useAssetAvailability';

// Backend HTTP download route for the resume
const RESUME_DOWNLOAD_URL = '/download/Hamza-Ali-Arshad-Resume-20251211-(1).pdf';

export default function ResumeDownloadButton() {
  const { isAvailable, isChecking } = useAssetAvailability(RESUME_DOWNLOAD_URL);

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
    <Button size="lg" variant="outline" asChild>
      <a href={RESUME_DOWNLOAD_URL} download="Hamza-Ali-Arshad-Resume.pdf">
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </a>
    </Button>
  );
}

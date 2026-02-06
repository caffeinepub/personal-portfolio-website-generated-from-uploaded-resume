import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAssetAvailability } from '../../hooks/useAssetAvailability';

const RESUME_PATH = '/assets/resume/Hamza-Ali-Arshad-Resume-20251211-(1).pdf';

export default function ResumeDownloadButton() {
  const { isAvailable, isChecking } = useAssetAvailability(RESUME_PATH);

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
      <a href={RESUME_PATH} download>
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </a>
    </Button>
  );
}

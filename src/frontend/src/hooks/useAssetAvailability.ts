import { useEffect, useState } from 'react';

export function useAssetAvailability(assetPath: string) {
  const [isAvailable, setIsAvailable] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const checkAsset = async () => {
      try {
        // Try HEAD request first
        let response = await fetch(assetPath, { method: 'HEAD' });
        
        // If HEAD is not supported (405 Method Not Allowed) or fails, try GET with range
        if (!response.ok && response.status === 405) {
          // Fallback to a minimal GET request with range header to check availability
          response = await fetch(assetPath, { 
            method: 'GET',
            headers: { 'Range': 'bytes=0-0' }
          });
        }
        
        if (!cancelled) {
          // Check if response is OK and content-type indicates a PDF
          const contentType = response.headers.get('content-type');
          const isPdf = contentType ? (contentType.includes('application/pdf') || contentType.includes('application/octet-stream')) : false;
          setIsAvailable(response.ok && isPdf);
          setIsChecking(false);
        }
      } catch {
        if (!cancelled) {
          setIsAvailable(false);
          setIsChecking(false);
        }
      }
    };

    checkAsset();

    return () => {
      cancelled = true;
    };
  }, [assetPath]);

  return { isAvailable, isChecking };
}

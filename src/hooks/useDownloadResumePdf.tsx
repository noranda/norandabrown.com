import {useCallback, useState} from 'react';

import {PDF_META} from '@/data/resumePdf';
import {useGamification} from '@/hooks/useGamification';

export const useDownloadResumePdf = () => {
  const {unlockAchievement} = useGamification();
  const [downloading, setDownloading] = useState(false);

  const download = useCallback(async () => {
    setDownloading(true);
    try {
      const [{pdf}, {ResumePdf}] = await Promise.all([
        import('@react-pdf/renderer'),
        import('@/components/resume/pdf'),
      ]);
      const blob = await pdf(<ResumePdf />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = PDF_META.fileName;
      a.click();
      URL.revokeObjectURL(url);
      unlockAchievement('recruiterDelight');
    } finally {
      setDownloading(false);
    }
  }, [unlockAchievement]);

  return {download, downloading};
};

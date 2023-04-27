'use client';

import { FastForwardPage } from './FastForwardPage';
import { useHasMounted } from '@shared/hooks';

export default function FastForward() {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  return <FastForwardPage />;
}

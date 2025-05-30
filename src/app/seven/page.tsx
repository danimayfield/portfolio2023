'use client';
import { SevenPage } from './SevenPage';
import { useHasMounted } from '@shared/hooks';

export default function Seven() {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  return <SevenPage />;
}

'use client';
import { BookerPage } from './BookerPage';
import { useHasMounted } from '@shared/hooks';

export default function Goals1And1() {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  return <BookerPage />;
}

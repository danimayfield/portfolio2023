'use client';
import { BookerPage } from './BookerPage';
import { useHasMounted } from '@shared/hooks';

export default function Booker() {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  return <BookerPage />;
}

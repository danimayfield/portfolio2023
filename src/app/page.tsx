'use client';
import { HomePage } from './HomePage';
import { useHasMounted } from '@shared/hooks';

export default function Home() {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  return <HomePage />;
}

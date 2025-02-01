'use client';
import { WhereaboutsPage } from './WhereaboutsPage';
import { useHasMounted } from '@shared/hooks';

export default function Whereabouts() {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  return <WhereaboutsPage />;
}

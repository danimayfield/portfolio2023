'use client';

import { AnimalHealthLinkPage } from './AnimalHealthLinkPage';
import { useHasMounted } from '@shared/hooks';

export default function AnimalHealthLink() {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  return <AnimalHealthLinkPage />;
}

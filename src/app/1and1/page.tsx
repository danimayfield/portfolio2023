'use client';
import { Goals1And1Page } from './Goals1And1Page';
import { useHasMounted } from '@shared/hooks';

export default function Goals1And1() {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  return <Goals1And1Page />;
}

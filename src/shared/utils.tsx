import { DependencyList, EffectCallback, useEffect, useRef } from 'react';
import isEqual from 'lodash/isEqual';

/**
 * Run a function on mount ignoring any dependencies
 * @param f Function to run on mount
 */
export function useOnMount(f: () => void | (() => void)) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(f, []);
}

/**
 * Same as useEffect but does a deep comparison
 */
export function useDeepEffect(
  func: EffectCallback,
  dependencies: DependencyList
) {
  const dependenciesRef = useRef(dependencies);

  useEffect(() => {
    if (!isEqual(dependenciesRef.current, dependencies)) {
      // Execute the function
      func();

      // Update the dependencies
      dependenciesRef.current = dependencies;
    }
  }, [func, dependencies]);
}

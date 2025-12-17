'use client';

import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return <main className="p-4">{children}</main>;
}

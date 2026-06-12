"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Branch } from "@/types/content";

interface BranchContextValue {
  branch: Branch;
  branches: Branch[];
  setBranchId: (id: string) => void;
  ready: boolean;
}

const BranchContext = createContext<BranchContextValue | null>(null);

const STORAGE_KEY = "ds-active-branch";

export function BranchProvider({
  children,
  branches,
  primaryId,
}: {
  children: React.ReactNode;
  branches: Branch[];
  primaryId: string;
}) {
  const [branchId, setBranchId] = useState<string>(primaryId);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && branches.some((b) => b.id === saved)) {
        setBranchId(saved);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, [branches]);

  const update = (id: string) => {
    setBranchId(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
  };

  const branch = useMemo(
    () => branches.find((b) => b.id === branchId) ?? branches[0],
    [branchId, branches],
  );

  return (
    <BranchContext.Provider value={{ branch, branches, setBranchId: update, ready }}>
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch() {
  const ctx = useContext(BranchContext);
  if (!ctx) throw new Error("useBranch must be used within BranchProvider");
  return ctx;
}

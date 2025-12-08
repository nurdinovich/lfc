'use client'
import { create } from 'zustand'
interface TId {
  employeeId:number | null
  setEmployeeId:(id:number) => void
}

export const ConsultationStore = create<TId>((set) => ({
  employeeId: null,

  setEmployeeId: (id) => set({ employeeId:id }),
}))
import { create } from "zustand";
import { DraftPatient, Patient } from "../types";
import { v4 as uuid } from 'uuid'
type PatientState = {
        patients: Patient[],
        addPatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => ({ ...patient, id: uuid() })
export const usePatientStore = create<PatientState>((set) => ({
        patients: [],
        addPatient: (data) => {
                set((state) => ({
                        patients: [...state.patients, createPatient(data)]
                }))
        }
}))
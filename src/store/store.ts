import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { DraftPatient, Patient } from "../types";
import { v4 as uuid } from "uuid";
type PatientState = {
  patients: Patient[];
  activeId: Patient["id"] | null;
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatient: (data: DraftPatient) => void;
};

const createPatient = (patient: DraftPatient): Patient => ({
  ...patient,
  id: uuid(),
});
export const usePatientStore = create<PatientState>()(
  devtools(
    persist(
      (set) => ({
        patients: [],
        activeId: "",
        addPatient: (data) => {
          set((state) => ({
            patients: [...state.patients, createPatient(data)],
          }));
        },
        deletePatient: (id) => {
          set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id),
          }));
        },
        getPatientById: (id) => {
          set(() => ({
            activeId: id,
          }));
        },
        updatePatient: (data) => {
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === state.activeId
                ? { id: patient.id, ...data }
                : patient
            ),
            activeId: "",
          }));
        },
      }),
      {
        name: "patient-storage",
      }
    )
  )
);

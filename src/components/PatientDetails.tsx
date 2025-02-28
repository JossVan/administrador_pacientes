import { toast } from "react-toastify";
import { usePatientStore } from "../store/store";
import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient;
};
export default function PatientDetails({ patient }: PatientDetailsProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);

  const handleClick = (id: string) => {
    deletePatient(id);
    toast.error("Informacion de paciente eliminada");
  };
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" value={patient.id} />
      <PatientDetailItem label="Nombre" value={patient.name} />
      <PatientDetailItem label="Propietario" value={patient.caretaker} />
      <PatientDetailItem label="Email" value={patient.email} />
      <PatientDetailItem label="Fecha Alta" value={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" value={patient.symptoms} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => handleClick(patient.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

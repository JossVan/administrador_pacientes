import { usePatientStore } from "../store/store"

export default function PatientsList() {
  const patients = usePatientStore(state => state.patients);
  console.log(patients);
  return (
  <>
    <h2 className="font-black text-3xl text-center">Pacientes</h2>

    <p className="text-lg mt-5 text-center mb-10">
      Administra tus {""}
      <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
    </p>
  </>
  )
}

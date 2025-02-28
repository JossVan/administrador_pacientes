type PatientDetailsItemProps = {
  label: string;
  value: string;
};
export default function PatientDetailItem({
  label,
  value,
}: PatientDetailsItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {label}: {""}
      <span className="font-normal normal-case">{value}</span>{" "}
    </p>
  );
}

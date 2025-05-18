"use client";
import { Download } from "lucide-react";
import { useParams } from "next/navigation";
import { PageHeader } from "~/app/_layout/PageHeader";
import { Button } from "~/components/ui/button";
import mockPatients from "~/lib/mockPatients.json";
import PatientDetailCard from "./_components/PacientDetail";

export default function PatientDetail() {
  const params = useParams<{ tag: string; item: string }>();
  const patientId = params.id;
  const patient = mockPatients.find((u) => u.id === patientId)!;
  return (
    <div className="container py-6">
      <PageHeader
        title={`${patient.firstName} ${patient.lastName}`}
        description="Información detallada del paciente y su historial."
      >
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Descargar CSV
        </Button>
      </PageHeader>
      <PatientDetailCard patient={patient} />
    </div>
  );
}

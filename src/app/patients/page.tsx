"use client";
import { Download, Upload } from "lucide-react";
import { Button } from "~/components/ui/button";
import { PageHeader } from "../_layout/PageHeader";
import PatientFilters from "./_components/PatientFilters";
import { DataTable } from "~/components/ui/DataTable";
import { PatientColumns } from "./_components/PatientColumns";
import mockPatients from "~/lib/mockPatients.json";
import FileUploadModal from "./_components/FileUpload";

export default function Pacients() {
  const applyFilters = (filters: Record<string, any>): void => {};
  const changePage = (page: number): void => {};
  return (
    <div className="container py-6">
      <PageHeader
        title="Lista de Pacientes"
        description="Gestione y busque pacientes registrados en el sistema."
      >
        <FileUploadModal />
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Descargar CSV
        </Button>
      </PageHeader>

      <PatientFilters onApplyFilters={applyFilters} />

      <DataTable
        columns={PatientColumns}
        data={mockPatients}
        onPaginationChangeAction={changePage}
      />
    </div>
  );
}

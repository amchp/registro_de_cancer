"use client";
import { PageHeader } from "./_layout/PageHeader";
import { Button } from "~/components/ui/button";
import { Download } from "lucide-react";
import { DashboardColumns } from "./_components/DashboardColumns";
import mockDashboardData from "~/lib/mockDashboardData.json";
import { DataTable } from "~/components/ui/DataTable";
import DashboardFilters from "./_components/DashboardFilters";

export default function Home() {
  const applyFilters = (filters: Record<string, any>): void => {};
  const changePage = (page: number): void => {};
  return (
    <div className="container py-6">
      <PageHeader
        title="Panel de datos"
        description="Visualice y analice los datos del registro de cáncer."
      >
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Descargar CSV
        </Button>
      </PageHeader>

      <DashboardFilters onApplyFilters={applyFilters} />

      <DataTable
        columns={DashboardColumns}
        data={mockDashboardData}
        onPaginationChangeAction={changePage}
      />
    </div>
  );
}

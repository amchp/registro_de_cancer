import { PageHeader } from "./_components/layout/PageHeader";
import { Button } from "~/components/ui/button";
import { Download } from 'lucide-react';
import { ROWS_PER_PAGE} from "~/lib/constants"
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { mockDashboardData } from "~/lib/mockData";

export default async function Home() {
  return (
      <div className="container py-6">
          <PageHeader
              title="Panel de datos" 
              description="Visualice y analice los datos del registro de cáncer."
          >
              <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar CSV
              </Button>
          </PageHeader>

          <DataTable columns={columns} data={mockDashboardData} />  
      </div>
  );
}

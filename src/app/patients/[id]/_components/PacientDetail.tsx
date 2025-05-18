import { Card, CardContent } from "~/components/ui/card";
import type { Patient } from "~/models/patients";

interface PatientDetailCardProps {
  patient: Patient;
}

export default function PatientDetailCard({ patient }) {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Tipo de Documento
            </h3>
            <p className="text-lg">{patient.documentType}</p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Número de Identificación
            </h3>
            <p className="text-lg">{patient.documentNumber}</p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Nombres
            </h3>
            <p className="text-lg">{`${patient.firstName} ${patient.secondName || ""}`}</p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Apellidos
            </h3>
            <p className="text-lg">{`${patient.lastName} ${patient.secondLastName || ""}`}</p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Género
            </h3>
            <p className="text-lg">
              {patient.gender === "M"
                ? "Masculino"
                : patient.gender === "F"
                  ? "Femenino"
                  : "Otro"}
            </p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">Edad</h3>
            <p className="text-lg">{`${patient.age} ${patient.ageUnit}`}</p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Municipio
            </h3>
            <p className="text-lg">{patient.municipality}</p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Subregión
            </h3>
            <p className="text-lg">{patient.subregion}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-muted-foreground text-sm font-medium">
              Dirección
            </h3>
            <p className="text-lg">{patient.address}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Patient } from "~/models/patients";

export const PatientColumns: ColumnDef<Patient>[] = [
  {
    header: "Tipo de Documento",
    accessorKey: "documentType",
  },
  {
    header: "Número de Identificación",
    accessorKey: "documentNumber",
  },
  {
    header: "Primer Nombre",
    accessorKey: "firstName",
  },
  {
    header: "Segundo Nombre",
    accessorKey: "secondName",
  },
  {
    header: "Primer Apellido",
    accessorKey: "lastName",
  },
  {
    header: "Segundo Apellido",
    accessorKey: "secondLastName",
  },
  {
    header: "Sexo",
    accessorKey: "sex",
  },
  {
    header: "Edad",
    accessorKey: "age",
  },
  {
    header: "Unidad de Edad",
    accessorKey: "ageUnit",
  },
  {
    header: "Fecha de Mortalidad",
    accessorKey: "mortalityDate",
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => (
      <Link href={`/patients/${row.original.id}`}>
        <ExternalLink />
      </Link>
    ),
  },
];

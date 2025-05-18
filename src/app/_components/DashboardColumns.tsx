"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { DashboardType } from "~/models/dashboardData";

export const DashboardColumns: ColumnDef<DashboardType>[] = [
  {
    accessorKey: "diagnosisYear",
    header: "Año Incidencia",
  },
  {
    accessorKey: "subregion",
    header: "Subregión",
  },
  {
    accessorKey: "municipality",
    header: "Municipio",
  },
  {
    accessorKey: "sex",
    header: "Sexo",
  },
  {
    accessorKey: "age",
    header: "Edad",
    cell: (info) => info.getValue<number>(),
  },
  {
    accessorKey: "ageUnit",
    header: "Unidad de edad",
  },
  {
    accessorKey: "cie10Code",
    header: "Código CIE-10",
  },
  {
    accessorKey: "cie10Name",
    header: "Nombre del código CIE-10",
  },
  {
    accessorKey: "topographicCode",
    header: "Código Topográfico CIE O",
  },
  {
    accessorKey: "topographicName",
    header: "Nombre del Código Topográfico CIE O",
  },
  {
    accessorKey: "morphologicCode",
    header: "Código Morfológico CIE O",
  },
  {
    accessorKey: "morphologicName",
    header: "Nombre del Código Morfológico CIE O",
  },
  {
    accessorKey: "behavior",
    header: "Comportamiento",
  },
  {
    accessorKey: "tumorState",
    header: "Estadio del tumor (TNM)",
  },
  {
    accessorKey: "diagnosisMethod",
    header: "Método de Diagnóstico",
  },
];

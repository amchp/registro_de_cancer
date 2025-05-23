"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { CancerDiagnosis } from "~/models/cancerDiagnosis";

export const CancerDiagnosisColumns: ColumnDef<CancerDiagnosis>[] = [
  {
    header: "Año de Diagnóstico",
    accessorKey: "diagnosisYear",
  },
  {
    header: "Método de Diagnóstico",
    accessorKey: "diagnosisMethod",
  },
  {
    header: "Fecha de Incidencia",
    accessorKey: "incidenceDate",
  },
  {
    header: "Código CIE-10",
    accessorKey: "cie10Code",
  },
  {
    header: "Nombre CIE-10",
    accessorKey: "cie10Name",
  },
  {
    header: "Código CIEO Topográfico",
    accessorKey: "cieOTopographicCode",
  },
  {
    header: "Nombre CIEO Topográfico",
    accessorKey: "cieOTopographicName",
  },
  {
    header: "Código CIEO Morfológico",
    accessorKey: "cieOMorphologicCode",
  },
  {
    header: "Nombre CIEO Morfológico",
    accessorKey: "cieOMorphologicName",
  },
  {
    header: "Comportamiento",
    accessorKey: "behavior",
  },
  {
    header: "Estado del Tumor",
    accessorKey: "tumorState",
  },
];

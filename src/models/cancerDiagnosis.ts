export interface CancerDiagnosis {
  id: string;
  patientId: string;
  diagnosisYear: number;
  diagnosisMethod: string;
  incidenceDate: string;
  mortalityDate: string | null;
  cieOTopographicCode: string;
  cieOTopographicName: string;
  cieOMorphologicCode: string;
  cieOMorphologicName: string;
  cie10Code: string;
  cie10Name: string;
  behavior: string;
  tumorState: string;
  multiple: boolean;
  deathCertificateNumber?: string;
  registeredCauseOfDeath?: string;
}

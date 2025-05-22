export interface Patient {
  id: string;
  documentType: string;
  documentNumber: string;
  firstName: string;
  secondName: string | null;
  lastName: string;
  secondLastName: string | null;
  sex: string;
  age: number;
  ageUnit: string;
  municipality: string;
  subregion: string;
  address: string;
  mortalityDate: string | null;
  deathCertificateNumber?: string;
  registeredCauseOfDeath?: string;
}

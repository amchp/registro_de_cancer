export interface User {
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
}

export interface CancerDiagnosis {
  id: string;
  userId: string;
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

export interface DashboardType {
  id: string;
  userId: string;
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
};

export const generateMockUsers = (count: number): User[] => {
  const documentTypes = ['CC', 'TI', 'CE', 'PA', 'RC'];
  const sex = ['M', 'F'];
  const ageUnits = ['años', 'meses'];
  const municipalities = ['Medellín', 'Envigado', 'Bello', 'Itagüí', 'Sabaneta'];
  const subregions = ['Valle de Aburrá', 'Oriente', 'Occidente', 'Norte', 'Sur'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `user-${i + 1}`,
    documentType: documentTypes[Math.floor(Math.random() * documentTypes.length)],
    documentNumber: Math.floor(1000000 + Math.random() * 9000000).toString(),
    firstName: `Nombre${i + 1}`,
    secondName: Math.random() > 0.3 ? `Segundo${i + 1}` : null,
    lastName: `Apellido${i + 1}`,
    secondLastName: Math.random() > 0.3 ? `SegundoApellido${i + 1}` : null,
    sex: sex[Math.floor(Math.random() * sex.length)],
    age: Math.floor(Math.random() * 100),
    ageUnit: ageUnits[Math.floor(Math.random() * ageUnits.length)],
    municipality: municipalities[Math.floor(Math.random() * municipalities.length)],
    subregion: subregions[Math.floor(Math.random() * subregions.length)],
    address: `Calle ${Math.floor(Math.random() * 100)} #${Math.floor(Math.random() * 100)}-${Math.floor(Math.random() * 100)}`,
  }));
};

// Generate mock diagnoses
export const generateMockDiagnoses = (users: User[], diagnosesPerUser = 1): CancerDiagnosis[] => {
  const diagnosisMethods = ['Clínico', 'Histológico', 'Imagenológico', 'Laboratorio'];
  const topographicCodes = ['C18.9', 'C50.9', 'C34.9', 'C16.9', 'C22.0'];
  const topographicNames = ['Colon', 'Mama', 'Pulmón', 'Estómago', 'Hígado'];
  const morphologicCodes = ['8140/3', '8500/3', '8070/3', '8010/3', '8000/3'];
  const morphologicNames = ['Adenocarcinoma', 'Carcinoma ductal', 'Carcinoma escamoso', 'Carcinoma', 'Neoplasia maligna'];
  const cie10Codes = ['C18', 'C50', 'C34', 'C16', 'C22'];
  const cie10Names = ['Tumor maligno del colon', 'Tumor maligno de la mama', 'Tumor maligno de los bronquios y del pulmón', 'Tumor maligno del estómago', 'Tumor maligno del hígado'];
  const behaviors = ['Benigno', 'Incierto', 'Maligno'];
  const tumorStates = ['Localizado', 'Regional', 'Distante', 'Desconocido'];
  
  const diagnoses: CancerDiagnosis[] = [];
  
  users.forEach((user) => {
    const diagnosesCount = Math.max(1, Math.floor(Math.random() * diagnosesPerUser));
    
    for (let i = 0; i < diagnosesCount; i++) {
      const diagnosisYear = 2018 + Math.floor(Math.random() * 6); // 2018-2023
      const incidenceMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
      const incidenceDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
      
      const hasMortalityDate = Math.random() > 0.7;
      let mortalityDate = null;
      let deathCertificateNumber = undefined;
      let registeredCauseOfDeath = undefined;
      
      if (hasMortalityDate) {
        const mortalityYear = diagnosisYear + Math.floor(Math.random() * 3);
        const mortalityMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
        const mortalityDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
        mortalityDate = `${mortalityYear}-${mortalityMonth}-${mortalityDay}`;
        deathCertificateNumber = `DC-${Math.floor(100000 + Math.random() * 900000).toString()}`;
        registeredCauseOfDeath = 'Debido a cáncer';
      }
      
      const topographicIndex = Math.floor(Math.random() * topographicCodes.length);
      const morphologicIndex = Math.floor(Math.random() * morphologicCodes.length);
      const cie10Index = Math.floor(Math.random() * cie10Codes.length);
      
      diagnoses.push({
        id: `diag-${user.id}-${i}`,
        userId: user.id,
        diagnosisYear,
        diagnosisMethod: diagnosisMethods[Math.floor(Math.random() * diagnosisMethods.length)],
        incidenceDate: `${diagnosisYear}-${incidenceMonth}-${incidenceDay}`,
        mortalityDate,
        topographicCode: topographicCodes[topographicIndex],
        topographicName: topographicNames[topographicIndex],
        morphologicCode: morphologicCodes[morphologicIndex],
        morphologicName: morphologicNames[morphologicIndex],
        cie10Code: cie10Codes[cie10Index],
        cie10Name: cie10Names[cie10Index],
        behavior: behaviors[Math.floor(Math.random() * behaviors.length)],
        tumorState: tumorStates[Math.floor(Math.random() * tumorStates.length)],
        multiple: Math.random() > 0.8,
        deathCertificateNumber,
        registeredCauseOfDeath,
      });
    }
  });
  
  return diagnoses;
};

const mockUsers = generateMockUsers(100);
export const mockDiagnoses = generateMockDiagnoses(mockUsers, 3);

export const mockDashboardData = mockDiagnoses.map((diagnosis) => {
  const user = mockUsers.find((u) => u.id === diagnosis.userId)!;
  return {
    ...diagnosis,
    documentType: user.documentType,
    documentNumber: user.documentNumber,
    firstName: user.firstName,
    secondName: user.secondName,
    lastName: user.lastName,
    secondLastName: user.secondLastName,
    sex: user.sex,
    age: user.age,
    ageUnit: user.ageUnit,
    municipality: user.municipality,
    subregion: user.subregion,
    address: user.address,
  };
});

export { mockUsers };

import { sql } from "drizzle-orm";
import { index, sqliteTableCreator } from "drizzle-orm/sqlite-core";

/**
 * Drizzle ORM schema for the Cancer Registry database
 */
export const createTable = sqliteTableCreator(
  (name) => `registro_de_cancer_${name}`,
);

// Patient
export const patient = createTable(
  "patient",
  (d) => ({
    id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    createdAt: d
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: d
      .integer({ mode: "timestamp" })
      .$onUpdate(() => new Date())
      .notNull(),
    documentType: d.text({ length: 50 }).notNull(),
    documentNumber: d.text({ length: 50 }).notNull(),
    firstName: d.text({ length: 256 }).notNull(),
    secondName: d.text({ length: 256 }),
    lastName: d.text({ length: 256 }).notNull(),
    secondLastName: d.text({ length: 256 }),
    sex: d.text({ length: 20 }),
    age: d.integer({ mode: "number" }),
    ageUnit: d.text({ length: 20 }).default("years"),
    municipalityCode: d
      .text({ length: 20 })
      .notNull()
      .references(() => municipality.code),
    subregionId: d.integer({ mode: "number" }).references(() => subregion.id),
    address: d.text(),
    mortalityDate: d.integer({ mode: "timestamp" }),
    deathCertificateNumber: d.text({ length: 100 }),
    registeredCauseOfDeath: d.text(),
  }),
  (t) => [index("patient_doc_idx").on(t.documentType, t.documentNumber)],
);

// Cancer Diagnosis
export const cancerDiagnosis = createTable(
  "cancer_diagnosis",
  (d) => ({
    id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    createdAt: d
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: d
      .integer({ mode: "timestamp" })
      .$onUpdate(() => new Date())
      .notNull(),
    patientId: d
      .integer({ mode: "number" })
      .notNull()
      .references(() => patient.id),
    diagnosisYear: d.integer({ mode: "number" }).notNull(),
    diagnosisMethod: d.text({ length: 100 }),
    incidenceDate: d.integer({ mode: "timestamp" }),
    cieOTopographicCode: d
      .text({ length: 20 })
      .references(() => cieo_topografico.code),
    cieOMorphologicCode: d
      .text({ length: 20 })
      .references(() => cieo_morfologico.code),
    cie10Code: d.text({ length: 20 }).references(() => cie10.code),
    behavior: d.text(),
    tumorState: d.text({ length: 50 }),
    primary: d.integer({ mode: "number" }).default(0).notNull(),
  }),
  (t) => [index("diag_patient_idx").on(t.patientId)],
);

// Municipality
export const municipality = createTable("municipality", (d) => ({
  code: d.text({ length: 20 }).primaryKey(),
  createdAt: d
    .integer({ mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: d
    .integer({ mode: "timestamp" })
    .$onUpdate(() => new Date())
    .notNull(),
  name: d.text({ length: 256 }).notNull(),
  subregionId: d
    .integer({ mode: "number" })
    .notNull()
    .references(() => subregion.id),
}));

// Subregion
export const subregion = createTable("subregion", (d) => ({
  id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  createdAt: d
    .integer({ mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: d
    .integer({ mode: "timestamp" })
    .$onUpdate(() => new Date())
    .notNull(),
  region: d.text({ length: 100 }).notNull(),
  name: d.text({ length: 256 }).notNull(),
}));

// CIE10
export const cie10 = createTable("cie10", (d) => ({
  code: d.text({ length: 20 }).primaryKey(),
  createdAt: d
    .integer({ mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: d
    .integer({ mode: "timestamp" })
    .$onUpdate(() => new Date())
    .notNull(),
  daneGrouping: d.text({ length: 100 }),
}));

// CIEO Morphologic
export const cieo_morfologico = createTable("cieo_morphologic", (d) => ({
  code: d.text({ length: 20 }).primaryKey(),
  createdAt: d
    .integer({ mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: d
    .integer({ mode: "timestamp" })
    .$onUpdate(() => new Date())
    .notNull(),
  name: d.text({ length: 256 }).notNull(),
}));

// CIEO Topographic
export const cieo_topografico = createTable("cieo_topographic", (d) => ({
  code: d.text({ length: 20 }).primaryKey(),
  createdAt: d
    .integer({ mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  updatedAt: d
    .integer({ mode: "timestamp" })
    .$onUpdate(() => new Date())
    .notNull(),
  name: d.text({ length: 256 }).notNull(),
}));

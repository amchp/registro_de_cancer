"use client";
import React, { useState, useEffect } from "react";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";

const ANTIOQUIA_SUBREGIONS = [
  "Valle de Aburrá",
  "Oriente",
  "Urabá",
  "Suroeste",
  "Norte",
  "Occidente",
  "Nordeste",
  "Bajo Cauca",
  "Magdalena Medio",
].sort();

const ANTIOQUIA_MUNICIPALITIES = {
  "Valle de Aburrá": [
    "Medellín",
    "Bello",
    "Itagüí",
    "Envigado",
    "Sabaneta",
    "La Estrella",
    "Caldas",
    "Copacabana",
    "Girardota",
    "Barbosa",
  ].sort(),
  Oriente: [
    "Rionegro",
    "La Ceja",
    "Marinilla",
    "El Carmen de Viboral",
    "Guatapé",
    "San Carlos",
    "Sonsón",
    "El Santuario",
    "Granada",
    "Cocorná",
  ].sort(),
  Urabá: [
    "Apartadó",
    "Turbo",
    "Chigorodó",
    "Carepa",
    "Necoclí",
    "San Pedro de Urabá",
    "Arboletes",
    "San Juan de Urabá",
    "Mutatá",
  ].sort(),
  Suroeste: [
    "Andes",
    "Ciudad Bolívar",
    "Urrao",
    "Jardín",
    "Jericó",
    "Támesis",
    "Valparaíso",
    "Caramanta",
    "Tarso",
    "Pueblorrico",
  ].sort(),
  Norte: [
    "Santa Rosa de Osos",
    "Yarumal",
    "San Pedro de los Milagros",
    "Entrerríos",
    "Don Matías",
    "Belmira",
    "San José de la Montaña",
    "San Andrés de Cuerquia",
    "Toledo",
    "Campamento",
  ].sort(),
  Occidente: [
    "Santa Fe de Antioquia",
    "Sopetrán",
    "San Jerónimo",
    "Olaya",
    "Liborina",
    "Sabanalarga",
    "Buriticá",
    "Peque",
    "Cañasgordas",
    "Frontino",
  ].sort(),
  Nordeste: [
    "Segovia",
    "Remedios",
    "Amalfi",
    "Anorí",
    "Cisneros",
    "Santo Domingo",
    "San Roque",
    "Yolombó",
    "Vegachí",
    "Yalí",
  ].sort(),
  "Bajo Cauca": [
    "Caucasia",
    "El Bagre",
    "Zaragoza",
    "Tarazá",
    "Cáceres",
    "Nechí",
  ].sort(),
  "Magdalena Medio": [
    "Puerto Berrío",
    "Puerto Nare",
    "Puerto Triunfo",
    "Yondó",
    "Caracolí",
    "Maceo",
  ].sort(),
};

// Generate a list of all municipalities sorted alphabetically
const ALL_MUNICIPALITIES = Object.values(ANTIOQUIA_MUNICIPALITIES)
  .flat()
  .sort();

interface DashboardFiltersProps {
  onApplyFilters: (filters: any) => void;
}

const DashboardFilters: React.FC<DashboardFiltersProps> = ({
  onApplyFilters,
}) => {
  const [filters, setFilters] = useState({
    yearRange: ["2019", "2023"],
    gender: "",
    ageRange: ["0", "100"],
    subregion: "",
    municipality: "",
    cie10CodeRange: ["", ""],
    topographicCodeRange: ["", ""],
    morphologicCodeRange: ["", ""],
    behavior: "",
    multiplePrimaries: "",
  });

  const [availableMunicipalities, setAvailableMunicipalities] =
    useState<string[]>(ALL_MUNICIPALITIES);

  // Update available municipalities when subregion changes
  useEffect(() => {
    if (filters.subregion) {
      setAvailableMunicipalities(
        ANTIOQUIA_MUNICIPALITIES[
          filters.subregion as keyof typeof ANTIOQUIA_MUNICIPALITIES
        ] || [],
      );
      // Reset municipality when changing subregion
      if (
        filters.municipality &&
        !ANTIOQUIA_MUNICIPALITIES[
          filters.subregion as keyof typeof ANTIOQUIA_MUNICIPALITIES
        ]?.includes(filters.municipality)
      ) {
        setFilters((prev) => ({ ...prev, municipality: "" }));
      }
    } else {
      setAvailableMunicipalities(ALL_MUNICIPALITIES);
    }
  }, [filters.subregion]);

  const handleChange = (name: string, value: any) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleRangeChange = (name: string, index: number, value: string) => {
    setFilters((prev) => {
      const newRange = [...prev[name as keyof typeof prev]] as string[];
      newRange[index] = value;
      return { ...prev, [name]: newRange };
    });
  };

  const handleApply = () => {
    const formattedFilters = {
      yearRange: filters.yearRange.join("-"),
      gender: filters.gender,
      ageRange: filters.ageRange.join("-"),
      subregion: filters.subregion,
      municipality: filters.municipality,
      cie10CodeRange: filters.cie10CodeRange.join("-"),
      topographicCodeRange: filters.topographicCodeRange.join("-"),
      morphologicCodeRange: filters.morphologicCodeRange.join("-"),
      behavior: filters.behavior,
      multiplePrimaries: filters.multiplePrimaries,
    };

    onApplyFilters(formattedFilters);
  };

  const handleReset = () => {
    setFilters({
      yearRange: ["2019", "2023"],
      gender: "",
      ageRange: ["0", "100"],
      subregion: "",
      municipality: "",
      cie10CodeRange: ["", ""],
      topographicCodeRange: ["", ""],
      morphologicCodeRange: ["", ""],
      behavior: "",
      multiplePrimaries: "",
    });
    onApplyFilters({});
  };

  return (
    <div className="filter-container mb-6 rounded-md bg-white p-4 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Filtros</h3>

      <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Año Incidencia - Range Input */}
        <div className="space-y-2">
          <Label>Año Incidencia (Rango)</Label>
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Label htmlFor="yearRangeStart" className="text-xs">
                Desde
              </Label>
              <Input
                id="yearRangeStart"
                value={filters.yearRange[0]}
                onChange={(e) =>
                  handleRangeChange("yearRange", 0, e.target.value)
                }
                placeholder="Ej. 2019"
                className="mt-1"
                type="number"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="yearRangeEnd" className="text-xs">
                Hasta
              </Label>
              <Input
                id="yearRangeEnd"
                value={filters.yearRange[1]}
                onChange={(e) =>
                  handleRangeChange("yearRange", 1, e.target.value)
                }
                placeholder="Ej. 2023"
                className="mt-1"
                type="number"
              />
            </div>
          </div>
        </div>

        {/* Sexo */}
        <div className="space-y-2">
          <Label htmlFor="gender">Sexo</Label>
          <Select
            value={filters.gender}
            onValueChange={(value) => handleChange("gender", value)}
          >
            <SelectTrigger id="gender">
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="M">Masculino</SelectItem>
                <SelectItem value="F">Femenino</SelectItem>
                <SelectItem value="O">Otro</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Rango de Edad */}
        <div className="space-y-2">
          <Label>Rango de Edad</Label>
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Label htmlFor="ageRangeStart" className="text-xs">
                Desde
              </Label>
              <Input
                id="ageRangeStart"
                value={filters.ageRange[0]}
                onChange={(e) =>
                  handleRangeChange("ageRange", 0, e.target.value)
                }
                placeholder="Ej. 0"
                className="mt-1"
                type="number"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="ageRangeEnd" className="text-xs">
                Hasta
              </Label>
              <Input
                id="ageRangeEnd"
                value={filters.ageRange[1]}
                onChange={(e) =>
                  handleRangeChange("ageRange", 1, e.target.value)
                }
                placeholder="Ej. 100"
                className="mt-1"
                type="number"
              />
            </div>
          </div>
        </div>

        {/* Subregión */}
        <div className="space-y-2">
          <Label htmlFor="subregion">Subregión</Label>
          <Select
            value={filters.subregion}
            onValueChange={(value) => handleChange("subregion", value)}
          >
            <SelectTrigger id="subregion">
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {ANTIOQUIA_SUBREGIONS.map((subregion) => (
                  <SelectItem key={subregion} value={subregion}>
                    {subregion}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Municipio */}
        <div className="space-y-2">
          <Label htmlFor="municipality">Municipio</Label>
          <Select
            value={filters.municipality}
            onValueChange={(value) => handleChange("municipality", value)}
          >
            <SelectTrigger id="municipality">
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {availableMunicipalities.map((municipality) => (
                  <SelectItem key={municipality} value={municipality}>
                    {municipality}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* CIE10 Range */}
        <div className="space-y-2">
          <Label>Código CIE-10 (Rango)</Label>
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Label htmlFor="cie10CodeStart" className="text-xs">
                Desde
              </Label>
              <Input
                id="cie10CodeStart"
                value={filters.cie10CodeRange[0]}
                onChange={(e) =>
                  handleRangeChange("cie10CodeRange", 0, e.target.value)
                }
                placeholder="Ej. C00"
                className="mt-1"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="cie10CodeEnd" className="text-xs">
                Hasta
              </Label>
              <Input
                id="cie10CodeEnd"
                value={filters.cie10CodeRange[1]}
                onChange={(e) =>
                  handleRangeChange("cie10CodeRange", 1, e.target.value)
                }
                placeholder="Ej. C99"
                className="mt-1"
              />
            </div>
          </div>
        </div>

        {/* CIEO Topográfico Range */}
        <div className="space-y-2">
          <Label>Código Topográfico CIEO (Rango)</Label>
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Label htmlFor="topographicCodeStart" className="text-xs">
                Desde
              </Label>
              <Input
                id="topographicCodeStart"
                value={filters.topographicCodeRange[0]}
                onChange={(e) =>
                  handleRangeChange("topographicCodeRange", 0, e.target.value)
                }
                placeholder="Ej. C00"
                className="mt-1"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="topographicCodeEnd" className="text-xs">
                Hasta
              </Label>
              <Input
                id="topographicCodeEnd"
                value={filters.topographicCodeRange[1]}
                onChange={(e) =>
                  handleRangeChange("topographicCodeRange", 1, e.target.value)
                }
                placeholder="Ej. C99"
                className="mt-1"
              />
            </div>
          </div>
        </div>

        {/* CIEO Morfológico Range */}
        <div className="space-y-2">
          <Label>Código Morfológico CIEO (Rango)</Label>
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <Label htmlFor="morphologicCodeStart" className="text-xs">
                Desde
              </Label>
              <Input
                id="morphologicCodeStart"
                value={filters.morphologicCodeRange[0]}
                onChange={(e) =>
                  handleRangeChange("morphologicCodeRange", 0, e.target.value)
                }
                placeholder="Ej. 8000"
                className="mt-1"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="morphologicCodeEnd" className="text-xs">
                Hasta
              </Label>
              <Input
                id="morphologicCodeEnd"
                value={filters.morphologicCodeRange[1]}
                onChange={(e) =>
                  handleRangeChange("morphologicCodeRange", 1, e.target.value)
                }
                placeholder="Ej. 8999"
                className="mt-1"
              />
            </div>
          </div>
        </div>

        {/* Comportamiento */}
        <div className="space-y-2">
          <Label htmlFor="behavior">Comportamiento</Label>
          <Select
            value={filters.behavior}
            onValueChange={(value) => handleChange("behavior", value)}
          >
            <SelectTrigger id="behavior">
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">Benigno</SelectItem>
                <SelectItem value="2">Incierto</SelectItem>
                <SelectItem value="3">Maligno</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Múltiples Primarios */}
        <div className="space-y-2">
          <Label htmlFor="multiplePrimaries">Múltiples Primarios</Label>
          <Select
            value={filters.multiplePrimaries}
            onValueChange={(value) => handleChange("multiplePrimaries", value)}
          >
            <SelectTrigger id="multiplePrimaries">
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="yes">Sí</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button
          variant="outline"
          onClick={handleReset}
          className="min-w-[100px]"
        >
          Limpiar
        </Button>
        <Button onClick={handleApply} className="min-w-[100px]">
          Aplicar
        </Button>
      </div>
    </div>
  );
};

export default DashboardFilters;

import React from "react";
import { Input } from "~/components/ui/input";

interface PatientFiltersProps {
  onApplyFilters: (filters: Record<string, any>) => void;
}

const PatientFilters: React.FC<PatientFiltersProps> = ({ onApplyFilters }) => {
  const [filters, setFilters] = React.useState({
    searchBox: "",
  });
  const handleChange = (name: string, value: any) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    handleApply();
  };
  const handleApply = () => {
    const formattedFilters = {
      searchBox: filters.searchBox,
    };

    onApplyFilters(formattedFilters);
  };
  return (
    <div className="filter-container">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label
            htmlFor="search"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Buscar por Nombre, Apellido o Identificación
          </label>
          <Input
            id="search"
            placeholder="Escriba para buscar paciente..."
            value={filters.searchBox}
            onChange={(e) => handleChange("searchBox", e)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PatientFilters;


import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from '~/components/ui/button';
import { DialogTrigger } from '@radix-ui/react-dialog';

export default function  FileUploadModal(){
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      setSelectedFile(null);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mr-2">
          <Upload className="h-4 w-4 mr-2" />
          Importar datos
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Importar datos de pacientes</DialogTitle>
          <DialogDescription>
            Arrastre y suelte un archivo o haga clic para seleccionarlo.
          </DialogDescription>
        </DialogHeader>
        
        <div 
          className={`
            mt-4 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
            ${isDragging ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary/50'}
            transition-colors duration-200
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden" 
            accept=".csv,.xlsx,.xls"
          />
          <p className="mt-2 text-sm text-gray-600">
            {selectedFile ? selectedFile.name : "Arrastra aquí tu archivo o haz clic para seleccionarlo"}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Formatos soportados: CSV, Excel
          </p>
        </div>
        
        <DialogFooter>
          <Button onClick={handleUpload} disabled={!selectedFile}>
            Importar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

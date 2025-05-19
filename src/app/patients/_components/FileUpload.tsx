"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";
import Dropzone from "shadcn-dropzone";
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";

export default function FileUploadModal() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (selectedFile) {
      // TODO: your upload logic
      setSelectedFile(null);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mr-2">
          <Upload className="mr-2 h-4 w-4" />
          Importar datos
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogContent className="max-h-[calc(100dvh-2rem)] w-[90vw] max-w-none overflow-auto rounded-2xl bg-white p-6 shadow-lg">
            <DialogHeader>
              <DialogTitle>Importar datos de pacientes</DialogTitle>
              <DialogDescription>
                Arrastre y suelte un archivo o haga clic para seleccionarlo.
              </DialogDescription>
            </DialogHeader>

            <DialogClose className="absolute top-4 right-4 rounded p-1 hover:bg-gray-100" />

            <Dropzone
              accept={{
                "text/csv": [".csv"],
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                  [".xlsx"],
                "application/vnd.ms-excel": [".xls"],
              }}
              multiple={false}
              onDrop={(files) => {
                if (files.length > 0) setSelectedFile(files[0]!);
              }}
            >
              {({
                isDragAccept,
                acceptedFiles,
                getRootProps,
                getInputProps,
              }) => (
                <div
                  {...getRootProps()}
                  className={`mt-6 flex cursor-pointer flex-col items-center justify-center rounded-lg p-8 transition-colors duration-200 ${isDragAccept ? "border-blue-400 bg-blue-50" : "border-gray-300"} `}
                >
                  <Upload className="mb-2 h-12 w-12 text-gray-400" />
                  <input {...getInputProps()} />
                  <p className="mt-2 text-sm text-gray-600">
                    {acceptedFiles.length > 0
                      ? acceptedFiles[0]!.name
                      : "Arrastra aquí tu archivo o haz clic para seleccionarlo"}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Formatos soportados: CSV, Excel
                  </p>
                </div>
              )}
            </Dropzone>

            <DialogFooter className="mt-6 flex justify-end">
              <Button onClick={handleUpload} disabled={!selectedFile}>
                Importar
              </Button>
            </DialogFooter>
          </DialogContent>
        </div>
      </DialogPortal>
    </Dialog>
  );
}

import React from "react";
import { cn } from "~/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between pb-4", className)}>
      <div>
        <h1 className="text-2xl leading-none font-semibold tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        )}
      </div>
      {children && (
        <div className="flex items-center space-x-2">{children}</div>
      )}
    </div>
  );
}

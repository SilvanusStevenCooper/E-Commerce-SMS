"use client";

import { Copy, Server } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Badge, BadgeProps } from "./badge";
import { Button } from "./button";
import { toast } from "react-hot-toast";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "public",
  admin: "admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
  variant = "public",
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("Copied");
  };
  return (
    <Alert className="">
      <Server className="h-4 w-4" />
      <AlertTitle className="flex items-start md:items-center gap-x-1 md:gap-x-2">
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription>
        <div className="mt-4 flex items-start md:items-center justify-between ">
          <code className="relative items-start rounded overflow-x-auto  bg-muted md:px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {description}
          </code>
          <Button variant="outline" size="icon" onClick={onCopy}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
};

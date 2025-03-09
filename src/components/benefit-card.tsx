"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BenefitCard({
  icon,
  title,
  description,
}: BenefitCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        "h-full border-border/50 transition-all duration-300 overflow-hidden",
        isHovered
          ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
          : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center text-primary bg-primary/10 mb-4 transition-all duration-300",
            isHovered ? "bg-primary/20 scale-110" : "",
          )}
        >
          {icon}
        </div>
        <CardTitle
          className={cn(
            "text-xl transition-all duration-300",
            isHovered ? "text-primary" : "",
          )}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

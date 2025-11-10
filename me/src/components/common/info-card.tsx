"use client";

import { Info } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ReactNode } from "react";
import { cn } from "@/lib/utils/helpers";

interface Props {
  className?: string;
  children: ReactNode;
}

const InfoHoverCard = ({ children, className }: Props) => {
  return (
    <HoverCard>
      <HoverCardTrigger className="cursor-help" asChild>
        <Info size={20} strokeWidth={2.25} className="w-4 h-4 text-lime-700" />
      </HoverCardTrigger>
      <HoverCardContent
        align="start"
        className={cn(
          className,
          "bg-neutral-900 border-zinc-700/40 text-gray-400"
        )}
      >
        {children}
      </HoverCardContent>
    </HoverCard>
  );
};

export default InfoHoverCard;

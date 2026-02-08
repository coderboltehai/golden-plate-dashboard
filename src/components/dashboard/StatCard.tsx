import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: number;
  changeLabel?: string;
  icon: LucideIcon;
  variant?: "default" | "primary" | "success" | "warning";
  delay?: number;
}

const variantStyles = {
  default: "bg-card",
  primary: "bg-gradient-golden text-primary-foreground",
  success: "bg-success/10",
  warning: "bg-warning/10",
};

const iconStyles = {
  default: "bg-muted text-muted-foreground",
  primary: "bg-primary-foreground/20 text-primary-foreground",
  success: "bg-success/20 text-success",
  warning: "bg-warning/20 text-warning",
};

export function StatCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  variant = "default",
  delay = 0,
}: StatCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className={cn(
        "rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-medium transition-all duration-200",
        variantStyles[variant]
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <p className={cn(
            "text-sm font-medium",
            variant === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"
          )}>
            {title}
          </p>
          <p className={cn(
            "text-3xl font-bold tracking-tight",
            variant === "primary" ? "text-primary-foreground" : "text-foreground"
          )}>
            {value}
          </p>
          {change !== undefined && (
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex items-center gap-1 text-sm font-medium",
                  isPositive && "text-success",
                  isNegative && "text-destructive",
                  !isPositive && !isNegative && "text-muted-foreground"
                )}
              >
                {isPositive && <TrendingUp className="w-4 h-4" />}
                {isNegative && <TrendingDown className="w-4 h-4" />}
                {isPositive && "+"}
                {change}%
              </span>
              {changeLabel && (
                <span className={cn(
                  "text-sm",
                  variant === "primary" ? "text-primary-foreground/60" : "text-muted-foreground"
                )}>
                  {changeLabel}
                </span>
              )}
            </div>
          )}
        </div>
        <div className={cn("p-3 rounded-xl", iconStyles[variant])}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </motion.div>
  );
}

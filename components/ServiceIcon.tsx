import {
  FileText,
  Mail,
  Target,
  Map,
  Monitor,
  Megaphone,
  TrendingUp,
  Search,
  ShoppingBag,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  FileText,
  Mail,
  Target,
  Map,
  Monitor,
  Megaphone,
  TrendingUp,
  Search,
  ShoppingBag,
};

interface ServiceIconProps extends LucideProps {
  name: string;
}

export default function ServiceIcon({ name, ...props }: ServiceIconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}

interface ServicePlaceholderCardProps {
  index: number;
}

export function ServicePlaceholderCard({ index }: ServicePlaceholderCardProps) {
  return (
    <div 
      className="aspect-square bg-muted rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer flex items-center justify-center"
    >
      <span className="text-muted-foreground/40 text-sm font-medium">
        Service {index + 1}
      </span>
    </div>
  );
}

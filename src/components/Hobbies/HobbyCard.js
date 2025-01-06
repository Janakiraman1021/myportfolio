import { LucideIcon } from 'lucide-react';
import { Card } from '../ui/Card';

export function HobbyCard({ title, icon: Icon, description }) {
  return (
    <Card className="group relative overflow-hidden bg-zinc-800/50 border-zinc-700 transition-all duration-300 hover:bg-zinc-800 hover:border-amber-500/50">
      <div className="p-6">
        <div className="mb-4 flex justify-center">
          <Icon className="w-12 h-12 text-amber-400 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="text-xl font-semibold text-amber-300 mb-2 text-center">
          {title}
        </h3>
        <p className="text-zinc-400 text-center">{description}</p>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/20 rounded-lg transition-all duration-300" />
    </Card>
  );
}

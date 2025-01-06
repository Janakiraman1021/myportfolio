import { Camera, BookText, PenTool } from 'lucide-react';
import { HobbyCard } from './HobbyCard';
import { BookFeature } from './BookFeature';

const hobbies = [
  {
    title: 'Photography',
    icon: Camera,
    description: 'Capturing moments and stories through the lens',
  },
  {
    title: 'Poem Writing',
    icon: PenTool,
    description: 'Expressing emotions through verses and rhymes',
  },
  {
    title: 'Authoring',
    icon: BookText,
    description: 'Creating worlds and sharing stories through books',
  },
];

export function HobbiesSection() {
  return (
    <section className="w-full bg-zinc-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-400 mb-12 text-center">
          Hobbies & Interests
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.title} {...hobby} />
          ))}
        </div>

        <BookFeature />
      </div>
    </section>
  );
}

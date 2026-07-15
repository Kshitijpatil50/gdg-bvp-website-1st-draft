import { CursorTracker } from '@/components/cursor-tracker';
import { Hero } from '@/components/hero';
import { ActivityHeatmap } from '@/components/heatmap';
import { Events } from '@/components/events';
import { Teams } from '@/components/teams';
import { Join } from '@/components/join';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main className="relative w-full">
      <CursorTracker />
      <Hero />
      <ActivityHeatmap />
      <Events />
      <Teams />
      <Join />
      <Footer />
    </main>
  );
}

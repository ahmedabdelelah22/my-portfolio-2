import { personal } from '../data';

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 py-8 text-center text-xs text-slate-400 dark:text-slate-600 mb-8">
      © 2026 {personal.name} · Full-Stack Developer · Mansoura, Egypt
    </footer>
  );
}

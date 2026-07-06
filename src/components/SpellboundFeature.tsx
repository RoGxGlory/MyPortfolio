import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/types/project";

const DISPLAY = "'Cinzel Decorative', 'Cinzel', serif";
const SERIF = "'Cormorant Garamond', 'Cinzel', serif";

/**
 * Grimoire-themed feature card that carries SpellBound: Survival's own
 * landing-page aesthetic — Cinzel display type, arcane amber/violet accents,
 * blood-red hover, corner-bracket call-to-action button.
 */
const SpellboundFeature = ({ project }: { project: Project }) => {
  return (
    <div className="max-w-6xl mx-auto mb-12">
      <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-[#070509] shadow-[0_0_60px_-15px_rgba(139,92,246,0.4)]">
        {/* Live badge */}
        <div className="absolute top-4 right-4 z-20">
          <span
            className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-amber-500/90 text-black uppercase tracking-[0.25em]"
            style={{ fontFamily: DISPLAY }}
          >
            ✦ Live Game
          </span>
        </div>

        <div className="grid md:grid-cols-2">
          {/* Cover art */}
          <div className="relative min-h-[300px]">
            <img
              src={project.image}
              alt={`${project.title} — key art`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#070509]/90 md:bg-gradient-to-l" />
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-amber-600" />
              <span
                className="text-[10px] uppercase tracking-[0.4em] text-amber-300/80"
                style={{ fontFamily: DISPLAY }}
              >
                Awaits the reckoning · MMXXVI
              </span>
            </div>

            <h3
              className="text-4xl md:text-5xl font-black leading-[0.95] text-stone-100"
              style={{ fontFamily: DISPLAY }}
            >
              SPELLBOUND
              <span className="mt-1 block bg-gradient-to-b from-violet-400 via-fuchsia-600 to-purple-900 bg-clip-text text-transparent">
                SURVIVAL
              </span>
            </h3>

            <p
              className="mt-5 text-lg italic leading-relaxed text-stone-300"
              style={{ fontFamily: SERIF }}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 my-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-3 py-1 rounded-full border border-amber-500/30 text-amber-200/90 uppercase tracking-[0.2em]"
                  style={{ fontFamily: DISPLAY }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden border-2 border-amber-700/60 bg-stone-950 px-8 py-4 transition-colors duration-500 hover:border-violet-500"
                >
                  <span className="pointer-events-none absolute inset-0 bg-violet-950/0 transition-colors duration-500 group-hover:bg-violet-900/30" />
                  <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-amber-600/70 transition-colors group-hover:border-violet-400" />
                  <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-amber-600/70 transition-colors group-hover:border-violet-400" />
                  <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-amber-600/70 transition-colors group-hover:border-violet-400" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-amber-600/70 transition-colors group-hover:border-violet-400" />
                  <span
                    className="relative flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-stone-100 group-hover:text-violet-200"
                    style={{ fontFamily: DISPLAY }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Claim thy soul
                  </span>
                </a>
              )}

              <Link
                to={`/project/${project.id}`}
                className="group flex items-center gap-3 px-2 py-3"
              >
                <span
                  className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300/80 transition-colors group-hover:text-stone-100"
                  style={{ fontFamily: DISPLAY }}
                >
                  View details
                </span>
                <ArrowRight className="w-4 h-4 text-amber-300/80 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpellboundFeature;

import { Download, Monitor, HardDrive, Info, User, Disc3, Package, ExternalLink, Smartphone } from "lucide-react";
import type { Project } from "@/types/project";

const DISPLAY = "'Cinzel Decorative', 'Cinzel', serif";
const SERIF = "'Cormorant Garamond', 'Cinzel', serif";

interface DownloadGameCardProps {
  project: Project;
}

/**
 * A polished, production-ready download card for shipped PC builds.
 * Styled to match the dark, immersive grimoire aesthetic of SpellBound: Survival.
 */
const DownloadGameCard = ({ project }: DownloadGameCardProps) => {
  const download = project.download;

  if (!download) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-[#070509]/95 shadow-[0_0_60px_-15px_rgba(139,92,246,0.35)]">
      {/* Subtle arcane vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.08),transparent_50%)]" />

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-8 bg-amber-600" />
              <span
                className="text-[10px] uppercase tracking-[0.35em] text-amber-300/80"
                style={{ fontFamily: DISPLAY }}
              >
                Shipped Build
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl font-black text-stone-100"
              style={{ fontFamily: DISPLAY }}
            >
              Download <span className="text-amber-400/90">{project.title}</span>
            </h2>
            <p
              className="mt-1 text-stone-400 italic"
              style={{ fontFamily: SERIF }}
            >
              By {download.developer} · {download.version}
            </p>
          </div>

          {/* Primary CTA */}
          <a
            href={download.url}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden border-2 border-amber-700/60 bg-stone-950 px-6 py-4 transition-colors duration-500 hover:border-violet-500 md:shrink-0"
          >
            <span className="pointer-events-none absolute inset-0 bg-violet-950/0 transition-colors duration-500 group-hover:bg-violet-900/30" />
            <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-amber-600/70 transition-colors group-hover:border-violet-400" />
            <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-amber-600/70 transition-colors group-hover:border-violet-400" />
            <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-amber-600/70 transition-colors group-hover:border-violet-400" />
            <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-amber-600/70 transition-colors group-hover:border-violet-400" />
            <Download className="relative h-5 w-5 text-stone-100 transition-transform group-hover:translate-y-0.5" />
            <span
              className="relative text-sm font-bold uppercase tracking-[0.25em] text-stone-100 group-hover:text-violet-200"
              style={{ fontFamily: DISPLAY }}
            >
              {download.label}
            </span>
          </a>

          {/* Store links */}
          {(download.playStoreUrl || download.steamUrl) && (
            <div className="flex flex-col gap-2 md:items-end">
              <span
                className="text-[10px] uppercase tracking-[0.25em] text-stone-500"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Also available on
              </span>
              <div className="flex flex-wrap gap-2">
                {download.playStoreUrl && (
                  <a
                    href={download.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-950/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-200/90 transition-colors hover:border-emerald-400/60 hover:bg-emerald-950/50"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    <Smartphone className="w-4 h-4" />
                    Google Play
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                )}
                {download.steamUrl && (
                  <a
                    href={download.steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-950/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-blue-200/90 transition-colors hover:border-blue-400/60 hover:bg-blue-950/50"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M11.979 0C5.369 0 0 5.367 0 11.979c0 5.45 3.445 10.073 8.313 11.809.1-.045.159-.138.159-.251v-2.062c-3.995.486-5.183-1.932-5.183-1.932-.701-1.78-1.713-2.254-1.713-2.254-1.401-.958.106-.94.106-.94 1.549.109 2.364 1.59 2.364 1.59 1.376 2.358 3.609 1.678 4.493 1.281.14-.998.538-1.679.979-2.064-3.188-.362-6.543-1.594-6.543-7.094 0-1.567.559-2.848 1.477-3.85-.148-.362-.64-1.819.14-3.791 0 0 1.205-.386 3.948 1.47 1.145-.318 2.373-.477 3.593-.482 1.22.005 2.449.164 3.598.482 2.74-1.856 3.943-1.47 3.943-1.47.782 1.972.29 3.429.142 3.791.92 1.002 1.475 2.283 1.475 3.85 0 5.513-3.359 6.727-6.557 7.082.518.446.978 1.324.978 2.67v3.953c0 .115.059.208.158.253 4.864-1.738 8.303-6.357 8.303-11.807C23.958 5.367 18.589 0 11.979 0z" />
                    </svg>
                    Steam
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Quick spec badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <SpecBadge icon={<Monitor className="w-3.5 h-3.5" />} label={download.platform} />
          <SpecBadge icon={<Package className="w-3.5 h-3.5" />} label={`Download: ${download.fileSize}`} />
          <SpecBadge icon={<HardDrive className="w-3.5 h-3.5" />} label={`Disk Space: ${download.storageRequired}`} />
          <SpecBadge icon={<User className="w-3.5 h-3.5" />} label={`Developer: ${download.developer}`} />
        </div>

        {/* System / storage details grid */}
        <div className="rounded-xl border border-amber-500/10 bg-stone-950/60 p-4 md:p-5">
          <h3
            className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300/80 mb-4"
            style={{ fontFamily: DISPLAY }}
          >
            System & Storage Details
          </h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <DetailItem label="Platform" value={download.platform} />
            <DetailItem label="Installer" value={`~${download.fileSize} (.exe)`} />
            <DetailItem label="Installed Footprint" value={`${download.installedSize}`} />
            <DetailItem label="Free Space Recommended" value={`~${download.storageRequired}`} />
          </dl>
        </div>

        {/* Windows SmartScreen / indie build notice */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-950/20 p-4">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-400/80" />
          <p className="text-sm leading-relaxed text-stone-300" style={{ fontFamily: SERIF }}>
            <strong className="text-stone-100">Indie Developer Notice:</strong> Because this installer is freshly built and unsigned, Windows SmartScreen may show &ldquo;Windows protected your PC&rdquo;. Simply click <strong className="text-stone-100">More info</strong> → <strong className="text-stone-100">Run anyway</strong> to launch the setup.
          </p>
        </div>
      </div>
    </div>
  );
};

const SpecBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-stone-950/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-200/90"
    style={{ fontFamily: "'Cinzel', serif" }}
  >
    {icon}
    {label}
  </span>
);

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <dt className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
      {label}
    </dt>
    <dd className="text-sm font-medium text-stone-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {value}
    </dd>
  </div>
);

export default DownloadGameCard;

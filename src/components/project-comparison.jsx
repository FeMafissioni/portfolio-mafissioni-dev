import { useEffect, useMemo, useState } from "react";

function ComparisonImage({ section, labels, fallbackSrc, fallbackAlt }) {
  const [position, setPosition] = useState(50);
  const [oldFailed, setOldFailed] = useState(false);
  const [newFailed, setNewFailed] = useState(false);

  useEffect(() => {
    setPosition(50);
    setOldFailed(false);
    setNewFailed(false);
  }, [section.id]);

  if (newFailed) {
    if (!fallbackSrc) {
      return null;
    }

    return (
      <div className="overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22]">
        <img
          src={fallbackSrc}
          alt={fallbackAlt}
          className="h-72 w-full bg-[#0C1017] object-contain sm:h-80"
          loading="lazy"
        />
      </div>
    );
  }

  if (oldFailed) {
    return (
      <div className="overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22]">
        <img
          src={section.newSrc}
          alt={section.newAlt}
          className="h-72 w-full bg-[#0C1017] object-contain sm:h-80"
          loading="lazy"
          onError={() => setNewFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22]">
        <img
          src={section.newSrc}
          alt={section.newAlt}
          className="h-72 w-full bg-[#0C1017] object-contain sm:h-80"
          loading="lazy"
          onError={() => setNewFailed(true)}
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={section.oldSrc}
            alt={section.oldAlt}
            className="h-72 w-full bg-[#0C1017] object-contain sm:h-80"
            loading="lazy"
            onError={() => setOldFailed(true)}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90"
          style={{ left: `calc(${position}% - 1px)` }}
        />

        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-[#0F1115]/85 px-3 py-1 text-xs font-semibold text-[#FCA5A5]">
          {labels.old}
        </div>

        <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-[#0F1115]/85 px-3 py-1 text-xs font-semibold text-[#86EFAC]">
          {labels.new}
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={labels.slider}
        className="w-full accent-[#34D399]"
      />
    </div>
  );
}

function ProjectComparison({ sections, labels, fallbackSrc, fallbackAlt }) {
  const firstSection = sections[0] ?? null;
  const [activeId, setActiveId] = useState(firstSection?.id ?? "");

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeId) ?? firstSection,
    [activeId, firstSection, sections]
  );

  if (!activeSection) {
    if (!fallbackSrc) {
      return null;
    }

    return (
      <div className="overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22]">
        <img
          src={fallbackSrc}
          alt={fallbackAlt}
          className="h-72 w-full bg-[#0C1017] object-contain sm:h-80"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div
        role="tablist"
        aria-label={labels.tablist}
        className="inline-flex rounded-full border border-[#2A2F38] bg-[#0F1115] p-1"
      >
        {sections.map((section) => {
          const isActive = section.id === activeSection.id;

          return (
            <button
              key={section.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(section.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-[#34D399] text-[#06291E]"
                  : "text-[#A1A1AA] hover:text-[#E5E7EB]"
              }`}
            >
              {section.label}
            </button>
          );
        })}
      </div>

      <ComparisonImage
        section={activeSection}
        labels={labels}
        fallbackSrc={fallbackSrc}
        fallbackAlt={fallbackAlt}
      />
    </div>
  );
}

export { ProjectComparison };

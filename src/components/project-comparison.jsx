import { useEffect, useId, useMemo, useRef, useState } from "react";

function ComparisonImage({ section, labels, fallbackSrc, fallbackAlt }) {
  const [position, setPosition] = useState(50);
  const [oldFailed, setOldFailed] = useState(false);
  const [newFailed, setNewFailed] = useState(false);
  const sectionFallbackSrc = !oldFailed ? section.oldSrc : fallbackSrc;
  const sectionFallbackAlt = !oldFailed ? section.oldAlt : fallbackAlt;

  useEffect(() => {
    setPosition(50);
    setOldFailed(false);
    setNewFailed(false);
  }, [section.id]);

  if (newFailed) {
    if (!sectionFallbackSrc) {
      return null;
    }

    return (
      <div className="overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22]">
        <img
          src={sectionFallbackSrc}
          alt={sectionFallbackAlt}
          className="h-72 w-full bg-[#0C1017] object-contain sm:h-80"
          loading="lazy"
          onError={() => {
            if (!oldFailed) {
              setOldFailed(true);
              return;
            }

            setNewFailed(true);
          }}
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
      <div className="relative h-72 overflow-hidden rounded-2xl border border-[#2A2F38] bg-[#171B22] sm:h-80">
        <img
          src={section.newSrc}
          alt={section.newAlt}
          className="absolute inset-0 h-full w-full bg-[#0C1017] object-contain"
          loading="lazy"
          onError={() => setNewFailed(true)}
        />

        <img
          src={section.oldSrc}
          alt={section.oldAlt}
          className="absolute inset-0 h-full w-full bg-[#0C1017] object-contain"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          loading="lazy"
          onError={() => setOldFailed(true)}
        />

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
  const comparisonId = useId();
  const firstSection = sections[0] ?? null;
  const [activeId, setActiveId] = useState(firstSection?.id ?? "");
  const tabRefs = useRef(new Map());

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeId) ?? firstSection,
    [activeId, firstSection, sections]
  );
  const activeIndex = sections.findIndex((section) => section.id === activeSection?.id);

  useEffect(() => {
    if (!activeSection && firstSection) {
      setActiveId(firstSection.id);
      return;
    }

    if (activeSection && activeId !== activeSection.id) {
      setActiveId(activeSection.id);
    }
  }, [activeId, activeSection, firstSection]);

  const focusTab = (sectionId) => {
    const nextTab = tabRefs.current.get(sectionId);

    if (nextTab) {
      nextTab.focus();
    }
  };

  const moveFocus = (nextIndex) => {
    const nextSection = sections[nextIndex];

    if (!nextSection) {
      return;
    }

    setActiveId(nextSection.id);
    focusTab(nextSection.id);
  };

  const handleTabKeyDown = (event) => {
    if (!sections.length) {
      return;
    }

    let nextIndex = activeIndex;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = activeIndex === sections.length - 1 ? 0 : activeIndex + 1;
        break;
      case "ArrowLeft":
        nextIndex = activeIndex <= 0 ? sections.length - 1 : activeIndex - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = sections.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    moveFocus(nextIndex);
  };

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
        aria-orientation="horizontal"
        className="inline-flex rounded-full border border-[#2A2F38] bg-[#0F1115] p-1"
      >
        {sections.map((section) => {
          const isActive = section.id === activeSection.id;
          const tabId = `${comparisonId}-tab-${section.id}`;
          const panelId = `${comparisonId}-panel-${section.id}`;

          return (
            <button
              key={section.id}
              type="button"
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(section.id)}
              onKeyDown={handleTabKeyDown}
              ref={(node) => {
                if (node) {
                  tabRefs.current.set(section.id, node);
                  return;
                }

                tabRefs.current.delete(section.id);
              }}
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

      {sections.map((section) => {
        const isActive = section.id === activeSection.id;

        return (
          <div
            key={section.id}
            id={`${comparisonId}-panel-${section.id}`}
            role="tabpanel"
            aria-labelledby={`${comparisonId}-tab-${section.id}`}
            hidden={!isActive}
          >
            {isActive ? (
              <ComparisonImage
                section={section}
                labels={labels}
                fallbackSrc={fallbackSrc}
                fallbackAlt={fallbackAlt}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export { ProjectComparison };

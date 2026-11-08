import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Props = { images: readonly string[]; label: string; photo?: boolean };

/** Galeria em loop, com arraste e reprodução automática a cada 3 segundos. */
export function AutoCarousel({ images, label, photo = false }: Props) {
  const [viewportRef, api] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState(0);

  const sync = useCallback(() => setSelected(api?.selectedScrollSnap() ?? 0), [api]);

  useEffect(() => {
    if (!api) return;
    const startDrag = () => setDragging(true);
    const endDrag = () => setDragging(false);
    sync();
    api.on("select", sync).on("reInit", sync).on("pointerDown", startDrag).on("pointerUp", endDrag);
    return () => {
      api
        .off("select", sync)
        .off("reInit", sync)
        .off("pointerDown", startDrag)
        .off("pointerUp", endDrag);
    };
  }, [api, sync]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const respectMotion = () => {
      if (media.matches) setPlaying(false);
    };
    const visibility = () => setVisible(!document.hidden);
    respectMotion();
    visibility();
    media.addEventListener("change", respectMotion);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      media.removeEventListener("change", respectMotion);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  useEffect(() => {
    if (!api || !playing || hovered || focused || dragging || !visible) return;
    const timer = window.setInterval(() => api.scrollNext(), 3000);
    return () => window.clearInterval(timer);
  }, [api, playing, hovered, focused, dragging, visible]);

  return (
    <div
      className={`ref-carousel${photo ? " ref-carousel--photos" : ""}`}
      role="region"
      aria-roledescription="carrossel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="ref-carousel-viewport" ref={viewportRef}>
        <div className="ref-carousel-track">
          {images.map((src, index) => (
            <div
              className="ref-carousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${images.length}`}
              key={src}
            >
              <img
                src={src}
                alt={`${label} — imagem ${index + 1}`}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="ref-carousel-controls">
        <button
          type="button"
          aria-label={`Imagem anterior: ${label}`}
          onClick={() => api?.scrollPrev()}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <span className="ref-carousel-counter" aria-live="off">
          {selected + 1} / {images.length}
        </span>
        <button
          type="button"
          aria-label={`Próxima imagem: ${label}`}
          onClick={() => api?.scrollNext()}
        >
          <ChevronRight aria-hidden="true" />
        </button>
        <button
          type="button"
          className="ref-carousel-play"
          aria-label={`${playing ? "Pausar" : "Reproduzir"} carrossel: ${label}`}
          aria-pressed={playing}
          onClick={() => setPlaying((value) => !value)}
        >
          {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}

import { X } from "lucide-react";
import { useEffect } from "react";

export function ReelModal({
  open,
  onClose,
  title = "StarWorks Reel",
  src,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  src?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 px-4"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-6 top-6 text-foreground/70 transition-colors hover:text-foreground"
      >
        <X className="h-7 w-7" strokeWidth={1.2} />
      </button>
      <div
        className="w-full max-w-5xl border border-border bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video w-full">
          {src ? (
            <iframe
              src={src}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
              <div className="label text-muted-foreground">{title}</div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Video placeholder — drop in the StarWorks reel embed URL to play it here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

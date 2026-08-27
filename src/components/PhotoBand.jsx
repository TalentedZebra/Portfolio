export default function PhotoBand({ src, alt, caption }) {
  return (
    <figure className="relative left-1/2 h-64 w-screen -translate-x-1/2 overflow-hidden sm:h-80 lg:h-96">
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 30%, transparent 70%, rgba(0,0,0,0.55))',
        }}
      />
      {caption && (
        <figcaption className="absolute bottom-5 left-6 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/80 sm:left-10 lg:left-14">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default function Logo({ light = false, className = 'h-8' }) {
  const src = light ? '/assets/logo-horizontal-light.png' : '/assets/logo-horizontal.png'
  return <img src={src} alt="Mainstay Partners" className={`${className} w-auto select-none`} />
}

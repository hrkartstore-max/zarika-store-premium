import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };
function Base({ size = 22, children, ...props }: IconProps & { children: React.ReactNode }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.35} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{children}</svg>;
}
export function BagIcon(props: IconProps) { return <Base {...props}><path d="M5 8.5h14l1 12H4l1-12Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></Base>; }
export function UserIcon(props: IconProps) { return <Base {...props}><circle cx="12" cy="7.5" r="3.3"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/></Base>; }
export function SearchIcon(props: IconProps) { return <Base {...props}><circle cx="10.8" cy="10.8" r="6.3"/><path d="m15.5 15.5 4.2 4.2"/></Base>; }
export function HeartIcon(props: IconProps) { return <Base {...props}><path d="M20.4 8.7c0 4.3-8.4 10-8.4 10s-8.4-5.7-8.4-10a4.4 4.4 0 0 1 8.4-1.6 4.4 4.4 0 0 1 8.4 1.6Z"/></Base>; }
export function StarIcon(props: IconProps) { return <Base {...props}><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/></Base>; }
export function TruckIcon(props: IconProps) { return <Base {...props}><path d="M2.5 5.5h12v11h-12zM14.5 9h4l3 3v4.5h-7"/><circle cx="6.5" cy="18" r="1.8"/><circle cx="18" cy="18" r="1.8"/></Base>; }
export function ReturnIcon(props: IconProps) { return <Base {...props}><path d="M8 7 4 11l4 4"/><path d="M4.5 11H15a4.5 4.5 0 0 1 0 9h-2"/><path d="M16 4h4v4"/></Base>; }
export function LockIcon(props: IconProps) { return <Base {...props}><rect x="4.5" y="10" width="15" height="11" rx="1"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v3"/></Base>; }
export function DiamondIcon(props: IconProps) { return <Base {...props}><path d="m3 9 4-5h10l4 5-9 11L3 9Z"/><path d="M3 9h18M7 4l5 16 5-16M7 4l-4 5m14-5 4 5"/></Base>; }
export function SparkleIcon(props: IconProps) { return <Base {...props}><path d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/></Base>; }
export const Diamond = DiamondIcon;
export const Sparkle = SparkleIcon;

import { FaWindows, FaApple, FaAndroid, FaLinux, FaChrome } from "react-icons/fa";

const ICONS = {
  windows: FaWindows,
  apple: FaApple,
  android: FaAndroid,
  linux: FaLinux,
  chrome: FaChrome,
};

export default function BrandIcon({ kind, size = 24, className = "" }) {
  const Icon = ICONS[kind] || FaWindows;
  return <Icon size={size} className={className} />;
}

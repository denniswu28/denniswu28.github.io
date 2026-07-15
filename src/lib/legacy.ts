export const legacyFragmentMap: Record<string, string> = {
  '#quant-profile': '/lab/trading-systems-execution/',
  '#experience': '/quant/#experience',
  '#projects': '/quant/#independent-projects',
  '#research': '/academic/',
  '#publications': '/academic/#publications',
  '#skills': '/quant/#capabilities',
  '#education': '/academic/#education',
  '#distinctions': '/academic/#recognition',
  '#contact': '/#contact'
};

export function resolveLegacyFragment(hash: string): string | undefined {
  return legacyFragmentMap[hash];
}

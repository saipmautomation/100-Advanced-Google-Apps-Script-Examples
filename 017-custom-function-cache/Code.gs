function EX17_CACHED_LEN(input) {
  const cache = CacheService.getScriptCache();
  const key = 'len:' + input;
  const hit = cache.get(key);
  if (hit) return Number(hit);
  const val = String(input ?? '').length;
  cache.put(key, String(val), 300);
  return val;
}

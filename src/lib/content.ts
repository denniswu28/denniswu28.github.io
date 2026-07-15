export type PublicEntry = {
  id: string;
  data: {
    id: string;
    status: 'published' | 'draft' | 'archived';
    draft?: boolean;
    relatedIds?: string[];
    publishedAt?: Date;
  };
};

export function isPublished<T extends PublicEntry>(entry: T): boolean {
  return entry.data.status === 'published' && entry.data.draft !== true;
}

export function filterPublished<T extends PublicEntry>(entries: T[]): T[] {
  return entries.filter(isPublished);
}

export function sortNewest<T extends PublicEntry>(entries: T[]): T[] {
  return [...entries].sort((a, b) => {
    const aTime = a.data.publishedAt?.getTime() ?? 0;
    const bTime = b.data.publishedAt?.getTime() ?? 0;
    return bTime - aTime;
  });
}

export function unresolvedRelations(entries: PublicEntry[]): string[] {
  const ids = new Set(entries.map((entry) => entry.data.id));
  return entries.flatMap((entry) =>
    (entry.data.relatedIds ?? [])
      .filter((id) => !ids.has(id))
      .map((id) => `${entry.data.id}->${id}`)
  );
}

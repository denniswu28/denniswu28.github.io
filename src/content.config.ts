import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const status = z.enum(['published', 'draft', 'archived']);
const link = z.object({ label: z.string(), url: z.string() });
const common = {
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  status,
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  relatedIds: z.array(z.string()).default([]),
  externalLinks: z.array(link).default([])
};

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    ...common,
    category: z.enum(['quant-research', 'physics', 'ai-safety']),
    tags: z.array(z.string()),
    abstract: z.string(),
    readingMinutes: z.number().int().positive(),
    citations: z.array(link).default([]),
    disclosures: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiments' }),
  schema: z.object({
    ...common,
    question: z.string(),
    provenance: z.string(),
    dateRange: z.string(),
    method: z.string(),
    parameters: z.array(z.string()),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      definition: z.string()
    })),
    results: z.string(),
    limitations: z.array(z.string()),
    codeUrl: z.string().optional(),
    freshness: z.enum(['historical', 'static', 'planned']),
    lastUpdated: z.coerce.date()
  })
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    ...common,
    citation: z.string(),
    venue: z.string(),
    abstract: z.string(),
    contribution: z.string(),
    publicationStatus: z.string(),
    doiUrl: z.string().optional(),
    arxivUrl: z.string().optional(),
    journalUrl: z.string().optional(),
    pdfUrl: z.string().optional(),
    image: z.string().optional()
  })
});

const theses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/theses' }),
  schema: z.object({
    ...common,
    security: z.string(),
    thesisDate: z.coerce.date(),
    entryRange: z.string().optional(),
    coreThesis: z.string(),
    catalyst: z.string(),
    variantView: z.string(),
    risks: z.array(z.string()),
    invalidatingEvidence: z.array(z.string()),
    positionChanges: z.array(z.string()),
    exitRationale: z.string(),
    finalOutcome: z.string(),
    postmortem: z.string(),
    privacy: z.enum(['closed-position', 'delayed', 'aggregated', 'redacted']),
    returnMethodology: z.string(),
    equityDataUrl: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

const documents = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/documents' }),
  schema: z.object({
    ...common,
    documentType: z.enum(['quant-resume', 'academic-cv', 'publication', 'project-brief', 'presentation']),
    fileUrl: z.string(),
    preview: z.boolean().default(false),
    previewUrl: z.string().optional()
  })
});

export const collections = { articles, experiments, publications, theses, documents };

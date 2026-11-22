/**
 * ChinaWao SEO / AEO / GEO Authoritative Corpus Engine
 * Implements the 5 Authoritative Corpus Attributes across JSON-LD (@graph), Markdown (.md),
 * llms.txt / llms-full.txt, sitemap.xml, and MCP responses:
 *   1. Authoritative Government Data & Mainstream Media Provenance
 *   2. Multimodal Machine Signals (ImageObject, Audio/Pronunciation, GeoCoordinates, Show Cards)
 *   3. Structured Knowledge Curation (HowTo, FAQPage, ClaimReview, DataCatalog/Dataset)
 *   4. City Knowledge Graph (@id, Wikidata sameAs, GB/T 2260 MCA codes, containsPlace edges)
 *   5. Fact-Level Traceable Provenance (citation URLs, authority classes, verified timestamps)
 */
import type { GuideDefinition } from '@data/paradigm-e/guides';
import type { EntityProfile } from '@data/paradigm-e/entities';
import {
  GOV_PORTALS,
  type ComparisonPage,
  type IntercityRoute,
  type PersonaLanding,
  type ScenarioStack,
} from '@data/paradigm-e/collections';

export type AuthorityKind =
  | 'gov_official'
  | 'mainstream_media'
  | 'infrastructure_operator'
  | 'field_verified';

export interface AuthoritySource {
  id: string;
  name: string;
  nameZh: string;
  kind: AuthorityKind;
  schemaType: 'GovernmentOrganization' | 'NewsMediaOrganization' | 'Organization';
  url: string;
  sameAs?: string;
}

/** Curated Registry of Primary Government Authorities, Mainstream Media & Statutory Operators */
export const AUTHORITY_SOURCES: Record<string, AuthoritySource> = {
  nia: {
    id: 'nia',
    name: 'National Immigration Administration (NIA 12367)',
    nameZh: '国家移民管理局（12367）',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'https://en.nia.gov.cn/',
    sameAs: 'https://www.wikidata.org/wiki/Q50741471',
  },
  state_council: {
    id: 'state_council',
    name: 'The State Council of the People’s Republic of China',
    nameZh: '中华人民共和国国务院',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'https://english.www.gov.cn/',
    sameAs: 'https://www.wikidata.org/wiki/Q59261',
  },
  nbs: {
    id: 'nbs',
    name: 'National Bureau of Statistics of China (NBS)',
    nameZh: '中华人民共和国国家统计局',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'https://data.stats.gov.cn/english/',
    sameAs: 'https://www.wikidata.org/wiki/Q1509442',
  },
  npc: {
    id: 'npc',
    name: 'National People’s Congress — National Laws Database',
    nameZh: '全国人大国家法律法规数据库',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'https://flk.npc.gov.cn/',
    sameAs: 'https://www.wikidata.org/wiki/Q19211',
  },
  samr_gsxt: {
    id: 'samr_gsxt',
    name: 'SAMR National Enterprise Credit Information Publicity System (GSXT)',
    nameZh: '国家市场监督管理总局企业信用信息公示系统',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'https://www.gsxt.gov.cn/',
    sameAs: 'https://www.wikidata.org/wiki/Q51101122',
  },
  samr_openstd: {
    id: 'samr_openstd',
    name: 'SAMR National Public Service Platform for Standards (GB)',
    nameZh: '全国标准信息公共服务平台',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'https://openstd.samr.gov.cn/',
  },
  cnca: {
    id: 'cnca',
    name: 'Certification and Accreditation Administration of China (CNCA / CCC)',
    nameZh: '国家认证认可监督管理委员会',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'http://cx.cnca.cn/',
  },
  nmpa: {
    id: 'nmpa',
    name: 'National Medical Products Administration (NMPA)',
    nameZh: '国家药品监督管理局',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'https://www.nmpa.gov.cn/datasearch/home-index.html',
  },
  gacc: {
    id: 'gacc',
    name: 'General Administration of Customs of China (GACC)',
    nameZh: '中华人民共和国海关总署',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'http://english.customs.gov.cn/',
    sameAs: 'https://www.wikidata.org/wiki/Q1501645',
  },
  caac: {
    id: 'caac',
    name: 'Civil Aviation Administration of China (CAAC)',
    nameZh: '中国民用航空局',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'https://uom.caac.gov.cn/',
    sameAs: 'https://www.wikidata.org/wiki/Q1094462',
  },
  mofcom: {
    id: 'mofcom',
    name: 'Ministry of Commerce of China (MOFCOM)',
    nameZh: '中华人民共和国商务部',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'https://zhlzh.mofcom.gov.cn/',
    sameAs: 'https://www.wikidata.org/wiki/Q1042167',
  },
  sta: {
    id: 'sta',
    name: 'State Taxation Administration of China (STA)',
    nameZh: '国家税务总局',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'https://www.chinatax.gov.cn/eng/',
  },
  safe: {
    id: 'safe',
    name: 'State Administration of Foreign Exchange (SAFE)',
    nameZh: '国家外汇管理局',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'https://www.safe.gov.cn/en/',
  },
  xinhua: {
    id: 'xinhua',
    name: 'Xinhua News Agency',
    nameZh: '新华社',
    kind: 'mainstream_media',
    schemaType: 'NewsMediaOrganization',
    url: 'https://english.news.cn/',
    sameAs: 'https://www.wikidata.org/wiki/Q204839',
  },
  chinadaily: {
    id: 'chinadaily',
    name: 'China Daily',
    nameZh: '中国日报',
    kind: 'mainstream_media',
    schemaType: 'NewsMediaOrganization',
    url: 'https://www.chinadaily.com.cn/',
    sameAs: 'https://www.wikidata.org/wiki/Q851422',
  },
  cgtn: {
    id: 'cgtn',
    name: 'CGTN (China Global Television Network)',
    nameZh: '中国国际电视台（CGTN）',
    kind: 'mainstream_media',
    schemaType: 'NewsMediaOrganization',
    url: 'https://www.cgtn.com/',
    sameAs: 'https://www.wikidata.org/wiki/Q1073580',
  },
  railway12306: {
    id: 'railway12306',
    name: 'China State Railway Group (Railway 12306)',
    nameZh: '中国国家铁路集团（铁路 12306）',
    kind: 'infrastructure_operator',
    schemaType: 'Organization',
    url: 'https://www.12306.cn/en/index.html',
    sameAs: 'https://www.wikidata.org/wiki/Q1073530',
  },
  palace_museum: {
    id: 'palace_museum',
    name: 'The Palace Museum (Forbidden City Official)',
    nameZh: '故宫博物院官网',
    kind: 'gov_official',
    schemaType: 'GovernmentOrganization',
    url: 'https://intl.dpm.org.cn/',
    sameAs: 'https://www.wikidata.org/wiki/Q2047427',
  },
  cftc: {
    id: 'cftc',
    name: 'China Foreign Trade Centre (Canton Fair Official)',
    nameZh: '中国对外贸易中心（广交会官网）',
    kind: 'gov_official',
    schemaType: 'Organization',
    url: 'https://www.cantonfair.org.cn/en-US',
  },
  alipay_wechat: {
    id: 'alipay_wechat',
    name: 'PBOC / Ant International (Alipay) & Tenpay (WeChat Pay) Official Guides',
    nameZh: '中国人民银行 / 支付宝与微信支付外卡指南',
    kind: 'infrastructure_operator',
    schemaType: 'Organization',
    url: 'http://www.pbc.gov.cn/en/',
  },
};

export interface ResolvedCitation {
  label: string;
  name: string;
  kind: AuthorityKind;
  schemaType: 'GovernmentOrganization' | 'NewsMediaOrganization' | 'Organization';
  url: string;
  sameAs?: string;
  verifiedDate?: string;
}

/** Resolve any free-text source label into a traceable authoritative citation with canonical URL */
export function resolveAuthoritySource(
  rawLabel: string,
  verifiedDate?: string,
  fallbackUrl?: string,
): ResolvedCitation {
  const s = rawLabel.toLowerCase();
  const pick = (src: AuthoritySource): ResolvedCitation => ({
    label: rawLabel,
    name: src.name,
    kind: src.kind,
    schemaType: src.schemaType,
    url: fallbackUrl || src.url,
    sameAs: src.sameAs,
    verifiedDate,
  });

  if (s.includes('nia') || s.includes('12367') || s.includes('exit-entry') || s.includes('immigration')) return pick(AUTHORITY_SOURCES.nia);
  if (s.includes('state council') || s.includes('gov.cn')) return pick(AUTHORITY_SOURCES.state_council);
  if (s.includes('12306') || s.includes('railway')) return pick(AUTHORITY_SOURCES.railway12306);
  if (s.includes('samr') || s.includes('gsxt') || s.includes('gb 32100')) return pick(AUTHORITY_SOURCES.samr_gsxt);
  if (s.includes('openstd') || s.includes('gb standard')) return pick(AUTHORITY_SOURCES.samr_openstd);
  if (s.includes('cnca') || s.includes('3c') || s.includes('ccc')) return pick(AUTHORITY_SOURCES.cnca);
  if (s.includes('nmpa')) return pick(AUTHORITY_SOURCES.nmpa);
  if (s.includes('customs') || s.includes('gacc')) return pick(AUTHORITY_SOURCES.gacc);
  if (s.includes('caac') || s.includes('drone') || s.includes('aviation')) return pick(AUTHORITY_SOURCES.caac);
  if (s.includes('mofcom') || s.includes('time-honored') || s.includes('laozihao')) return pick(AUTHORITY_SOURCES.mofcom);
  if (s.includes('tax') || s.includes('iit') || s.includes('sta') || s.includes('vat')) return pick(AUTHORITY_SOURCES.sta);
  if (s.includes('safe') || s.includes('provident') || s.includes('social insurance')) return pick(AUTHORITY_SOURCES.safe);
  if (s.includes('npc') || s.includes('civil code') || s.includes('law')) return pick(AUTHORITY_SOURCES.npc);
  if (s.includes('nbs') || s.includes('stats')) return pick(AUTHORITY_SOURCES.nbs);
  if (s.includes('palace museum') || s.includes('forbidden city')) return pick(AUTHORITY_SOURCES.palace_museum);
  if (s.includes('canton') || s.includes('cftc')) return pick(AUTHORITY_SOURCES.cftc);
  if (s.includes('alipay') || s.includes('wechat') || s.includes('pboc')) return pick(AUTHORITY_SOURCES.alipay_wechat);
  if (s.includes('xinhua')) return pick(AUTHORITY_SOURCES.xinhua);
  if (s.includes('china daily')) return pick(AUTHORITY_SOURCES.chinadaily);
  if (s.includes('cgtn')) return pick(AUTHORITY_SOURCES.cgtn);

  return {
    label: rawLabel,
    name: rawLabel,
    kind: fallbackUrl ? 'gov_official' : 'field_verified',
    schemaType: 'Organization',
    url: fallbackUrl || 'https://english.www.gov.cn/',
    verifiedDate,
  };
}

/** Attribute 4: Authoritative Spatial & City Knowledge Graph Anchor Table (WGS-84 + Wikidata + GB/T 2260) */
export interface SpatialGraphAnchor {
  wikidata: string;
  mcaCode?: string;
  lat: number;
  lng: number;
  parentCitySlug?: string;
  provinceName?: string;
  sameAsExtra?: string[];
}

export const SPATIAL_GRAPH_ANCHORS: Record<string, SpatialGraphAnchor> = {
  // Cities
  shanghai: {
    wikidata: 'https://www.wikidata.org/wiki/Q8686',
    mcaCode: '310000',
    lat: 31.2304,
    lng: 121.4737,
    provinceName: 'Shanghai Municipality',
    sameAsExtra: ['https://data.sh.gov.cn/'],
  },
  beijing: {
    wikidata: 'https://www.wikidata.org/wiki/Q956',
    mcaCode: '110000',
    lat: 39.9042,
    lng: 116.4074,
    provinceName: 'Beijing Municipality',
    sameAsExtra: ['https://data.beijing.gov.cn/'],
  },
  chengdu: {
    wikidata: 'https://www.wikidata.org/wiki/Q30002',
    mcaCode: '510100',
    lat: 30.5728,
    lng: 104.0668,
    provinceName: 'Sichuan Province',
    sameAsExtra: ['https://www.cddata.gov.cn/'],
  },
  xian: {
    wikidata: 'https://www.wikidata.org/wiki/Q5826',
    mcaCode: '610100',
    lat: 34.3416,
    lng: 108.9398,
    provinceName: 'Shaanxi Province',
  },
  shenzhen: {
    wikidata: 'https://www.wikidata.org/wiki/Q15174',
    mcaCode: '440300',
    lat: 22.5431,
    lng: 114.0579,
    provinceName: 'Guangdong Province',
    sameAsExtra: ['https://gddata.gd.gov.cn/'],
  },
  // Flagship Attractions
  'forbidden-city': {
    wikidata: 'https://www.wikidata.org/wiki/Q80290',
    lat: 39.9163,
    lng: 116.3972,
    parentCitySlug: 'beijing',
  },
  'mutianyu-great-wall': {
    wikidata: 'https://www.wikidata.org/wiki/Q1348322',
    lat: 40.4319,
    lng: 116.5603,
    parentCitySlug: 'beijing',
  },
  'chengdu-panda-base': {
    wikidata: 'https://www.wikidata.org/wiki/Q1069544',
    lat: 30.7376,
    lng: 104.1463,
    parentCitySlug: 'chengdu',
  },
  'terracotta-warriors': {
    wikidata: 'https://www.wikidata.org/wiki/Q47672',
    lat: 34.3841,
    lng: 109.2785,
    parentCitySlug: 'xian',
  },
};

export function toAbsoluteUrl(origin: string, pathOrUrl?: string): string | undefined {
  if (!pathOrUrl) return undefined;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${origin}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`;
}

export function buildOrgPublisher(origin: string) {
  return {
    '@type': 'Organization',
    '@id': `${origin}/#organization`,
    name: 'ChinaWao',
    url: origin,
    logo: {
      '@type': 'ImageObject',
      url: `${origin}/favicon.svg`,
    },
    knowsAbout: [
      'China 240-Hour Visa-Free Transit',
      'Chinese Government Open Data',
      'China High-Speed Rail 12306',
      'China Cashless Payments',
      'China City Knowledge Graph',
      'Chinese Supplier USCC Due Diligence',
    ],
  };
}

export function buildBreadcrumbSchema(origin: string, items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${origin}${item.url}`,
    })),
  };
}

/** Build Citation Schema.org nodes for JSON-LD */
function toCitationNodes(citations: ResolvedCitation[]) {
  const seen = new Set<string>();
  const unique: ResolvedCitation[] = [];
  for (const c of citations) {
    const key = `${c.name}|${c.url}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(c);
    }
  }
  return unique.map((c) => ({
    '@type': 'CreativeWork',
    name: c.name,
    url: c.url,
    ...(c.verifiedDate ? { dateModified: c.verifiedDate } : {}),
    publisher: {
      '@type': c.schemaType,
      name: c.name,
      url: c.url,
      ...(c.sameAs ? { sameAs: c.sameAs } : {}),
    },
  }));
}

/** Extract deduped traceable citations for a Guide */
export function getGuideCitations(guide: GuideDefinition): ResolvedCitation[] {
  const list: ResolvedCitation[] = guide.hardFacts.map((f) =>
    resolveAuthoritySource(f.source, f.verifiedDate),
  );
  if (guide.rescueItems) {
    for (const item of guide.rescueItems) {
      if (item.sourceAnchor) {
        list.push(resolveAuthoritySource(item.sourceAnchor, item.effectiveDate ?? guide.lastVerified));
      }
    }
  }
  // Always anchor China-level policy & macro briefings with State Council / Xinhua reference when sparse
  if (list.length === 0) {
    list.push(resolveAuthoritySource('State Council', guide.lastVerified));
  }
  const seen = new Set<string>();
  return list.filter((c) => {
    const key = `${c.name}|${c.url}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Extract deduped traceable citations for an Entity */
export function getEntityCitations(entity: EntityProfile): ResolvedCitation[] {
  const list: ResolvedCitation[] = [];
  if (entity.officialUrl) {
    list.push(
      resolveAuthoritySource(
        entity.officialLabel ?? entity.title,
        entity.lastVerified,
        entity.officialUrl,
      ),
    );
  }
  if (entity.complianceData) {
    list.push(
      resolveAuthoritySource(
        entity.complianceData.portalName,
        entity.lastVerified,
        entity.complianceData.portalUrl,
      ),
    );
  }
  if (entity.collection === 'cities') {
    const anchor = SPATIAL_GRAPH_ANCHORS[entity.slug];
    if (anchor?.sameAsExtra?.[0]) {
      list.push({
        label: `${entity.title} Municipal Open Data`,
        name: `${entity.title} Municipal Open Data Platform`,
        kind: 'gov_official',
        schemaType: 'GovernmentOrganization',
        url: anchor.sameAsExtra[0],
        verifiedDate: entity.lastVerified,
      });
    }
    list.push(resolveAuthoritySource('NIA 12367', entity.lastVerified));
  }
  if (list.length === 0) {
    list.push(resolveAuthoritySource('State Council', entity.lastVerified));
  }
  return list;
}

/** Build full SEO + AEO + GEO @graph JSON-LD for a Deep Guide (/guides/[slug]/) */
export function buildGuideJsonLd(
  guide: GuideDefinition,
  origin: string,
  locale: 'en' | 'zh',
  breadcrumbItems: { name: string; url: string }[],
) {
  const isZh = locale === 'zh';
  const canonicalPath = isZh ? `/zh/guides/${guide.slug}/` : `/guides/${guide.slug}/`;
  const canonicalUrl = `${origin}${canonicalPath}`;
  const mdUrl = `${origin}/guides/${guide.slug}.md`;
  const citations = getGuideCitations(guide);
  const imageAbs = toAbsoluteUrl(origin, guide.heroImage ?? '/images/hero.webp');

  const graph: Record<string, unknown>[] = [
    buildOrgPublisher(origin),
    buildBreadcrumbSchema(origin, breadcrumbItems),
    {
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      url: canonicalUrl,
      inLanguage: isZh ? 'zh-CN' : 'en',
      headline: isZh ? guide.titleZh : guide.title,
      alternativeHeadline: isZh ? guide.title : guide.titleZh,
      description: isZh ? guide.leadHookZh : guide.leadHook,
      dateModified: guide.lastVerified,
      publisher: { '@id': `${origin}/#organization` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
      encoding: {
        '@type': 'MediaObject',
        encodingFormat: 'text/markdown',
        contentUrl: mdUrl,
      },
      ...(imageAbs
        ? {
            image: {
              '@type': 'ImageObject',
              contentUrl: imageAbs,
              url: imageAbs,
              caption: isZh ? guide.titleZh : guide.title,
            },
          }
        : {}),
      citation: toCitationNodes(citations),
      isBasedOn: citations.map((c) => c.url),
    },
  ];

  // AEO: Playbook -> HowTo
  if (guide.archetype === 'playbook' && guide.steps?.length) {
    graph.push({
      '@type': 'HowTo',
      '@id': `${canonicalUrl}#howto`,
      name: isZh ? guide.titleZh : guide.title,
      description: isZh ? guide.leadHookZh : guide.leadHook,
      step: guide.steps.map((s, idx) => ({
        '@type': 'HowToStep',
        position: idx + 1,
        name: s.title,
        text: `${s.stopCheck} ${s.summary} ${s.checklist.join(' ')}`,
        url: `${canonicalUrl}#step-${s.number}`,
      })),
    });
  }

  // AEO: Hard Facts -> FAQPage for zero-click answer engines
  if (guide.hardFacts.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: guide.hardFacts.map((f) => ({
        '@type': 'Question',
        name: `${guide.title}: ${f.label}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${f.value} (Source: ${f.source}, verified ${f.verifiedDate}).`,
        },
      })),
    });
  }

  // AEO: Myths vs Facts -> ClaimReview signal
  if (guide.slug === 'myths-vs-facts' && guide.matrixRows?.length) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${canonicalUrl}#claims`,
      name: 'Verified China Fact-Checks',
      itemListElement: guide.matrixRows.map((row, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: row.option,
        description: `${row.bestFor} — ${row.hiddenTrap}`,
      })),
    });
  }

  // AEO + Multimodal: Editorial gallery places -> ItemList of Places
  if (guide.archetype === 'editorial' && guide.galleryItems?.length) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${canonicalUrl}#places`,
      name: isZh ? guide.titleZh : guide.title,
      itemListElement: guide.galleryItems.map((card, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Place',
          name: card.title,
          alternateName: card.chineseName,
          description: card.summary,
          ...(card.href ? { url: `${origin}${card.href}` } : {}),
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

/** Build full City Knowledge Graph & Entity @graph JSON-LD (/cities/*, /attractions/*, /cards/*, etc.) */
export function buildEntityGraphJsonLd(
  entity: EntityProfile,
  origin: string,
  locale: 'en' | 'zh',
  breadcrumbItems: { name: string; url: string }[],
) {
  const isZh = locale === 'zh';
  const canonicalPath = isZh
    ? `/zh/${entity.collection}/${entity.slug}/`
    : `/${entity.collection}/${entity.slug}/`;
  const canonicalUrl = `${origin}${canonicalPath}`;
  const mdUrl =
    entity.collection === 'cities'
      ? `${origin}/cities/${entity.slug}.md`
      : `${origin}/entities/${entity.collection}/${entity.slug}.md`;

  const anchor = SPATIAL_GRAPH_ANCHORS[entity.slug];
  const citations = getEntityCitations(entity);

  const entityType =
    entity.collection === 'cities'
      ? 'City'
      : entity.collection === 'attractions'
        ? 'TouristAttraction'
        : entity.collection === 'errors' || entity.collection === 'how-to-use'
          ? 'HowTo'
          : 'WebPage';

  const sameAs: string[] = [];
  if (anchor?.wikidata) sameAs.push(anchor.wikidata);
  if (anchor?.sameAsExtra) sameAs.push(...anchor.sameAsExtra);
  if (entity.officialUrl) sameAs.push(entity.officialUrl);

  const primaryNode: Record<string, unknown> = {
    '@type': entityType,
    '@id': `${origin}/${entity.collection}/${entity.slug}/#entity`,
    url: canonicalUrl,
    inLanguage: isZh ? 'zh-CN' : 'en',
    name: isZh ? entity.chineseName : entity.title,
    alternateName: [entity.chineseName, entity.title, entity.pinyin].filter(Boolean),
    description: isZh ? entity.taglineZh : entity.tagline,
    dateModified: entity.lastVerified,
    ...(sameAs.length ? { sameAs } : {}),
    ...(anchor?.mcaCode
      ? {
          identifier: {
            '@type': 'PropertyValue',
            propertyID: 'GB/T 2260',
            name: 'China MCA Administrative Division Code',
            value: anchor.mcaCode,
          },
        }
      : {}),
    ...(anchor
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: anchor.lat,
            longitude: anchor.lng,
          },
        }
      : {}),
    ...(anchor?.parentCitySlug
      ? {
          containedInPlace: {
            '@type': 'City',
            '@id': `${origin}/cities/${anchor.parentCitySlug}/#entity`,
            url: `${origin}/cities/${anchor.parentCitySlug}/`,
          },
        }
      : entity.collection === 'cities'
        ? {
            containedInPlace: {
              '@type': 'Country',
              name: 'China',
              sameAs: 'https://www.wikidata.org/wiki/Q148',
            },
          }
        : {}),
    encoding: {
      '@type': 'MediaObject',
      encodingFormat: 'text/markdown',
      contentUrl: mdUrl,
    },
    citation: toCitationNodes(citations),
    isBasedOn: citations.map((c) => c.url),
  };

  // City Knowledge Graph: attach Universities, International Hospitals, Landmarks & Ports via containsPlace
  if (entity.cityData) {
    const contained: Record<string, unknown>[] = [];
    for (const u of entity.cityData.universities) {
      contained.push({
        '@type': 'CollegeOrUniversity',
        name: u.name,
        alternateName: u.chineseName,
        description: u.focus,
      });
    }
    for (const h of entity.cityData.intlHospitals) {
      contained.push({
        '@type': 'Hospital',
        name: h.name,
        alternateName: h.chineseName,
        description: h.dept,
        telephone: h.phone,
      });
    }
    for (const sec of entity.cityData.mashup) {
      for (const item of sec.items) {
        contained.push({
          '@type': 'Place',
          name: item.name,
          alternateName: item.chineseName,
          description: item.meta,
          ...(item.href ? { url: toAbsoluteUrl(origin, item.href) } : {}),
        });
      }
    }
    primaryNode.containsPlace = contained;
  }

  // Hotspot rescue / device panel steps -> HowToStep
  if (entity.hotspotData && entityType === 'HowTo') {
    primaryNode.step = entity.hotspotData.hotspots.map((spot, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: spot.chineseText,
      text: spot.warning
        ? `${spot.englishInstruction} Warning: ${spot.warning}`
        : spot.englishInstruction,
    }));
  }

  const graph: Record<string, unknown>[] = [
    buildOrgPublisher(origin),
    buildBreadcrumbSchema(origin, breadcrumbItems),
    primaryNode,
  ];

  // Multimodal Show-to-Local Card -> Structured Bilingual DigitalDocument + Pronunciation
  if (entity.cardData) {
    graph.push({
      '@type': 'DigitalDocument',
      '@id': `${canonicalUrl}#show-card`,
      name: isZh ? entity.cardData.titleZh : entity.title,
      inLanguage: ['zh-CN', 'en'],
      text: `${entity.cardData.largeHanzi} (${entity.cardData.pinyinLine}) — ${entity.cardData.gb30240En}`,
      about: entity.cardData.scenario,
      accessibilityFeature: ['highContrastDisplay', 'speechSynthesis'],
    });
  }

  // AEO: Entity Quick Specs -> FAQPage
  if (entity.quickSpecs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#specs-faq`,
      mainEntity: [
        ...entity.quickSpecs.map((sp) => ({
          '@type': 'Question',
          name: `${entity.title}: ${sp.label}?`,
          acceptedAnswer: { '@type': 'Answer', text: sp.value },
        })),
        {
          '@type': 'Question',
          name: `What should travelers know about ${entity.title}?`,
          acceptedAnswer: { '@type': 'Answer', text: entity.whatNobodyTellsYou },
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

/** Attribute 1 + 5: DataCatalog + Dataset[] JSON-LD for /portals/ */
export function buildPortalsCatalogJsonLd(origin: string, locale: 'en' | 'zh') {
  const isZh = locale === 'zh';
  const url = `${origin}${isZh ? '/zh/portals/' : '/portals/'}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrgPublisher(origin),
      {
        '@type': 'DataCatalog',
        '@id': `${url}#catalog`,
        name: isZh ? '中国政务公开数据源目录' : 'China Government Open Data Portals Catalog',
        description: isZh
          ? '收录提供免费公开数据查询或下载的中国国家部委与省市政府平台。'
          : 'Audited directory of Chinese ministry, provincial, and municipal open-data registries.',
        url,
        publisher: { '@id': `${origin}/#organization` },
        dataset: GOV_PORTALS.map((p) => ({
          '@type': 'Dataset',
          name: isZh ? p.chineseName : p.name,
          alternateName: isZh ? p.name : p.chineseName,
          url: p.url,
          isAccessibleForFree: true,
          spatialCoverage: p.region,
          keywords: [p.domain, p.level, p.access],
          creator: {
            '@type': 'GovernmentOrganization',
            name: p.chineseName,
            alternateName: p.name,
            url: p.url,
          },
        })),
      },
    ],
  };
}

/** AEO JSON-LD for /compare/[slug]/ */
export function buildComparisonJsonLd(item: ComparisonPage, origin: string, locale: 'en' | 'zh') {
  const isZh = locale === 'zh';
  const url = `${origin}${isZh ? `/zh/compare/${item.slug}/` : `/compare/${item.slug}/`}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrgPublisher(origin),
      {
        '@type': 'Article',
        '@id': `${url}#comparison`,
        headline: isZh ? item.titleZh : item.title,
        dateModified: item.lastVerified,
        publisher: { '@id': `${origin}/#organization` },
        mainEntityOfPage: url,
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `When should I choose ${item.optionA} over ${item.optionB}?`,
            acceptedAnswer: { '@type': 'Answer', text: item.chooseAIf },
          },
          {
            '@type': 'Question',
            name: `When should I choose ${item.optionB} over ${item.optionA}?`,
            acceptedAnswer: { '@type': 'Answer', text: item.chooseBIf },
          },
        ],
      },
    ],
  };
}

/** AEO JSON-LD for /routes/[slug]/ */
export function buildRouteJsonLd(route: IntercityRoute, origin: string, locale: 'en' | 'zh') {
  const isZh = locale === 'zh';
  const url = `${origin}${isZh ? `/zh/routes/${route.slug}/` : `/routes/${route.slug}/`}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrgPublisher(origin),
      {
        '@type': 'FAQPage',
        '@id': `${url}#route-faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `What is the fastest door-to-door way from ${route.from} to ${route.to}?`,
            acceptedAnswer: { '@type': 'Answer', text: route.verdict },
          },
          {
            '@type': 'Question',
            name: `Which train stations should I watch out for between ${route.from} and ${route.to}?`,
            acceptedAnswer: { '@type': 'Answer', text: route.wrongStationWarning },
          },
        ],
      },
    ],
  };
}

/** AEO JSON-LD for /stacks/[slug]/ */
export function buildStackJsonLd(stack: ScenarioStack, origin: string, locale: 'en' | 'zh') {
  const isZh = locale === 'zh';
  const url = `${origin}${isZh ? `/zh/stacks/${stack.slug}/` : `/stacks/${stack.slug}/`}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrgPublisher(origin),
      {
        '@type': 'HowTo',
        '@id': `${url}#checklist`,
        name: isZh ? stack.titleZh : stack.title,
        description: stack.tagline,
        step: stack.items.map((it, idx) => ({
          '@type': 'HowToStep',
          position: idx + 1,
          name: it.title,
          text: it.summary,
          url: `${origin}${it.href}`,
        })),
      },
    ],
  };
}

/** AEO JSON-LD for /for/[slug]/ */
export function buildPersonaJsonLd(landing: PersonaLanding, origin: string, locale: 'en' | 'zh') {
  const isZh = locale === 'zh';
  const url = `${origin}${isZh ? `/zh/for/${landing.slug}/` : `/for/${landing.slug}/`}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrgPublisher(origin),
      {
        '@type': 'CollectionPage',
        '@id': `${url}#collection`,
        name: isZh ? landing.titleZh : landing.title,
        description: landing.lead,
        url,
      },
      {
        '@type': 'FAQPage',
        mainEntity: landing.highlights.map((h) => ({
          '@type': 'Question',
          name: `${landing.title}: ${h.label}?`,
          acceptedAnswer: { '@type': 'Answer', text: h.value },
        })),
      },
    ],
  };
}

/** Shared Provenance Markdown Footer for all .md mirrors & MCP outputs */
export function formatProvenanceMarkdown(citations: ResolvedCitation[], canonicalUrl: string): string[] {
  const lines = ['## Sources & Provenance', ''];
  citations.forEach((c, idx) => {
    const datePart = c.verifiedDate ? ` · verified ${c.verifiedDate}` : '';
    lines.push(`${idx + 1}. [${c.name}](${c.url}) — \`${c.kind}\`${datePart}`);
  });
  lines.push(`- **Canonical Web Page**: ${canonicalUrl}`, '');
  return lines;
}

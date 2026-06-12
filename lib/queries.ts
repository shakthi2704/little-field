// ─── Site Settings ────────────────────────────────────────────────────────────
export const SETTINGS_QUERY = `
  *[_type == "siteSettings"][0]{
    hoursToday,
    hoursBarEnabled,
    socialLinks,
    inquireEmail
  }
`

// ─── Categories ───────────────────────────────────────────────────────────────
export const CATEGORIES_QUERY = `
  *[_type == "category"] | order(order asc) {
    _id,
    title,
    slug,
    icon,
    order
  }
`

// ─── Tenants ──────────────────────────────────────────────────────────────────
export const TENANTS_QUERY = `
  *[_type == "tenant" && isActive == true] | order(name asc) {
    _id,
    name,
    slug,
    description,
    heroImage { asset, alt, hotspot },
    logo { asset, alt },
    isFeatured,
    floor -> { _id, title, shortCode, order },
    category -> { _id, title, slug, icon }
  }
`

export const FEATURED_TENANTS_QUERY = `
  *[_type == "tenant" && isActive == true && isFeatured == true][0...3] {
    _id,
    name,
    slug,
    description,
    heroImage { asset, alt, hotspot },
    category -> { _id, title, slug }
  }
`

export const TENANT_BY_SLUG_QUERY = `
  *[_type == "tenant" && slug.current == $slug && isActive == true][0] {
    _id,
    name,
    slug,
    description,
    longDescription,
    heroImage { asset, alt, hotspot },
    galleryImages[] { asset, alt },
    logo { asset, alt },
    phone,
    website,
    instagram,
    hours,
    floor -> { _id, title, shortCode },
    category -> { _id, title, slug }
  }
`

export const TENANT_SLUGS_QUERY = `
  *[_type == "tenant" && isActive == true] { "slug": slug.current }
`

// ─── Category Slider images ────────────────────────────────────────────────────
export const CATEGORIES_WITH_HERO_QUERY = `
  *[_type == "category"] | order(order asc) {
    _id,
    title,
    slug,
    heroImage { asset, alt, hotspot },
    tagline
  }
`

// ─── Events ───────────────────────────────────────────────────────────────────
export const EVENTS_QUERY = `
  *[_type == "event"] | order(date asc) {
    _id,
    title,
    slug,
    date,
    endDate,
    heroImage { asset, alt, hotspot },
    location,
    isFeatured
  }
`

export const FEATURED_EVENTS_QUERY = `
  *[_type == "event" && isFeatured == true][0...3] {
    _id,
    title,
    slug,
    date,
    heroImage { asset, alt, hotspot },
    location
  }
`

export const EVENT_BY_SLUG_QUERY = `
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    endDate,
    heroImage { asset, alt, hotspot },
    body,
    location,
    relatedTenant -> { _id, name, slug, heroImage { asset, alt } }
  }
`

export const EVENT_SLUGS_QUERY = `
  *[_type == "event"] { "slug": slug.current }
`

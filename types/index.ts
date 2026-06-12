export interface SanityImage {
    _type: 'image'
    asset: {
        _ref: string
        _type: 'reference'
    }
    alt?: string
    hotspot?: {
        x: number
        y: number
        height: number
        width: number
    }
}

export interface Category {
    _id: string
    title: string
    slug: { current: string }
    icon?: string
    order: number
}

export interface Floor {
    _id: string
    title: string
    shortCode: 'GF' | 'L1' | 'L2' | 'L3'
    order: number
}

export interface Tenant {
    _id: string
    name: string
    slug: { current: string }
    category: Category
    floor: Floor
    description: string
    heroImage: SanityImage
    logo?: SanityImage
    isFeatured: boolean
    isActive: boolean
}

export interface Event {
    _id: string
    title: string
    slug: { current: string }
    date: string
    endDate?: string
    heroImage: SanityImage
    location: string
    isFeatured: boolean
}

export interface SocialLink {
    platform: 'instagram' | 'facebook' | 'tiktok' | 'x' | 'linkedin'
    url: string
}

export interface SiteSettings {
    hoursToday: string
    hoursBarEnabled: boolean
    socialLinks: SocialLink[]
    inquireEmail: string
}

export interface NavItem {
    label: string
    href: string
}

import { NextResponse } from "next/server"

export async function GET() {
  try {
    const baseUrl = "https://annapoornainterio.com"

    // Define your sitemap entries
    const sitemapEntries = [
      {
        url: baseUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 1.0,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/gallery`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date().toISOString(),
        changeFrequency: "yearly",
        priority: 0.6,
      },
      {
        url: `${baseUrl}/products`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/products/upvc-windows-doors`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/products/fire-doors`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/products/system-railings`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/products/pvc-false-ceilings`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/products/workstations`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/products/chairs`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/expertise/interior`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/expertise/construction`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/bangalore-yelahanka`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
    ]

    // Generate XML content
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    sitemapEntries.forEach((entry) => {
      xml += "  <url>\n"
      xml += `    <loc>${entry.url}</loc>\n`
      xml += `    <lastmod>${entry.lastModified}</lastmod>\n`
      xml += `    <changefreq>${entry.changeFrequency}</changefreq>\n`
      xml += `    <priority>${entry.priority}</priority>\n`
      xml += "  </url>\n"
    })

    xml += "</urlset>"

    // Return the XML content
    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    })
  } catch (error) {
    console.error("Error generating sitemap:", error)
    return NextResponse.json({ error: "Failed to generate sitemap" }, { status: 500 })
  }
}


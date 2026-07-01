import PageHeader from '../components/PageHeader'
import GallerySection from '../components/sections/GallerySection'
import CTABand from '../components/sections/CTABand'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Gallery() {
  usePageMeta({
    title: 'Project Gallery | Plumbing NYC',
    description:
      'Browse recent plumbing projects by Plumbing NYC — emergency repairs, water heater installs, drain cleaning, sewer line work and more across New York City.',
  })

  return (
    <>
      <PageHeader
        title="Our Work"
        subtitle="A showcase of the quality workmanship we bring to homes and businesses across NYC."
        crumbs={[{ label: 'Gallery' }]}
      />
      <GallerySection showHeading={false} />
      <CTABand />
    </>
  )
}

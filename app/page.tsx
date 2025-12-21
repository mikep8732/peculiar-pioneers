import Button from '@/components/Button'
import siteContent from '@/content/site.json'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <section className="section container-narrow text-center">
        <h1 className="text-gray-900 dark:text-white mb-6">
          {siteContent.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {siteContent.mission}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/watch" variant="primary">
            Watch
          </Button>
          <Button href="/donate" variant="secondary">
            Donate
          </Button>
        </div>
      </section>
    </div>
  )
}

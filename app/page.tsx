import Button from '@/components/Button'
import SabbathCountdown from '@/components/SabbathCountdown'
import siteContent from '@/content/site.json'
import videosData from '@/content/videos.json'

// Get the featured/latest video
const latestVideo = videosData.videos.find(v => v.featured) || videosData.videos[0]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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

      {/* Latest Episode Section */}
      <section className="section bg-gray-50 dark:bg-dark-100">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Episode
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Watch our most recent video podcast episode exploring biblical teachings and prophecy.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-dark-200 shadow-xl">
              <iframe
                src={`https://www.youtube.com/embed/${latestVideo.id}`}
                title={latestVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {latestVideo.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {latestVideo.description}
              </p>
              <div className="mt-4">
                <Button href={`/watch/${latestVideo.slug}`} variant="primary">
                  Watch Full Episode
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Sabbath Countdown Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-16 lg:gap-24 lg:grid-cols-2 items-center">
            {/* Mission Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                The Peculiar Pioneers are dedicated to proclaiming the Three Angels&apos; Messages of Revelation 14 and preparing people for the soon return of Jesus Christ. Through our ministry, we aim to uphold the biblical truths preserved by the Seventh-day Adventist movement, with a special emphasis on the sanctuary message, the Sabbath, righteousness by faith, and the Spirit of Prophecy.
              </p>
              <Button href="/about" variant="secondary">
                About Us →
              </Button>
            </div>

            {/* Sabbath Countdown */}
            <div className="flex justify-center lg:justify-end">
              <SabbathCountdown />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section bg-gray-50 dark:bg-dark-100">
        <div className="container container-narrow">
          <blockquote className="relative bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-300 rounded-2xl p-8 md:p-12">
            {/* Quote mark */}
            <span className="absolute top-4 left-6 text-8xl text-gray-200 dark:text-dark-300 font-serif leading-none select-none">
              &ldquo;
            </span>
            
            <p className="relative text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6 pl-8">
              There are many precious truths contained in the word of God, but it is present truth that the flock needs now.
            </p>
            
            <footer className="pl-8">
              <cite className="text-gray-600 dark:text-gray-400 not-italic">
                — Ellen G. White, <span className="italic">Early Writings</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>
    </>
  )
}

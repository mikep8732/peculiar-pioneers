import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '1844 Prophecy - Karaite Calendar',
  description: 'Understanding the calendar calculations behind October 22, 1844 and the 2,300-day prophecy of Daniel.',
}

export default function Prophecy1844() {
  return (
    <div className="section">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-gray-900 dark:text-white mb-4">
            Karaite Jewish Calendar vs. Gregorian Calendar
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 italic">
            A presentation on the calendar calculations behind October 22, 1844
          </p>
        </div>

        {/* Calendar Comparison - Months 1-6 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-2">
            Calendar Comparison
          </h2>
          <h3 className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
            Months 1-6 (Spring & Summer 1844)
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100 dark:bg-dark-200">
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Karaite Month</th>
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Hebrew Name</th>
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Gregorian Dates (1844)</th>
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Notable Dates</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="bg-white dark:bg-dark-100">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">1st Month</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Nisan/Aviv</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">April 19 - May 18</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-gold font-semibold">Passover (Pesach): April 19</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-dark-200">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">2nd Month</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Iyar</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">May 19 - June 16</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3"></td>
                </tr>
                <tr className="bg-white dark:bg-dark-100">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">3rd Month</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Sivan</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">June 17 - July 16</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-gold font-semibold">Shavuot (Pentecost): June 17</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-dark-200">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">4th Month</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Tammuz</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">July 17 - August 15</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3"></td>
                </tr>
                <tr className="bg-white dark:bg-dark-100">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">5th Month</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Av</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">August 16 - September 13</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3"></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-dark-200">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">6th Month</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Elul</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">September 14 - October 12</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-8">
            <div className="bg-gray-100 dark:bg-dark-200 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">SPRING</p>
              <p className="text-3xl font-bold text-gold">1-6</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">MONTHS</p>
            </div>
          </div>
        </section>

        {/* Calendar Comparison - Months 7-12 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-2">
            Calendar Comparison
          </h2>
          <h3 className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
            Months 7-12 (Fall & Winter 1844-1845)
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100 dark:bg-dark-200">
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Karaite Month</th>
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Hebrew Name</th>
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Gregorian Dates (1844)</th>
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Notable Dates</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr className="bg-white dark:bg-dark-100">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">7th Month</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Tishri</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">October 13 - November 11</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-gold font-semibold">Yom Kippur (Day of Atonement): October 22</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-dark-200">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">8th Month</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Cheshvan</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">November 12 - December 11</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3"></td>
                </tr>
                <tr className="bg-white dark:bg-dark-100">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">9th Month</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Kislev</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">December 12 - January 10, 1845</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3"></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-dark-200">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">10th Month</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Tevet</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">January 11 - February 8, 1845</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3"></td>
                </tr>
                <tr className="bg-white dark:bg-dark-100">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">11th Month</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Shevat</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">February 9 - March 10, 1845</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3"></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-dark-200">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">12th Month</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">Adar</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3">March 11 - April 8, 1845</td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-3"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-8">
            <div className="bg-gray-100 dark:bg-dark-200 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">FALL</p>
              <p className="text-3xl font-bold text-blue-500">7-12</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">MONTHS</p>
            </div>
          </div>
        </section>

        {/* The Significant Date */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            The Significant Date: October 22, 1844
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
                Karaite Jewish Calendar
              </h3>
              <p className="text-center text-gray-700 dark:text-gray-300">
                10th of Tishri<br />
                Day of Atonement (Yom Kippur)
              </p>
            </div>
            <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
                Gregorian Calendar
              </h3>
              <p className="text-center text-gray-700 dark:text-gray-300">
                October 22, 1844<br />
                Tuesday
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="border-2 border-gold rounded-xl p-6 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">OCT 1844</p>
              <p className="text-5xl font-bold text-gold">22</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">TUESDAY</p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-dark-200 border-l-4 border-gold p-6 rounded-r-xl">
            <p className="text-center text-gray-700 dark:text-gray-300">
              This date was calculated by the Millerites as the conclusion of the 2,300 day prophecy from Daniel 8:14, interpreted as years starting from 457 BCE.
            </p>
          </div>
        </section>

        {/* Karaite Calendar Determination */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Karaite Calendar Determination
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Principles</h3>
              <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li>Based on lunar observation</li>
                  <li>New month begins with first sighting of new moon</li>
                  <li>First month determined by ripening barley (Aviv) in Israel</li>
                  <li>No fixed mathematical calculations like the Rabbinic calendar</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-6">Biblical Basis</h3>
              <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li>Exodus 12:2 - &quot;This month shall be your beginning of months&quot;</li>
                  <li>Deuteronomy 16:1 - &quot;Observe the month of Aviv&quot;</li>
                  <li>Leviticus 23:27 - &quot;On the tenth day of this seventh month&quot;</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Moon Phases</h3>
              <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6">
                <div className="flex justify-around items-center mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-900 mx-auto mb-2"></div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">New Moon</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-200 dark:from-gray-900 dark:to-gray-300 mx-auto mb-2"></div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Waxing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-300 mx-auto mb-2"></div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Full Moon</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-l from-gray-800 to-gray-200 dark:from-gray-900 dark:to-gray-300 mx-auto mb-2"></div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Waning</p>
                  </div>
                </div>
                <p className="text-center text-gray-700 dark:text-gray-300 text-sm mt-4">
                  The Karaites rejected the Rabbinic traditions and mathematical calendar calculations, returning to what they believed was the biblical method of calendar determination through direct observation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Millerite Calculation */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            The Millerite Calculation
          </h2>

          <div className="bg-gray-50 dark:bg-dark-200 border-l-4 border-gold p-6 rounded-r-xl mb-8">
            <p className="text-center text-gray-900 dark:text-white font-semibold">
              Daniel 8:14 - &quot;Unto two thousand and three hundred days; then shall the sanctuary be cleansed.&quot;
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            The Three Decrees - Why 457 BCE?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            There were three decrees issued concerning Jerusalem:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gold/10 border-l-4 border-gold p-4 rounded-r-xl">
              <p className="font-semibold text-gray-900 dark:text-white">1. 538 BCE - Cyrus&apos;s Decree (Ezra 1:1-4)</p>
              <p className="text-gray-700 dark:text-gray-300">Permitted Jews to return and rebuild the temple, but not the city walls</p>
            </div>
            <div className="bg-gold/10 border-l-4 border-gold p-4 rounded-r-xl">
              <p className="font-semibold text-gray-900 dark:text-white">2. 457 BCE - Artaxerxes&apos;s Decree (Ezra 7:11-26)</p>
              <p className="text-gray-700 dark:text-gray-300">Gave full authority to restore and rebuild Jerusalem with civil governance, legal system, and complete autonomy</p>
            </div>
            <div className="bg-gold/10 border-l-4 border-gold p-4 rounded-r-xl">
              <p className="font-semibold text-gray-900 dark:text-white">3. 444 BCE - Artaxerxes&apos;s Second Decree (Nehemiah 2:1-8)</p>
              <p className="text-gray-700 dark:text-gray-300">Specifically authorized rebuilding the city walls</p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6 mb-8">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-gray-900 dark:text-white">Why the Millerites chose 457 BCE:</span> Daniel 9:25 speaks of &quot;the decree to restore and rebuild Jerusalem&quot; - not just the temple. Only Artaxerxes&apos;s 457 BCE decree gave comprehensive authority to fully restore Jerusalem as a functioning city with civil government, making it the most complete fulfillment of Daniel&apos;s prophecy.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Calculation Steps:</h3>
          <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6 mb-8">
            <ol className="space-y-2 text-gray-700 dark:text-gray-300 list-decimal list-inside">
              <li>Applied day-year principle: 2,300 prophetic days = 2,300 literal years</li>
              <li>Starting point: 457 BCE (Artaxerxes&apos;s comprehensive decree - Ezra 7)</li>
              <li>457 BCE + 2,300 years = 1844 CE (accounting for no year zero)</li>
              <li>Identified &quot;cleansing of sanctuary&quot; with Day of Atonement (Yom Kippur)</li>
              <li>Used Karaite calendar to determine Yom Kippur = October 22, 1844</li>
            </ol>
          </div>

          {/* Timeline */}
          <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="w-4 h-4 rounded-full bg-gold mx-auto mb-2"></div>
                <p className="font-bold text-gray-900 dark:text-white">457 BCE</p>
              </div>
              <div className="flex-1 h-1 bg-gold max-w-xs"></div>
              <div className="text-center">
                <div className="w-4 h-4 rounded-full bg-gold mx-auto mb-2"></div>
                <p className="font-bold text-gray-900 dark:text-white">1844 CE</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic mt-4">2,300 Years</p>
          </div>

          <p className="text-center text-gray-600 dark:text-gray-400 mt-6 text-sm">
            This calculation was refined by Samuel Snow and became the basis for what later became known as &quot;The Great Disappointment&quot; when Christ did not return as predicted.
          </p>
        </section>

        {/* The 70 Weeks Prophecy */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            The 70 Weeks Prophecy & Jesus&apos;s Baptism
          </h2>

          <div className="bg-gray-50 dark:bg-dark-200 border-l-4 border-gold p-6 rounded-r-xl mb-8">
            <p className="text-center text-gray-900 dark:text-white font-semibold">
              Daniel 9:24-27 - &quot;Seventy weeks are determined upon thy people...unto the Messiah the Prince&quot;
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Calculating Jesus&apos;s Baptism Year</h3>
          <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6 mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Millerites used the same 457 BCE starting point for the 70 weeks prophecy:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li><span className="font-semibold">70 weeks</span> using day-year principle = 70 x 7 days = <span className="font-semibold">490 years</span></li>
              <li>Daniel 9:25: &quot;unto the Messiah the Prince&quot; = 69 weeks (7 + 62 weeks)</li>
              <li>69 weeks = 69 x 7 = <span className="font-semibold">483 years</span></li>
              <li>457 BCE + 483 years = <span className="font-semibold text-gold">27 CE</span> (Jesus&apos;s baptism)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Biblical Confirmation</h3>
          <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6 mb-6">
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Luke 3:1 - John the Baptist began ministry in the 15th year of Tiberius Caesar (approximately 27-29 CE)</li>
              <li>Luke 3:21-23 - Jesus was baptized at the start of His ministry, about 30 years old</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Jesus&apos;s Crucifixion - 31 CE</h3>
          <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6 mb-6">
            <p className="text-gray-900 dark:text-white font-semibold mb-4">
              Daniel 9:27 - &quot;And he shall confirm the covenant with many for one week: and <span className="text-gold">in the midst of the week</span> he shall cause the sacrifice and the oblation to cease&quot;
            </p>

            <p className="text-gray-700 dark:text-gray-300 font-semibold mt-4 mb-2">The Calculation:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside mb-4">
              <li>The final &quot;week&quot; = 7 years (the 70th week)</li>
              <li>&quot;In the midst of the week&quot; = middle of 7 years = <span className="font-semibold">3.5 years</span></li>
              <li>70th week began: 27 CE (Jesus&apos;s baptism)</li>
              <li>27 CE + 3.5 years = <span className="font-semibold text-gold">31 CE</span> (Jesus&apos;s crucifixion)</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 font-semibold mt-4 mb-2">Why &quot;midst of the week&quot; = Jesus&apos;s death:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li><span className="font-semibold">&quot;Cause the sacrifice and oblation to cease&quot;</span> - Jesus became the final sacrifice, ending the need for animal sacrifices</li>
              <li>The temple veil was torn from top to bottom (Matthew 27:51), symbolizing the end of the old covenant sacrificial system</li>
              <li>Jesus&apos;s death occurred in the middle of the final 7-year period</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Complete 70th Week (27-34 CE)</h3>
          <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6 mb-6">
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside mb-4">
              <li><span className="font-semibold">27 CE</span> - Jesus baptized, begins ministry (start of 70th week)</li>
              <li><span className="font-semibold">31 CE</span> - Jesus crucified (midst of the week - 3.5 years later)</li>
              <li><span className="font-semibold">34 CE</span> - End of 70 weeks (stoning of Stephen, gospel goes to Gentiles)</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 font-semibold mt-4 mb-2">Historical Corroboration:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Pontius Pilate&apos;s governorship (26-36 CE)</li>
              <li>The reign of Tiberius Caesar</li>
              <li>Astronomical calculations of Passover dates (Jesus died during Passover)</li>
            </ul>
          </div>

          {/* 70 Weeks Timeline */}
          <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-8 text-center mb-6">
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              <div className="text-center">
                <div className="w-4 h-4 rounded-full bg-gold mx-auto mb-2"></div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">457 BCE</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Decree</p>
              </div>
              <div className="flex-1 h-1 bg-green-500 max-w-[100px] md:max-w-[150px]"></div>
              <div className="text-center">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mx-auto mb-2"></div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">27 CE</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Baptism</p>
              </div>
              <div className="flex-1 h-1 bg-green-500 max-w-[60px] md:max-w-[100px]"></div>
              <div className="text-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mx-auto mb-2"></div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">34 CE</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">End 70 Weeks</p>
              </div>
            </div>
            <div className="flex justify-center gap-8 mt-4 text-sm text-gray-600 dark:text-gray-400 italic">
              <span>483 years (69 weeks)</span>
              <span>7 years (1 week)</span>
            </div>
          </div>

          <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-xl">
            <p className="text-center text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Key Insight:</span> The Millerites saw the fulfillment of the 70 weeks prophecy (ending in 34 CE with the stoning of Stephen and the gospel going to the Gentiles) as validation that their 457 BCE starting point was correct, which they then applied to the 2,300-day prophecy ending in 1844.
            </p>
          </div>
        </section>

        {/* The 1260-Year Prophecy */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            The 1260-Year Prophecy: 538-1798 CE
          </h2>

          <div className="bg-gray-50 dark:bg-dark-200 border-l-4 border-gold p-6 rounded-r-xl mb-8">
            <p className="text-center text-gray-900 dark:text-white font-semibold mb-4">Biblical References</p>
            <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1 mb-4">
              <li><span className="font-semibold">1,260 days</span> - Revelation 11:3, 12:6</li>
              <li><span className="font-semibold">42 months</span> - Revelation 11:2, 13:5 (42 x 30 = 1,260 days)</li>
              <li><span className="font-semibold">Time, times, and half a time</span> - Daniel 7:25, 12:7, Revelation 12:14 (3.5 years = 1,260 days)</li>
            </ul>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Using the day-year principle: <span className="font-semibold">1,260 prophetic days = 1,260 literal years</span>
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Timeline: 538-1798 CE</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-xl">
              <p className="font-semibold text-gray-900 dark:text-white mb-4">Starting Point - 538 CE</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside text-sm">
                <li>Emperor Justinian&apos;s decree (533 CE) recognizing the Pope&apos;s supremacy was fully enforced</li>
                <li>The papacy gained civil and temporal (political) power</li>
                <li>Marked the beginning of papal dominance in Europe</li>
                <li>Start of the prophesied period of persecution</li>
              </ul>
            </div>
            <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-xl">
              <p className="font-semibold text-gray-900 dark:text-white mb-4">Ending Point - 1798 CE</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside text-sm">
                <li>538 + 1,260 years = 1798</li>
                <li>February 1798: French General Berthier entered Rome under Napoleon&apos;s orders</li>
                <li>Pope Pius VI was taken captive</li>
                <li>Papal temporal (political) power effectively ended</li>
                <li>The Pope died in exile in 1799</li>
                <li>Seen as the &quot;deadly wound&quot; of Revelation 13:3</li>
              </ul>
            </div>
          </div>

          {/* 1260 Timeline */}
          <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-8 text-center mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="w-4 h-4 rounded-full bg-purple-500 mx-auto mb-2"></div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">538 CE</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Papal Power<br />Established</p>
              </div>
              <div className="flex-1 h-1 bg-purple-500 max-w-xs"></div>
              <div className="text-center">
                <div className="w-4 h-4 rounded-full bg-purple-500 mx-auto mb-2"></div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">1798 CE</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Pope Captured<br />Power Ended</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic mt-4">1,260 Years</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Why This Prophecy Validated the Millerite Calculations</h3>
          <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6 mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The fulfillment of the 1260-year prophecy in 1798 was crucial evidence for the Millerites:
            </p>
            <ol className="space-y-2 text-gray-700 dark:text-gray-300 list-decimal list-inside">
              <li><span className="font-semibold">Confirmed the day-year principle</span> - If 1,260 days meant 1,260 years and was fulfilled, then 2,300 days could also mean 2,300 years</li>
              <li><span className="font-semibold">Demonstrated prophetic timelines could be calculated accurately</span> - The 1798 event was recent, verifiable history</li>
              <li><span className="font-semibold">Indicated they were living in the &quot;time of the end&quot;</span> - Daniel 12:4 speaks of the time of the end, and 1798 marked a prophetic milestone</li>
              <li><span className="font-semibold">Created urgency for the 1844 prediction</span> - With one major prophecy recently fulfilled, another (the 2,300 days) was imminent</li>
              <li><span className="font-semibold">Provided a pattern of interpretation</span> - Multiple prophecies using the same principle reinforced their methodology</li>
            </ol>
          </div>

          <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-xl">
            <p className="text-center text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Connection to 1844:</span> The Millerites viewed the 1798 event as opening the &quot;time of the end&quot; period, during which the 2,300-day prophecy would reach its conclusion in 1844. These weren&apos;t isolated calculations but interconnected prophetic timelines that they believed confirmed each other.
            </p>
          </div>
        </section>

        {/* Historical Significance */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Historical Significance
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Millerite Movement</h3>
              <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li>Led by William Miller</li>
                  <li>Initially predicted Christ&apos;s return between March 1843-1844</li>
                  <li>After the &quot;first disappointment,&quot; recalculated to October 22, 1844</li>
                  <li>Thousands of followers prepared for Christ&apos;s return</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-6">Aftermath & Legacy</h3>
              <div className="bg-gray-50 dark:bg-dark-200 rounded-xl p-6">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li>Became known as &quot;The Great Disappointment&quot;</li>
                  <li>Led to formation of Seventh-day Adventist Church</li>
                  <li>Prompted new interpretations of biblical prophecy</li>
                  <li>Significant event in American religious history</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-gray-100 dark:bg-dark-200 rounded-xl p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">William Miller</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">1782-1849</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Karaite Jewish Calendar vs. Gregorian Calendar - 1844
          </h3>
        </div>
      </div>
    </div>
  )
}

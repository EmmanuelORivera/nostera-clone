import Image from 'next/image'
import Link from 'next/link'
import GoToArrow from '../GoToArrow/GoToArrow'
import StatsData from './StatsData'

const Stats = () => {
  return (
    <div className="mt-11">
      <h2 className="text-2xl font-semibold uppercase mb-16">
        Nortera in numbers
      </h2>
      <Image
        className="rounded-t-[50%] w-[46.805vw] h-[49vw] object-cover ml-auto"
        width={800}
        height={800}
        alt="betteraves"
        src="https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=100 100w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=300 300w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=600 600w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=900 900w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=1200 1200w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=1500 1500w,
https://www.datocms-assets.com/85733/1681248525-betteraves-1-1-1.jpg?ixlib=js-3.8.0&auto=format&w=1800 1800w"
      />
      <p className="text-2xl leading-7 mt-9 mb-16">
        With facilities in Canada and the United States, Nortera processes and
        markets over 450,000 tons of frozen and canned vegetables per year
      </p>

      <div className="grid grid-cols-2 gap-x-5 gap-y-16">
        <StatsData data="800" description="agricultural partners" />
        <StatsData data="120500" description="acres of land cultivated" />
        <StatsData data="13" description="plants in north america" />
        <StatsData data="3500" description="permanent and seasonal employees" />
      </div>

      <Link
        href="#"
        className="group inline-flex mt-16 items-center gap-4 uppercase text-sm"
      >
        <GoToArrow />
        Learn about our approach
      </Link>
    </div>
  )
}

export default Stats
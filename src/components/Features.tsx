const reasons = [
  {
    title: 'Accurate Test-Strip Readings',
    icon: <img src='/f-ruler.png' alt='Feature logo' />,
  },
  {
    title: 'Is Your Pool Safe to Swim?',
    icon: <img src='/f-swimming.png' alt='Feature logo' />,
  },
  {
    title: 'Mineral Pool Management',
    icon: <img src='/f-pool.png' alt='Feature logo' />,
  },
  {
    title: 'Inventory for Chemicals',
    icon: <img src='/f-cup.png' alt='Feature logo' />,
  },
  {
    title: 'Track Chemical Usage and Costs',
    icon: <img src='/f-search.png' alt='Feature logo' />,
  },
]

const Features = () => {
  return (
    <section className='py-32 bg-[#FCF8F8]'>
      <div className='mx-5 lg:mx-auto'>
        <div className='mb-10 md:mb-20'>
          <h5 className='mb-4 text-2xl text-center text-gray-400'>FEATURES</h5>
          <h2 className='mb-2 text-3xl font-semibold text-center lg:text-5xl'>
            Why Do You Need PoolWater-Pro
          </h2>
        </div>
        <div className='grid items-center grid-cols-2 gap-10 xl:mx-28 lg:grid-cols-5'>
          {reasons.map((reason, i) => (
            <div key={i} className='flex flex-col items-center'>
              <div className='flex items-center justify-center p-3 mb-5 border rounded-2xl bg-accent'>
                {reason.icon}
              </div>
              <h3 className='mb-2 font-semibold text-center max-w-40'>
                {reason.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

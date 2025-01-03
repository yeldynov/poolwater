import { Button } from './ui/button'

const Reasons = () => {
  return (
    <section className='py-32 mx-5 lg:mx-0 '>
      <div className='flex flex-col gap-16'>
        <div className='text-center'>
          <h2 className='mb-3 text-xl font-extrabold md:mb-4 md:text-5xl lg:mb-6'>
            Four essential reasons to regularly check your pool chemicals...
          </h2>
        </div>
        <div className='grid gap-6 md:grid-cols-2 lg:gap-20'>
          <div className='flex flex-col overflow-clip md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8'>
            <div className='md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]'>
              <img
                src='/reason-1.png'
                alt='Feature 1'
                className='aspect-[16/9] h-full w-full object-cover object-center'
              />
            </div>
            <div className='flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12'>
              <h2 className='p-2 px-4 mb-5 text-2xl font-extrabold border border-gray-300 lg:mb-10 lg:p-4 lg:px-8 lg:text-4xl rounded-2xl w-fit '>
                1
              </h2>
              <h3 className='mb-3 text-lg font-bold md:mb-4 md:text-4xl lg:mb-6'>
                HEALTH.
              </h3>
              <p className='text-muted-foreground lg:text-2xl'>
                PoolWater-Pro ensures crystal-clear, bacteria-free water so your
                kids can swim and play worry-free
              </p>
            </div>
          </div>
          <div className='flex flex-col-reverse overflow-clip md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8'>
            <div className='flex flex-col justify-center px-6 py-8 lg:ml-16 md:px-8 md:py-10 lg:px-10 lg:py-12'>
              <h2 className='p-2 px-4 mb-5 text-2xl font-extrabold border border-gray-300 lg:mb-10 lg:p-4 lg:px-8 lg:text-4xl rounded-2xl w-fit '>
                2
              </h2>
              <h3 className='mb-3 text-lg font-bold md:mb-4 md:text-4xl lg:mb-6'>
                WATER QUALITY
              </h3>
              <p className='text-muted-foreground lg:text-2xl'>
                Provides accurate test strip readings to eliminate algae, cloudy
                water, and irritation caused by imbalanced pH or chlorine
                levels.
              </p>
            </div>
            <div className='md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]'>
              <img
                src='/reason-2.png'
                alt='Feature 2'
                className='aspect-[16/9] h-full w-full object-cover object-center'
              />
            </div>
          </div>
          <div className='flex flex-col overflow-clip md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8'>
            <div className='md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]'>
              <img
                src='/reason-3.png'
                alt='Feature 3'
                className='aspect-[16/9] h-full w-full object-cover object-center'
              />
            </div>
            <div className='flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12'>
              <h2 className='p-2 px-4 mb-5 text-2xl font-extrabold border border-gray-300 lg:mb-10 lg:p-4 lg:px-8 lg:text-4xl rounded-2xl w-fit '>
                3
              </h2>
              <h3 className='mb-3 text-lg font-bold md:mb-4 md:text-4xl lg:mb-6'>
                STRUCTURE
              </h3>
              <p className='text-muted-foreground lg:text-2xl'>
                Prevents damage caused by improper chemical levels, prolonging
                the lifespan of the pool structure.
              </p>
            </div>
          </div>
          <div className='flex flex-col-reverse overflow-clip md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8'>
            <div className='flex flex-col justify-center px-6 py-8 lg:ml-16 md:px-8 md:py-10 lg:px-10 lg:py-12'>
              <h2 className='p-2 px-4 mb-5 text-2xl font-extrabold border border-gray-300 lg:mb-10 lg:p-4 lg:px-8 lg:text-4xl rounded-2xl w-fit '>
                4
              </h2>
              <h3 className='mb-3 text-lg font-bold md:mb-4 md:text-4xl lg:mb-6'>
                EQUIPMENT
              </h3>
              <p className='text-muted-foreground lg:text-2xl'>
                Proper chemical management by PoolWater-Pro extends the life of
                your pumps and filters, saving you money and hassle.
              </p>
            </div>
            <div className='md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]'>
              <img
                src='/reason-4.png'
                alt='Feature 4'
                className='aspect-[16/9] h-full w-full object-cover object-center'
              />
            </div>
          </div>
        </div>
        <Button className='p-5 mx-auto lg:px-10 lg:py-6 w-fit' variant='blue'>
          Test Your Pool Water Now – Safe or Not?
        </Button>
      </div>
    </section>
  )
}

export default Reasons

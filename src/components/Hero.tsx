import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className='bg-[url("bg-hero.png")] bg-center sm:bg-left bg-cover bg-no-repeat'>
      <div className='container flex flex-col items-center'>
        <div className='w-full rounded-lg overflow-clip bg-accent/50 '>
          <div className='grid items-center gap-8 lg:grid-cols-2'>
            <div className='container min-h-[650px] justify-between flex flex-col items-center px-4 pb-10 sm:py-32 lg:mx-auto lg:items-start lg:px-[4rem] lg:text-left'>
              <h1 className='my-10 text-2xl font-bold text-white sm:text-4xl text-pretty lg:text-6xl'>
                Accurate software to test your pool water from home
              </h1>

              <div className='flex flex-col justify-center w-full gap-2 lg:justify-start'>
                <div className='flex flex-col gap-2 sm:flex-row'>
                  <Button variant='blue' className='uppercase w-fit sm:w-auto'>
                    Pro-Grade Accuracy
                  </Button>
                  <Button variant='blue' className='uppercase w-fit sm:w-auto'>
                    Safe to Swim Alerts
                  </Button>
                </div>
                <div className='flex flex-col gap-2 sm:flex-row'>
                  <Button variant='blue' className='uppercase w-fit sm:w-auto'>
                    Dip, Snap & Know – Instantly
                  </Button>
                  <Button variant='blue' className='uppercase w-fit sm:w-auto'>
                    24/7 HelpBot
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

const sections = [
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
    links: [],
  },
  {
    title: 'Terms of Use',
    link: '/terms-of-use',
    links: [],
  },
  {
    title: 'Follow',
    links: [
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'LinkedIn', href: '#' },
    ],
  },
]

const Footer = () => {
  return (
    <section className='py-32 text-white bg-black'>
      <div className='mx-5 lg:mx-20'>
        <footer>
          <div className='grid grid-cols-2 gap-8 lg:grid-cols-5'>
            <div className='col-span-2 mb-8 lg:mb-0'>
              <img src='/logo-white.png' alt='logo' className='h-20 mb-4' />
              <p className='max-w-xs'>
                PoolWater-Pro Test-Strip technologies enable fast, convenient
                and accurate water analysis for your pool.
              </p>
            </div>
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <a href={section.link} className='mb-4 font-bold'>
                  {section.title}
                </a>
                <ul className='mt-4 space-y-4 text-muted-foreground'>
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className='font-medium hover:text-primary'
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='flex flex-col justify-center gap-4 pt-8 mt-24 text-sm font-medium border-t text-muted-foreground md:flex-row md:items-center'>
            <p>© 2025 PoolWater-Pro. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer

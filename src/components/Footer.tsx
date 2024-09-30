import Typography from './Typography'

const Footer = () => {
  return (
      <footer className='bg-[#0e1d41] px-4 py-12 lg:px-0'>
          <div className="content max-w-7xl mx-auto flex items-center justify-between">
              <Typography.h3 className='text-white'>&copy; Saf<span className='text-secondary font-bold tracking-wider'>HVAC</span></Typography.h3>
              <Typography.p className='text-white text-base'>{new Date().toLocaleDateString()}</Typography.p>
          </div>
    </footer>
  )
}

export default Footer
import { useState } from "react"
import { APPLICATIONS } from "../../data"
import ApplicationCard from "../ApplicationCard"
import Typography from "../Typography"

const Applications = () => {
    
    const [expandedKey, setExpandedKey] = useState<string>('');

    const handleChange = (key: string) => setExpandedKey(key); 

  return (
      <section className="applications  px-4 py-12 lg:px-0 relative before:absolute before:inset-x-0 before:top-0 before:bottom-2/3 lg:before:bottom-1/3 before:bg-[#0e1d41] before:-z-1 lg:before:bg-[url('https://aeronsystems.com/assets/images/backgrounds/market-bg.webp')] lg:before:bg-cover lg:before:bg-fixed lg:before:bg-no-repeat">
          <div className="applications-content relative z-1 max-w-7xl mx-auto">
            <Typography.h2 className="text-white">
                Applications
            </Typography.h2>
            <Typography.p className="text-white tracking-wider mt-8">
                Unveiling the Possibilities Within Every Domain
            </Typography.p>

            <div className="flex flex-col mt-4 lg:flex-row lg:gap-4">
                {APPLICATIONS.map(app => <ApplicationCard key={app.name} {...app} isExpanded={expandedKey === app.name} handleChange={handleChange} />)}
            </div>
        </div>
    </section>
  )
}

export default Applications
import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {
  return (
    <section
      id='projects'
      className='py-20 min-h-screen flex items-center justify-center'>
      <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            {' '}
            Featured Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
              <h3 className='text-xl font-bold mb-2'> Dialer Dashboard</h3>
              <p className='text-gray-400 mb-4'>
                Creating a dashboard / UI for Rocket Mortgage, and their
                Auto-dialer project.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['SQL', 'JS', 'TS', 'React', 'Entity Framework'].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    '>
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div
              className='
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            '>
              <h3 className='text-xl font-bold mb-2'>Auto-Dialer</h3>
              <p className='text-gray-400 mb-4'>
                A successful pilot was created at Rocket Mortage utilizing early
                AI resources and AWS with Salesforce to facilitate an
                autoqueueing, auto dialed solution for outbound communications.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['AWS', 'JS', 'C#', 'SQL'].map((tech, key) => (
                  <span
                    key={key}
                    className='
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    '>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className='
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            '>
              <h3 className='text-xl font-bold mb-2'>TFS Migration</h3>
              <p className='text-gray-400 mb-4'>
                Spearheaded the project to migrage legacy applications from TFS
                cloud to on-prem servers.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['CI/CD', 'AWS', 'Terraform'].map((tech, key) => (
                  <span
                    key={key}
                    className='
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    '>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className='
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            '>
              <h3 className='text-xl font-bold mb-2'>
                Automated Deployment of Applications - UWM
              </h3>
              <p className='text-gray-400 mb-4'>
                Led the creation of a workflow that would enable scheduled
                deployments of the three major applications the company relied
                on for business. This enabled more time prior to opening to
                validate and test the deployed changes without significant risk
                to the company.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['Terraform', 'yaml', 'Orkes', 'Conduktor'].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className='
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    '>
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

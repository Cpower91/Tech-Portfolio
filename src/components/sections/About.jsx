import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
  const frontendSkills = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Next.js',
    'TypeScript',
  ];
  const backendSkills = ['Node.js', 'C#', 'SQL', 'AWS'];
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent'>
            About Me
          </h2>

          <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6'>
              I'm a passionate software developer with a love for creating
              innovative solutions. I specialize in building web applications
              and have experience with various technologies including React,
              Node.js, and C#. My goal is to continuously learn and grow as a
              developer while contributing to meaningful projects.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='rounded-xl p-6 hover:translate-y-1 transition-all'>
                <h3 className='text-xl font-semibold mb-4'>
                  Frontend Development
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 transition hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className='rounded-xl p-6 hover:translate-y-1 transition-all'>
                <h3 className='text-xl font-semibold mb-4'>
                  Backend Development
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 transition hover:shadow-[0_2px_8px_rgba(34,197,194,0.2)] transition'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'> Education </h3>
              <ul className='list-disc list-inside text-gray-300 space-y-2'>
                <li>
                  <strong>Grand Circus</strong> - Coding Bootcamp (2021)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, and
                  Software Engineering Principles.
                </li>
              </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'> Work Experience </h3>
              <div className='space-y-4 text-gray-300'>
                <div>
                  <h4 className='font-semibold'>
                    Release Coordinator at United Wholesale Mortgage (2024-2026)
                  </h4>
                  <p>
                    Maintained version control systems and coordinated software
                    releases for the development team.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold'>
                    Associate Software Engineer at Rocket Mortgage (2021-2023)
                  </h4>
                  <p>
                    Developed and maintained web applications using React,
                    Node.js, and C#. Collaborated with cross-functional teams to
                    deliver high-quality software solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

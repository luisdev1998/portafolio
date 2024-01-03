import me from './assets/foto.png'
import inticraft from './assets/inticraft.png'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'

const experience = [
  {
    years:'2017 - 2018',
    position: 'Network and Telecomunications Trainee',
    enterprise: 'Hospital Regional Lambayeque',
    description: 'worked as a trainee performing network wiring and configuration to facilitate communication between office equipment and tools for different areas in the hospital in order to speed up communication between them.'
  },
  {
    years:'2018 - 2018',
    position: 'Movile Application Developer',
    enterprise: 'Investigation Project',
    description: 'I developed an Android mobile application to support primary school children in reading comprehension development. This application has a web platform where the teacher can register a reading of any topic along with questions, alternatives, and answers.'
  },
  {
    years:'2019 - 2020',
    position: 'Web Application Developer',
    enterprise: 'Visual Ophtalmics',
    description: 'I developed a web application using .net Core, ReactJS and SQL Server technology, which is designed to manage patients and daily scheduled appointments in order to speed up care.'
  },
  {
    years:'2020 - 2021',
    position: 'Visual Basic Trainee',
    enterprise: 'Super Intendencia Nacional de Aduanas y de Administración Tributaria',
    description: 'I joined SUNAT as a trainee, where I was able to develop my Visual Basic skills by creating applications in Excel to support the Debt Control area by automating different processes.'
  },
  {
    years:'2021 - 2022',
    position: 'Systems Analyst and Developer',
    enterprise: 'Electrodunas',
    description: `I worked as a .Net Developer, developing various applications for the company's internal users. I also supported the creation of SQL and Oracle scripts for editing information upon request from internal users.`
  },
  {
    years:'2022 - 2023',
    position: 'Software Engineer I',
    enterprise: 'Oktana Corporation',
    description: 'I was a Salesforce trainee, working on different projects to be presented to trainers from different countries. Unfortunately, due to the economic crisis in the US, many newly hired personnel had to be laid off :('
  },
  {
    years:'2023 - Current',
    position: 'Software Engineer',
    enterprise: 'E2Open',
    description: 'Working as a software engineer on a logistic system.'
  },
  
]

const skills = [
  {
    category: 'Backend',
    stacks: [
      {
        name: '.NET Core',
        knowledge: 'Advanced',
        percentage: '11' 
      },
      {
        name: 'Node JS',
        knowledge: 'Intermediate',
        percentage: '7' 
      },
      {
        name: 'PHP',
        knowledge: 'Intermediate',
        percentage: '7' 
      },
      {
        name: 'Java',
        knowledge: 'Intermediate',
        percentage: '6' 
      }
    ]
  },
  {
    category: 'Windows',
    stacks: [
      {
        name: '.NET Framework Web applications',
        knowledge: 'Advanced',
        percentage: '10' 
      },
      {
        name: '.NET Framework Console applications',
        knowledge: 'Advanced',
        percentage: '10' 
      },
      {
        name: '.NET Framework Windows Services',
        knowledge: 'Intermediate',
        percentage: '7' 
      }
    ]
  },
  {
    category: 'Database / Data Analytics',
    stacks: [
      {
        name: 'Oracle',
        knowledge: 'Advanced',
        percentage: '11' 
      },
      {
        name: 'SQL Server',
        knowledge: 'Advanced',
        percentage: '11' 
      },
      {
        name: 'PostgreSQL',
        knowledge: 'Advanced',
        percentage: '8' 
      },
      {
        name: 'MySQL',
        knowledge: 'Intermediate',
        percentage: '7' 
      },
      {
        name: 'Mongo DV',
        knowledge: 'Intermediate',
        percentage: '7' 
      },
      {
        name: 'Power BI',
        knowledge: 'Intermediate',
        percentage: '7' 
      },
      {
        name: 'Tableau',
        knowledge: 'Advanced',
        percentage: '8' 
      }
    ]
  },
  {
    category: 'Design Patterns',
    stacks: [
      {
        name: 'Singleton',
        knowledge: 'Intermediate',
        percentage: '7' 
      },
      {
        name: 'Prototype',
        knowledge: 'Intermediate',
        percentage: '7' 
      }
    ]
  },
  {
    category: 'O.S. Configuration',
    stacks: [
      {
        name: 'Nginx',
        knowledge: 'Intermediate',
        percentage: '7' 
      },
      {
        name: 'Firewall UFW',
        knowledge: 'Intermediate',
        percentage: '7' 
      }
    ]
  }
]

const projects = [
  {
    name: 'Minecraft Network',
    description: 'Hosted server on my own dedicated server exceeding +100 players. Custom plugins usign Java and Mysql Database to change the game experience for the players.',
    link: 'tienda.inticraft.com',
    href: 'https://tienda.inticraft.com/',
    img: inticraft
  },
  {
    name: 'Website for Managing Various Articles',
    description: 'Hosted website on my own VPS. This project was created only to test my skills with ReactJS, NodeJS, Mongo DB, Nginx. This project has a functionality to send an email with my own domain to confirm your account.',
    link: 'pm.luissanchez.site',
    href: 'https://pm.luissanchez.site',
    img: project1
  },
  {
    name: 'Reading Comprenhension App',
    description: 'Developed this app in android studio using java and a Rest api with PHP using JWT authentication',
    link: '',
    href: '',
    img: project2
  },
  {
    name: 'Thesis Project',
    description: 'I created a mobile application with React Native and PHP using google maps and a search engine for the locations of hospitals and clinics nationwide',
    link: '',
    href: '',
    img: project3
  },
  {
    name: 'SEDAPAL Quote Generator',
    description: 'I developed a project for sedapal in order to automate the budget generation process using .NET Framework',
    link: '',
    href: '',
    img: project4
  }
]

function App() {
  return (
    <>
      <header id="Header">
        <div className="nav-container nav-active">
          <div className="nav-logo">
            <span>&lt;LUIS</span> <span> SÁNCHEZ&gt;</span>
          </div>
          <div className='nav-btn'>
            <label htmlFor="btn">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
              </svg>
            </label>
          </div>
          <input id='btn' name='btn' type='checkbox'/>
          <div className="nav-links">
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Experience">Experience</a></li>
              <li><a href="#Skills">Skills</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul> 
          </div>
        </div>
      </header>



      <section id="Home">
        <div className='home-information'>
          <div>
            <span>Hello!</span>
            <br/>
            <span>I'm</span>
            <br/>
            <span>Luis Carlo</span>
            <br/>
            <span>FULLSTACK DEVELOPER</span>
          </div>
          <img src={me} className="home-img"/>
        </div>
        <div className='home-buttons'>
          <a href='https://profile.luissanchez.site/cv/curriculum_fs_eng.pdf' target='_blank' className='btn btn-1'>MY RESUME</a>
          <a href='https://api.whatsapp.com/send/?phone=51904789672&text=Hi+Luis+I%27m+interested+in+having+a+conversation+with+you&type=phone_number&app_absent=0' target='_blank' className='btn btn-2'>HIRE ME</a>
        </div>
      </section>



      <section id="About">
        <div className='content'>
          <div className='title'>
              <span className='code'>&lt;<span>#</span>/&gt;</span>
              <span>About Me</span>
              <span className='code'>&lt;<span>#</span>/&gt;</span>
          </div>
          <div className='about-container'>
            <div className="about-img">
              <img src="https://img.global.news.samsung.com/global/wp-content/uploads/2022/03/Smart_Monitor_M8_Unboxing_main6.jpg"/>
            </div>
            <div>
              <br/>
              <p>A technology enthusiast with the ability to automate manual processes in the fastest and most efficient way. Nature lover with many dreams to fulfill.</p>
              <p>With more than +3 years as a web developer, specialized in backend development using different technologies, following the software life cycle.</p>
              <br/>
              <div className='about-information'>
                <div>
                  <span> 
                    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                    Name
                  </span>
                  <span>Luis Sánchez Tapia</span>
                </div>
                <div>
                  <span>
                    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Address
                  </span>
                  <span>Lima, Perú</span>
                </div>
                <div>
                  <span>
                    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>
                    Email
                  </span>
                  <span>luis.dev1998@gmail.com</span>
                </div>
                <div>
                  <span>
                    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    Phone
                  </span>
                  <span>+51 904789672</span>
                </div>
              </div>
              <br/>
              <br/>
              <div>
                <a href='https://www.linkedin.com/in/luissancheztapia98/' target='_blank' className='btn btn-1'>LINKEDIN PROFILE</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="Experience">
        <div className='content'>
          <div className='title'>
            <span className='code'>&lt;<span>#</span>/&gt;</span>
            <span>Experience</span>
            <span className='code'>&lt;<span>#</span>/&gt;</span>
          </div>
          <div className='experience-container'>
            {
              experience.map((element,index) => {
                return(
                  <div key={index} className='experience-information'>
                    <span>
                      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                      </svg>
                      {element.years}
                    </span>
                    <br/>
                    <span>{element.position}</span>
                    <br/>
                    <span>{element.enterprise}</span>
                    <br/>
                    <br/>
                    <span>{element.description}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>



      <section id="Skills">
        <div className='content'>
          <div className='title'>
            <span className='code'>&lt;<span>#</span>/&gt;</span>
            <span>Skills</span>
            <span className='code'>&lt;<span>#</span>/&gt;</span>
          </div>
          <div className='skills-container'>
            {
              skills.map((element,index) => {
                return(
                  <div key={index} className='skills-information'>
                    <span>{element.category}</span>
                    <div className='skills-stack'>
                      {
                        element.stacks.map((stack,index) => {
                          return(
                            <div key={index} className='skills-stack-information'>
                              <p><span>{stack.name}</span></p>
                              <div className="rounded-full h-1 bg-gray-700">
                                <div className={`h-1 rounded-full w-${stack.percentage}/12`}></div>
                              </div>
                              <span>{stack.knowledge}</span>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>




      <section id="Projects">
        <div className='content'>
          <div className='title'>
            <span className='code'>&lt;<span>#</span>/&gt;</span>
            <span>Projects</span>
            <span className='code'>&lt;<span>#</span>/&gt;</span>
          </div>
          <div className='projects-container'>
          {
            projects.map((element,index) => {
              return(
                <div key={index} className='projects-information'>
                  <div className='projects-img'>
                    <img src={element.img}/>
                  </div>
                  <div className='projects-description'>
                    <div>
                      <span>{element.name}</span>
                      <br/>
                      <span>{element.description}</span>
                    </div>
                    <br/>
                    {
                      element.href ? <div className='projects-link'><a href={element.href} target="_blank">{element.link}</a></div> : ''
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
      </section>





      <section id="Contact">
        <div className='content'>
          <div className='title'>
            <span className='code'>&lt;<span>#</span>/&gt;</span>
            <span>Contact Me</span>
            <span className='code'>&lt;<span>#</span>/&gt;</span>
          </div>
          <div className='contact-container'>
            <div>
              <a href='https://www.linkedin.com/in/luissancheztapia98/' target='_blank'>
                 <svg
                   fill="currentColor"
                   viewBox="0 0 16 16"
                   height="1em"
                   width="1em"
                 >
                   <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                 </svg>
               </a>
            </div>
            <div>
              <a href='https://www.instagram.com/stluis98/?igshid=YmMyMTA2M2Y%3D' target='_blank'>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
                </svg>
              </a>
            </div>
            <div>
              <a href='https://github.com/luisdev1998' target='_blank'>
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>


      <section id='Footer'>
        Created by <a href='https://www.linkedin.com/in/luissancheztapia98/' target='_blank'>Luis Sánchez Tapia</a> | 2022 Copyright © All Rights Reserved
      </section>
    </>
  )
}
export default App
import { Mail, Linkedin, Github, Download, ExternalLink, Code, TrendingUp, Brain, Award, Briefcase, Sparkles, ChevronRight, ArrowUpRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Garv Agarwal
          </h1>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#contact" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8">
              <Sparkles size={16} />
              Available for new opportunities
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
              HI! I'M{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                GARV
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12 leading-relaxed font-light">
              Transforming data and automation into insights that drive{' '}
              <span className="font-semibold text-gray-900">smarter business decisions</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://drive.google.com/uc?export=download&id=1EV85gQNIoEjs60wKlgLmq1_VYHTvhC70"
                target="_blank"
                rel="noopener noreferrer"
                download="Garv_Agarwal_Resume.pdf"
                className="group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
              >
                <Download size={20} />
                Download Resume
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/garv-agarwal-0273161b9"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium flex items-center gap-3"
              >
                <Linkedin size={20} />
                Let's Connect
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-28 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              About Me
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Data Scientist & Automation Expert
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="text-xl font-light">
                I'm a passionate <span className="font-semibold text-gray-900">Data Analyst</span> and{' '}
                <span className="font-semibold text-gray-900">Automation Enthusiast</span> pursuing B.Tech in Computer Science and Engineering (Data Science) at Bennett University.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  Recent Impact
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="font-semibold text-gray-900 mb-2">Biosarthi</p>
                    <p className="text-gray-600">
                      Developed automated data pipeline using n8n, PDF.co, and GPT-4, improving processing efficiency by{' '}
                      <span className="font-bold text-blue-600">80%</span>
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="font-semibold text-gray-900 mb-2">Fierynet Technology</p>
                    <p className="text-gray-600">
                      Applied machine learning techniques to enhance decision-making through data preprocessing and visualization
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-lg italic text-gray-600 border-l-4 border-blue-600 pl-6 py-2">
                Motivated by curiosity and driven by impact — constantly exploring how data and AI can make systems smarter and businesses stronger.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Code size={24} className="text-blue-600" />
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'MySQL', 'MongoDB', 'Excel', 'Power BI', 'Tableau', 'Streamlit', 'Flask', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-xl font-medium border border-blue-200 hover:shadow-md hover:scale-105 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award size={24} />
                  Certified By
                </h3>
                <div className="space-y-3">
                  {['IBM', 'Microsoft', 'Deloitte'].map((cert) => (
                    <div key={cert} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-lg font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-28 px-6 relative bg-gradient-to-b from-transparent to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Featured Work
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Projects That Made Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world solutions built with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              icon={<Code className="text-blue-600" size={40} />}
              title="Cypher Securities"
              description="Developed a GUI-based encryption tool using AES and RSA algorithms, securing 200+ files and implementing a robust key generation system for 100+ secure transactions."
              github="https://github.com/garv999/Cypher-Securities"
              tags={['Python', 'Cryptography', 'GUI']}
              gradient="from-blue-500 to-cyan-500"
            />
            <ProjectCard
              icon={<Brain className="text-purple-600" size={40} />}
              title="Breast Cancer Prediction"
              description="Built an SVM-based predictive model achieving 95% accuracy for early detection of breast cancer, with clear data visualizations and performance metrics."
              github="https://github.com/garv999/Breast-Cancer-Prediction"
              tags={['Machine Learning', 'SVM', 'Healthcare']}
              gradient="from-purple-500 to-pink-500"
            />
            <ProjectCard
              icon={<TrendingUp className="text-green-600" size={40} />}
              title="LinkedIn Job Analysis"
              description="Created an interactive Streamlit dashboard to analyze 1,000+ LinkedIn job postings for Data roles, offering real-time insights into hiring trends and skill demand."
              github="https://github.com/garv999/linkedin-job-analysis"
              demo="https://linkedin-job-analysis-happ5gh6brnnuiraz75zbgo.streamlit.app/"
              tags={['Streamlit', 'Data Analysis', 'Dashboard']}
              gradient="from-green-500 to-emerald-500"
            />
          </div>
        </div>
      </section>

      <section id="experience" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Professional Journey
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            <ExperienceCard
              company="Biosarthi"
              role="Data & Automation Intern"
              period="Jun–Jul 2025"
              achievements={[
                'Built end-to-end data pipelines using n8n and GPT-4 for automated analytics.',
                'Integrated ERPNext automation, improving cross-department collaboration.'
              ]}
              color="blue"
            />
            <ExperienceCard
              company="Fierynet Technology LLP"
              role="Data Science Intern"
              period="Aug 2025"
              achievements={[
                'Preprocessed, modeled, and visualized datasets to extract business insights.',
                'Applied machine learning to uncover trends and drive data-informed decisions.'
              ]}
              color="cyan"
            />
          </div>
        </div>
      </section>

      <section id="certifications" className="py-28 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Credentials
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'IBM Machine Learning Professional Certificate', org: 'IBM', color: 'blue' },
              { name: 'Deloitte Australia Data Analytics Job Simulation', org: 'Forage', color: 'green' },
              { name: 'IBM Exploratory Data Analysis for ML', org: 'IBM', color: 'blue' },
              { name: 'Microsoft Introduction to Computers & Security', org: 'Microsoft', color: 'cyan' }
            ].map((cert) => (
              <div
                key={cert.name}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${cert.color}-500 to-${cert.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-lg mb-2 leading-snug">{cert.name}</p>
                    <p className="text-gray-500 text-sm font-medium">{cert.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just connecting over innovative ideas
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:agarwalgarv494@gmail.com"
              className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail size={28} className="text-white" />
              </div>
              <p className="text-white font-semibold text-lg mb-2">Email</p>
              <p className="text-gray-300 text-sm">agarwalgarv494@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/garv-agarwal-0273161b9"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin size={28} className="text-white" />
              </div>
              <p className="text-white font-semibold text-lg mb-2">LinkedIn</p>
              <p className="text-gray-300 text-sm">Connect with me</p>
            </a>

            <a
              href="https://github.com/garv999"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Github size={28} className="text-white" />
              </div>
              <p className="text-white font-semibold text-lg mb-2">GitHub</p>
              <p className="text-gray-300 text-sm">View my GitHub</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Garv Agarwal</h3>
              <p className="text-gray-400 text-sm">Data Scientist & Automation Expert</p>
            </div>
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/garv-agarwal-0273161b9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/garv999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:agarwalgarv494@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>Built with React, TypeScript, and Tailwind CSS</p>
            <p className="mt-2">2025 Garv Agarwal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ icon, title, description, github, demo, tags, gradient }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  github: string;
  demo?: string;
  tags: string[];
  gradient: string;
}) {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-2">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-4 border-t border-gray-100">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-200 text-sm font-medium hover:scale-105"
        >
          <Github size={16} />
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 text-sm font-medium hover:scale-105"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

function ExperienceCard({ company, role, period, achievements, color }: {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  color: string;
}) {
  return (
    <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
        <div className="flex-1">
          <div className={`inline-block px-4 py-1 bg-${color}-100 text-${color}-700 rounded-full text-xs font-semibold mb-3`}>
            {period}
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{company}</h3>
          <p className="text-xl text-blue-600 font-semibold">{role}</p>
        </div>
        <div className={`hidden md:block w-16 h-16 bg-gradient-to-br from-${color}-500 to-${color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Briefcase size={28} className="text-white" />
        </div>
      </div>
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-4 text-gray-700 text-lg">
            <div className={`w-2 h-2 bg-${color}-600 rounded-full mt-2 flex-shrink-0`}></div>
            <span className="leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

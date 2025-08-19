import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  // Placeholder projects - will be populated with real projects later
  const projects = [
    {
      id: 1,
      title: "Aircraft Fuel Optimization System",
      description: "ML-powered system for optimizing aircraft fuel consumption with 15% prediction accuracy improvement",
      technologies: ["Python", "TensorFlow", "ONNX", "Tableau"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 0,
      forks: 0,
      image: "/assets/images/aircraft-fuel-optimization.png", // Add your image here
      isPlaceholder: true
    },
    {
      id: 2,
      title: "Cost Index Modeling Platform",
      description: "Real-time decision support system for aviation cost optimization using advanced ML algorithms",
      technologies: ["Python", "Scikit-learn", "SQL", "Power BI"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 0,
      forks: 0,
      image: "/assets/images/cost-index-modeling.png", // Add your image here
      isPlaceholder: true
    },
    {
      id: 3,
      title: "Market Segmentation Dashboard",
      description: "Advanced analytics dashboard for market segmentation analysis with interactive visualizations",
      technologies: ["R", "Power BI", "SQL Server", "Azure"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 0,
      forks: 0,
      image: "/assets/images/market-segmentation-dashboard.png", // Add your image here
      isPlaceholder: true
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="floating-element w-32 h-32 border border-primary/10 rounded-full" style={{ top: '15%', right: '8%' }}></div>
      <div className="floating-element w-24 h-24 bg-accent/5 rounded-lg rotate-12" style={{ top: '60%', left: '3%' }}></div>
      <div className="floating-element w-16 h-16 border-2 border-accent/20 rotate-45" style={{ top: '80%', right: '15%' }}></div>

      <div className="container-max">
        <div className="text-center mb-16 fade-in animate">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            GitHub Projects
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore my data science projects and open-source contributions on GitHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="card-elegant group hover:scale-105 transition-all duration-300 fade-in animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              {project.image && (
                <div className="mb-4 rounded-lg overflow-hidden bg-muted/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Hide image if it fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                    <Github size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                {project.isPlaceholder && (
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Stats */}
              <div className="flex items-center gap-4 mb-6 text-sm text-subtle">
                <div className="flex items-center gap-1">
                  <Star size={14} />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork size={14} />
                  <span>{project.forks}</span>
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 flex items-center gap-2 btn-outline !py-2"
                  disabled={project.isPlaceholder}
                >
                  <Github size={16} />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 flex items-center gap-2 btn-accent !py-2"
                  disabled={project.isPlaceholder}
                >
                  <ExternalLink size={16} />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in animate" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
            <h3 className="text-xl font-semibold text-foreground">More Projects Coming Soon</h3>
            <p className="text-muted-foreground text-center max-w-md">
              I'm constantly working on new data science projects and open-source contributions. 
              Check back regularly for updates!
            </p>
            <Button className="btn-primary mt-2" disabled>
              <Github size={18} className="mr-2" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
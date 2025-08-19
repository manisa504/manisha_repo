import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "GE Aviation",
      position: "Data Scientist",
      location: "Remote",
      duration: "May 2024 – Present",
      achievements: [
        "Built cost index models reducing fuel consumption prediction error by 15%",
        "Improved aircraft fuel flow model accuracy by 20% under various Mach conditions",
        "Created real-time dashboards in Tableau for operational insights",
        "Deployed ML models using ONNX on internal FTW/ODW servers",
        "Applied advanced imputation and hyperparameter tuning to improve prediction robustness"
      ],
      color: "primary"
    },
    {
      company: "Intel Corporation",
      position: "Data Scientist",
      location: "Remote",
      duration: "Jul 2023 – Sep 2023",
      achievements: [
        "Conducted market segmentation analysis using Power BI",
        "Automated SQL pipelines, improving data accuracy and ETL speed",
        "Built supply resilience dashboards and improved report usability by 10%",
        "Collaborated cross-functionally to increase data accessibility by 30%"
      ],
      color: "accent"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-surface">
      <div className="container-max">
        <div className="text-center mb-16 fade-in animate">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Delivering impactful data science solutions in aviation and technology sectors
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className="relative fade-in animate"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background ${
                  exp.color === 'primary' ? 'bg-primary' : 'bg-accent'
                }`}></div>
                
                {/* Experience card */}
                <div className="ml-20 mb-12">
                  <div className="card-elegant">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl font-semibold text-primary mb-3">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div 
                          key={achievementIndex}
                          className="flex items-start gap-3 fade-in animate"
                          style={{ animationDelay: `${(index * 0.2) + (achievementIndex * 0.1)}s` }}
                        >
                          <TrendingUp size={16} className="text-accent mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
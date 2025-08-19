import { GraduationCap, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const coursework = [
    "Machine Learning",
    "Time Series Analysis", 
    "Optimization",
    "Business Intelligence",
    "Simulation & Modeling",
    "Big Data Strategy"
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16 fade-in animate">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-elegant fade-in animate" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Education Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                  <GraduationCap size={40} className="text-primary-foreground" />
                </div>
              </div>

              {/* Education Details */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Master of Science in Data Science & Business Analytics
                </h3>
                <p className="text-xl text-primary font-semibold mb-4">
                  Texas Tech University
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BookOpen size={18} className="text-accent" />
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {coursework.map((course, index) => (
                      <div 
                        key={course}
                        className="flex items-center gap-2 fade-in animate"
                        style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                        <span className="text-muted-foreground text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Focus */}
                <div className="bg-surface-secondary rounded-lg p-4">
                  <p className="text-muted-foreground italic">
                    "Focused on advanced statistical methods, machine learning algorithms, 
                    and business intelligence strategies to solve complex real-world problems."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Academic Achievements */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center card-minimal fade-in animate" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">ML</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Advanced ML Research</h4>
              <p className="text-sm text-muted-foreground">
                Deep dive into neural networks and predictive modeling
              </p>
            </div>

            <div className="text-center card-minimal fade-in animate" style={{ animationDelay: '0.7s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">BI</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Business Intelligence</h4>
              <p className="text-sm text-muted-foreground">
                Strategic data analysis for business decision-making
              </p>
            </div>

            <div className="text-center card-minimal fade-in animate" style={{ animationDelay: '0.8s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold">BD</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Big Data Strategy</h4>
              <p className="text-sm text-muted-foreground">
                Scalable solutions for enterprise data challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
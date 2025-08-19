const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="container-max">
        <div className="text-center mb-16 fade-in animate">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-elegant fade-in animate" style={{ animationDelay: '0.2s' }}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a data scientist with deep expertise in <span className="text-primary font-medium">machine learning</span>, 
                <span className="text-primary font-medium"> real-time analytics</span>, and 
                <span className="text-primary font-medium"> data infrastructure</span>. With experience at 
                <span className="text-accent font-medium"> GE Aviation</span> and 
                <span className="text-accent font-medium"> Intel</span>, I specialize in building production-grade 
                models that optimize performance, reduce cost, and drive decisions in complex environments like aviation and manufacturing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">ML</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Machine Learning Expert</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced ML algorithms, neural networks, and predictive modeling
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent-foreground">⚡</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Real-time Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Live dashboards and streaming data processing solutions
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary-foreground">🏗️</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Data Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">
                    Scalable data pipelines and enterprise-grade systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
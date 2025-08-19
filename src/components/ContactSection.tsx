import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-contact">
      <div className="container-max">
        <div className="text-center mb-16 fade-in animate">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to discuss data science opportunities or collaborate on innovative projects? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="w-full fade-in animate" style={{ animationDelay: '0.2s' }}>
          <div className="card-elegant w-full max-w-none bg-gradient-to-r from-card via-surface to-card border-2 border-primary/20 overflow-hidden">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-12 py-4 px-4 w-full">
              {/* Contact Header */}
              <div className="flex-shrink-0 text-center xl:text-left w-full xl:w-auto xl:max-w-sm">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-display font-bold text-foreground mb-2">Get in Touch</h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Ready to discuss data science opportunities?
                </p>
              </div>

              {/* Contact Information - Centered section */}
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 flex-grow justify-center items-center w-full xl:w-auto">
                <div className="flex items-center gap-4 group w-full sm:w-auto justify-center sm:justify-start">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <Mail size={22} className="text-primary-foreground" />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <p className="font-semibold text-foreground text-lg mb-1">Email</p>
                    <a 
                      href="mailto:Manisa.doc@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base font-medium hover:underline block truncate"
                    >
                      Manisa.doc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group w-full sm:w-auto justify-center sm:justify-start">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <MapPin size={22} className="text-accent-foreground" />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <p className="font-semibold text-foreground text-lg mb-1">Location</p>
                    <p className="text-muted-foreground text-sm lg:text-base font-medium">Portland, OR</p>
                  </div>
                </div>
              </div>

              {/* Social Links - Right section */}
              <div className="flex-shrink-0 text-center xl:text-right w-full xl:w-auto">
                <p className="font-semibold text-foreground mb-4 text-lg">Connect with me</p>
                <div className="flex gap-4 justify-center xl:justify-end">
                  <a 
                    href="#" 
                    className="w-12 h-12 lg:w-14 lg:h-14 bg-primary rounded-full flex items-center justify-center hover:bg-primary-light transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex-shrink-0"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={18} className="text-primary-foreground" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 lg:w-14 lg:h-14 bg-foreground rounded-full flex items-center justify-center hover:bg-muted-foreground transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex-shrink-0"
                    title="GitHub Profile"
                  >
                    <Github size={18} className="text-background" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
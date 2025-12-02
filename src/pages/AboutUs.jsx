import './AboutUs.css'

function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <h1>About Us</h1>
        
        <section className="intro">
          <p>
            Welcome to our company! We are a passionate team dedicated to creating 
            innovative solutions that make a difference in people's lives. Founded in 
            2020, we've grown from a small startup to a thriving organization with a 
            global presence.
          </p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals and businesses through cutting-edge 
            technology and exceptional service. We believe in pushing boundaries, 
            challenging conventions, and turning ambitious ideas into reality. Every 
            day, we strive to exceed expectations and deliver value that truly matters.
          </p>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>
                We embrace creativity and continuously seek new ways to solve problems. 
                Our team is always exploring emerging technologies and methodologies to 
                stay ahead of the curve.
              </p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>
                Honesty and transparency are at the core of everything we do. We build 
                trust with our clients, partners, and team members through ethical 
                practices and open communication.
              </p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>
                We are committed to delivering the highest quality in our products and 
                services. Mediocrity is never an option when striving for excellence 
                in every endeavor.
              </p>
            </div>
          </div>
        </section>

        <section className="team">
          <h2>Our Team</h2>
          <p>
            Behind every great company is a great team. Our diverse group of talented 
            professionals brings together expertise from various fields including 
            engineering, design, marketing, and customer success. Together, we 
            collaborate to achieve remarkable results and create lasting impact.
          </p>
        </section>

        <footer className="about-footer">
          <p>Join us on our journey to make the world a better place.</p>
        </footer>
      </div>
    </div>
  )
}

export default AboutUs

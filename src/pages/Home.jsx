export default function Home() {
  return (
    <main>
{/* Hero section */}
<section className="hero">
<div className="hero-content">
<p className="hero-greeting">
                    CERTIFIED FULL-STACK WEB DEVELOPER
                </p>
<h1>
                    Hello, I'm<br/>
<span>Barnabas Anyaora.</span>
</h1>
<h2>
                    Frontend &amp; Backend Developer
                </h2>
<p className="hero-description">
                    I design and develop responsive, user-friendly websites
                    and functional backend systems. From intuitive user
                    interfaces to secure APIs and database integration,
                    I build web solutions that combine functionality,
                    performance, and a great user experience.
                </p>
<div className="hero-buttons">
<a className="btn btn-primary" href="/services">
                        Explore My Services
                    </a>
<a className="btn btn-secondary" href="#contact">
                        Get In Touch
                    </a>
</div>
</div>
{/* Developer portrait */}
<div className="hero-image">
<img alt="Barnabas Anyaora, Full-Stack Web Developer" src="/images/profile.png"/>
</div>
</section>
{/* Technical expertise */}
<section className="expertise">
<div className="section-heading">
<p className="section-label">WHAT I DO</p>
<h2>Turning Ideas Into Web Solutions</h2>
<p>
                    I combine frontend design and backend engineering
                    to create complete, functional web applications.
                </p>
</div>
<div className="expertise-grid">
<article className="expertise-card">
<h3>Frontend Development</h3>
<p>
                        Building responsive interfaces with HTML, CSS,
                        JavaScript, and React, with a focus on usability,
                        accessibility, and maintainable code.
                    </p>
</article>
<article className="expertise-card">
<h3>Backend Development</h3>
<p>
                        Developing server-side applications, REST APIs,
                        authentication systems, and database-driven
                        functionality using Node.js, Express.js, and MySQL.
                    </p>
</article>
<article className="expertise-card">
<h3>Website Development</h3>
<p>
                        Creating and maintaining websites, including
                        WordPress websites, with attention to responsive
                        design, performance, and reliability.
                    </p>
</article>
</div>
<a className="text-link" href="/about">
                Learn More About Me →
            </a>
</section>
</main>
  );
}

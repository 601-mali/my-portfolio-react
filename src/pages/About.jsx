export default function About() {
  return (
    <main>
{/* ABOUT INTRODUCTION */}
<section className="about-hero">
<div className="about-hero-text">
<p className="eyebrow">ABOUT ME</p>
<h1>
                    Building Ideas Into
                    <span>Real Solutions.</span>
</h1>
<p>
                    I'm Barnabas Anyaora, a Full-Stack Web Developer
                    interested in creating responsive interfaces,
                    functional backend systems, and practical web
                    solutions that solve real-world problems.
                </p>
<p>
                    My work brings together frontend development,
                    server-side programming, database integration,
                    and website development.
                </p>
<a className="btn btn-primary" href="/services">
                    Explore My Services
                </a>
</div>
<div className="about-hero-image">
<img alt="Barnabas Anyaora" loading="eager" src="/images/logo.png"/>
</div>
</section>
{/* CORE EXPERTISE */}
<section className="about-expertise">
<div className="section-heading">
<div>
<p className="eyebrow">WHAT I DO</p>
<h2>My Core Expertise</h2>
</div>
<p>
                    I work across the different parts of web development
                    to help build complete and useful web solutions.
                </p>
</div>
<div className="expertise-grid">
<article className="expertise-card">
<img alt="Frontend web interface and design workspace" loading="lazy" src="/images/frontend.png"/>
<div className="expertise-card-content">
<span className="expertise-number">01</span>
<h3>Frontend Development</h3>
<p>
                            Building responsive, accessible interfaces
                            with clean layouts and interactive features.
                        </p>
<ul>
<li>HTML and CSS</li>
<li>JavaScript</li>
<li>Responsive web design</li>
<li>User interface development</li>
</ul>
</div>
</article>
<article className="expertise-card">
<img alt="Backend programming code on a computer screen" loading="lazy" src="/images/backend.png"/>
<div className="expertise-card-content">
<span className="expertise-number">02</span>
<h3>Backend Development</h3>
<p>
                            Developing the server-side logic that allows
                            applications to process requests and data.
                        </p>
<ul>
<li>Node.js and Express.js</li>
<li>REST APIs</li>
<li>Authentication and authorization</li>
<li>Validation and error handling</li>
</ul>
</div>
</article>
<article className="expertise-card">
<img alt="Database technology representing data storage" loading="lazy" src="/images/database.png"/>
<div className="expertise-card-content">
<span className="expertise-number">03</span>
<h3>Database Integration</h3>
<p>
                            Connecting applications to databases to store,
                            organize, retrieve, and manage information.
                        </p>
<ul>
<li>MySQL</li>
<li>Database relationships</li>
<li>CRUD operations</li>
<li>Queries and data filtering</li>
</ul>
</div>
</article>
<article className="expertise-card">
<img alt="WordPress website development workspace" loading="lazy" src="/images/wordpress.png"/>
<div className="expertise-card-content">
<span className="expertise-number">04</span>
<h3>WordPress Development</h3>
<p>
                            Creating and updating websites using WordPress,
                            with attention to layout and usability.
                        </p>
<ul>
<li>Website page setup</li>
<li>Theme customization</li>
<li>Content management</li>
<li>Website updates</li>
</ul>
</div>
</article>
</div>
</section>
{/* TECHNICAL SKILLS */}
<section className="technical-skills">
<p className="eyebrow">MY TOOLKIT</p>
<h2>Technologies I Work With</h2>
<p className="skills-intro">
                Tools and technologies I use across frontend development,
                backend programming, and website projects.
            </p>
<div className="skill-tags">
<span>HTML5</span>
<span>CSS3</span>
<span>JavaScript</span>
<span>Node.js</span>
<span>Express.js</span>
<span>MySQL</span>
<span>WordPress</span>
<span>Git</span>
<span>VS Code</span>
</div>
</section>
{/* MY JOURNEY */}
<section className="about-journey">
<div className="journey-image">
<img alt="Developer workspace with laptop and programming tools" loading="lazy" src="/images/developer-workspace.png"/>
</div>
<div className="journey-content">
<p className="eyebrow">A LITTLE MORE ABOUT ME</p>
<h2>My Development Journey</h2>
<p>
                    My interest in web development comes from the
                    opportunity to turn ideas into working digital
                    experiences. I work on both the visual side of
                    websites and the server-side logic that supports them.
                </p>
<p>
                    I continue to strengthen my skills through practical
                    projects, problem-solving, and learning how different
                    technologies work together.
                </p>
<a className="btn btn-primary" href="/services">
                    View My Services
                </a>
</div>
</section>
{/* CONTACT CALL TO ACTION */}
<section className="about-cta">
<div>
<p className="eyebrow">HAVE A PROJECT IN MIND?</p>
<h2>Let's Build Something Useful.</h2>
<p>
                    Have an idea for a website or web application?
                    Let's discuss how we can bring it to life.
                </p>
</div>
<a className="btn btn-primary" href="#contact">
                Get In Touch
            </a>
</section>
</main>
  );
}

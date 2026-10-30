export default function Services() {
  return (
    <main className="services-page">
{/* Page Introduction */}
<section className="services-hero">
<p className="services-eyebrow">WHAT I DO</p>
<h1>Building Digital <span>Experiences</span></h1>
<p className="services-intro">
                I build responsive websites and functional web applications
                that help businesses establish their online presence and
                turn ideas into practical digital solutions.
            </p>
<a className="services-button" href="#my-services">
                Explore My Services
                <span aria-hidden="true">↓</span>
</a>
</section>
{/* Services */}
<section className="services-section" id="my-services">
<div className="services-section-heading">
<div>
<p className="services-eyebrow">MY EXPERTISE</p>
<h2>Services I <span>Offer</span></h2>
</div>
<p>
                    From the interface users see to the systems working
                    behind it, I focus on building websites that are
                    useful, reliable, and easy to navigate.
                </p>
</div>
<div className="services-grid">
<article className="service-item">
<div className="service-item-image">
<img alt="Frontend web development" src="/images/frontend.png"/>
<span className="service-number">01</span>
</div>
<div className="service-item-content">
<p className="service-category">USER INTERFACE</p>
<h3>Frontend Development</h3>
<p>
                            I create responsive, user-friendly interfaces
                            that look good and work across desktop,
                            tablet, and mobile devices.
                        </p>
<ul>
<li>Responsive website layouts</li>
<li>Interactive web pages</li>
<li>HTML, CSS and JavaScript</li>
</ul>
</div>
</article>
<article className="service-item">
<div className="service-item-image">
<img alt="Backend application development" src="/images/backend.png"/>
<span className="service-number">02</span>
</div>
<div className="service-item-content">
<p className="service-category">SERVER-SIDE SYSTEMS</p>
<h3>Backend Development</h3>
<p>
                            I develop the server-side functionality that
                            allows web applications to process requests,
                            manage information, and communicate with databases.
                        </p>
<ul>
<li>REST API development</li>
<li>Authentication and authorization</li>
<li>Node.js and Express.js</li>
</ul>
</div>
</article>
<article className="service-item">
<div className="service-item-image">
<img alt="Database development and management" src="/images/database.png"/>
<span className="service-number">03</span>
</div>
<div className="service-item-content">
<p className="service-category">DATA MANAGEMENT</p>
<h3>Database Development</h3>
<p>
                            I structure and connect databases to help
                            applications store, retrieve, and manage
                            information efficiently.
                        </p>
<ul>
<li>Database design and relationships</li>
<li>SQL queries and CRUD operations</li>
<li>MySQL integration</li>
</ul>
</div>
</article>
<article className="service-item">
<div className="service-item-image">
<img alt="WordPress website development" src="/images/wordpress.png"/>
<span className="service-number">04</span>
</div>
<div className="service-item-content">
<p className="service-category">WEBSITE SOLUTIONS</p>
<h3>WordPress Development</h3>
<p>
                            I build and customize WordPress websites
                            to help individuals and businesses present
                            their services professionally online.
                        </p>
<ul>
<li>Website setup and customization</li>
<li>Page layout and content updates</li>
<li>Responsive website design</li>
</ul>
</div>
</article>
</div>
</section>
{/* Work Process */}
<section className="work-process">
<div className="process-intro">
<p className="services-eyebrow">MY APPROACH</p>
<h2>How I Turn Ideas Into <span>Websites</span></h2>
<p>
                    Every project starts with understanding the goal
                    and ends with a website that is ready to be tested.
                </p>
</div>
<div className="process-steps">
<article className="process-step">
<span>01</span>
<h3>Understand</h3>
<p>I clarify your goals, requirements, and target users.</p>
</article>
<article className="process-step">
<span>02</span>
<h3>Plan &amp; Build</h3>
<p>I organize the structure and develop the solution.</p>
</article>
<article className="process-step">
<span>03</span>
<h3>Test &amp; Refine</h3>
<p>I check functionality, responsiveness, and usability.</p>
</article>
<article className="process-step">
<span>04</span>
<h3>Deliver</h3>
<p>I prepare the completed work for deployment.</p>
</article>
</div>
</section>
{/* Contact Call to Action */}
<section className="services-cta">
<p className="services-eyebrow">HAVE A PROJECT IN MIND?</p>
<h2>Let's Build Something <span>Great</span></h2>
<p>
                Have an idea for a website or web application?
                Let's discuss what you need and how I can help.
            </p>
<a className="services-button" href="mailto:anyaorabarnabas@gmail.com">
                Get In Touch <span aria-hidden="true">↗</span>
</a>
</section>
</main>
  );
}

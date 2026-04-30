import { useState, useEffect, useId } from 'react'

/* ── SC Seal SVG ── */
function SCSeal({ size = 120, className = '' }) {
  const uid = useId().replace(/:/g, '')
  const arcId = `arc-${uid}`
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="99" fill="#061545"/>
      <circle cx="100" cy="100" r="95.5" stroke="#B09A3E" strokeWidth="1.2"/>
      <circle cx="100" cy="100" r="80" stroke="#B09A3E" strokeWidth="0.6" strokeDasharray="2.5 2"/>
      <text x="100" y="108" textAnchor="middle" fontFamily="Georgia,'Times New Roman',serif" fontSize="46" fontWeight="700" fill="white" letterSpacing="5">SC</text>
      <path d="M100 120 L104 127 L100 134 L96 127 Z" fill="#B09A3E"/>
      <text x="100" y="155" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="8" fill="#B09A3E" letterSpacing="5">EST. MMXXVI</text>
      <defs>
        <path id={arcId} d="M100,17 A83,83 0 0,1 183,100 A83,83 0 0,1 100,183 A83,83 0 0,1 17,100 A83,83 0 0,1 100,17"/>
      </defs>
      <text fontFamily="Arial,sans-serif" fontSize="8.5" fill="#B09A3E" letterSpacing="4.5">
        <textPath href={`#${arcId}`} startOffset="5%">SC FINANCIAL AND LIFE SERVICES · EST MMXXVI ·</textPath>
      </text>
    </svg>
  )
}

/* ── Inline Icons ── */
const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)
const ShieldIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const LockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

/* ── Unsplash helper ── */
const img = (id, w = 1920, h = null) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`

/* ── Service card data ── */
const SERVICES = [
  {
    title: 'Term Life Insurance',
    sub: 'Starting from $250K',
    desc: 'Affordable, straightforward protection for your peak earning years. Covers your family when they need it most.',
  },
  {
    title: 'Whole Life Insurance',
    sub: 'Permanent Coverage',
    desc: 'Lifetime protection with guaranteed cash value accumulation. A cornerstone of generational financial planning.',
  },
  {
    title: 'Universal Life Insurance',
    sub: 'Flexible Premiums',
    desc: 'Permanent coverage with the flexibility to adjust premiums and death benefits as your life evolves.',
  },
  {
    title: 'Indexed Universal Life',
    sub: 'Market-Linked Growth',
    desc: 'Participate in market upside with downside protection. A powerful tool for tax-advantaged wealth accumulation.',
  },
  {
    title: 'Final Expense Insurance',
    sub: 'Simplified Issue',
    desc: 'Dignified coverage to protect your family from end-of-life expenses. Easy approval, lasting peace of mind.',
  },
  {
    title: 'Business Coverage',
    sub: 'Key Person & Buy-Sell',
    desc: 'Protect your business interests with executive benefit packages, key person coverage, and succession planning.',
  },
  {
    title: 'Defined Benefit Plans',
    sub: 'Employer-Sponsored Retirement',
    desc: 'Traditional pension-style plans that guarantee retirement income for business owners and key employees. Maximize tax deductions while building a tax-deferred retirement asset.',
  },
]

/* ── Testimonial data ── */
const TESTIMONIALS = [
  {
    quote: 'After years of putting it off, SC Financial made the process effortless. They found me coverage I could actually afford and helped me understand exactly what I was signing.',
    name: 'Robert M.',
    location: 'Dallas, TX',
    policy: '20-Year Term · $500,000',
    avatarUrl: img('1507003211169-0a1dd7228f2d', 80, 80),
  },
  {
    quote: 'They took the time to truly understand our family\'s situation. No pressure, no rush. We feel genuinely protected now — and we know exactly who to call if anything changes.',
    name: 'Jennifer & Marcus T.',
    location: 'Atlanta, GA',
    policy: 'Whole Life · $1,000,000',
    avatarUrl: img('1531746020798-e6953c6e8e04', 80, 80),
  },
  {
    quote: 'As a widow, I needed guidance I could trust completely. SC Financial was patient, thorough, and showed real care for my outcome. That matters more than anything.',
    name: 'Patricia W.',
    location: 'Chicago, IL',
    policy: 'Final Expense · $50,000',
    avatarUrl: img('1544005313-94ddf0286df2', 80, 80),
  },
]

/* ══════════════════════════════════════════════════════════
   LANDING PAGE COMPONENT
   ══════════════════════════════════════════════════════════ */
export default function LandingPage({ onApply }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [announcementVisible, setAnnouncementVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="lp">

      {/* ── 1. ANNOUNCEMENT BAR ── */}
      {announcementVisible && (
        <div className="lp-announcement">
          <p className="lp-announcement-text">
            <span className="lp-announcement-dot" />
            Now licensed in all 50 states
            <span className="lp-announcement-sep">·</span>
            Est. MMXXVI
            <span className="lp-announcement-sep">·</span>
            Fully digital application — takes&nbsp;~10&nbsp;min
          </p>
          <button
            className="lp-announcement-close"
            onClick={() => setAnnouncementVisible(false)}
            aria-label="Dismiss announcement"
          >×</button>
        </div>
      )}

      {/* ── 2. NAV ── */}
      <header
        className={`lp-nav${scrolled ? ' scrolled' : ''}`}
        style={{ top: announcementVisible ? '36px' : '0' }}
      >
        <div className="lp-nav-inner">
          <button className="lp-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="SC Financial home">
            <SCSeal size={44} />
            <div className="lp-logo-text">
              <span className="lp-logo-name">SC FINANCIAL</span>
              <span className="lp-logo-sub">&amp; LIFE SERVICES</span>
            </div>
          </button>

          <nav className="lp-nav-links" aria-label="Main navigation">
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('serve')}>Who We Serve</button>
            <button onClick={() => scrollTo('services')}>Services</button>
            <button onClick={() => scrollTo('goall')}>GOALL</button>
            <button onClick={() => scrollTo('story')}>Our Story</button>
            <button onClick={() => scrollTo('resources')}>Resources</button>
          </nav>

          <div className="lp-nav-right">
            <button className="lp-btn-nav-apply" onClick={onApply}>Apply Now</button>
            <button
              className={`lp-hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(m => !m)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lp-mobile-menu">
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('serve')}>Who We Serve</button>
            <button onClick={() => scrollTo('services')}>Services</button>
            <button onClick={() => scrollTo('goall')}>GOALL Program</button>
            <button onClick={() => scrollTo('story')}>Our Story</button>
            <button onClick={() => scrollTo('resources')}>Resources</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
            <button className="lp-mobile-apply" onClick={onApply}>Begin Application →</button>
          </div>
        )}
      </header>

      {/* ── 3. HERO ── */}
      <section
        className="lp-hero"
        id="home"
        style={{ paddingTop: announcementVisible ? '136px' : '100px' }}
      >
        <div className="lp-hero-overlay" aria-hidden="true" />
        <div className="lp-hero-content lp-container">
          <p className="lp-hero-eyebrow">PRUDENCE · PROTECTION · PROSPERITY</p>
          <h1 className="lp-hero-headline">
            Stewards of Your<br/>
            <em>Financial Life.</em>
          </h1>
          <p className="lp-hero-sub">
            We guide families and individuals toward lasting security —
            with wisdom, integrity, and an unwavering commitment to your future.
          </p>
          <div className="lp-hero-actions">
            <button className="lp-btn-gold" onClick={onApply}>
              Begin Your Application <ArrowRight/>
            </button>
            <button className="lp-btn-outline" onClick={() => scrollTo('services')}>
              Explore Coverage
            </button>
          </div>
          <div className="lp-hero-trust">
            <span><ShieldIcon/> Licensed in all 50 States</span>
            <span className="lp-trust-dot">·</span>
            <span>Est. MMXXVI</span>
            <span className="lp-trust-dot">·</span>
            <span><LockIcon/> Bank-Level Encryption</span>
          </div>
        </div>
      </section>

      {/* ── 4. TRUST STRIP ── */}
      <div className="lp-trust-strip">
        <div className="lp-container">
          <div className="lp-trust-strip-inner">
            {[
              { label: 'AM Best A+',     sub: 'Carrier Rated'       },
              { label: 'BBB Accredited', sub: 'Business'            },
              { label: '50 States',      sub: 'Licensed'            },
              { label: '~10 Minutes',    sub: 'To Apply'            },
              { label: 'Bank-Level',     sub: '256-bit Encryption'  },
            ].map(item => (
              <div className="lp-trust-item" key={item.label}>
                <span className="lp-trust-item-label">{item.label}</span>
                <span className="lp-trust-item-sub">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. THREE PILLARS ── */}
      <section className="lp-pillars" id="about">
        <div className="lp-container">
          <div className="lp-section-header">
            <p className="lp-eyebrow">Our Philosophy</p>
            <h2 className="lp-section-title">The Three Pillars of Financial Stewardship</h2>
            <p className="lp-section-sub">Everything we do is built upon these foundational principles.</p>
          </div>
          <div className="lp-pillars-grid">
            {[
              {
                roman: 'I',
                title: 'Prudence',
                desc: 'Every recommendation we make is grounded in careful analysis, disciplined strategy, and alignment with your long-term interests. We never lead with product — we lead with purpose.',
              },
              {
                roman: 'II',
                title: 'Protection',
                desc: 'Life changes unexpectedly. We ensure the people and values you hold dear are never left without the support they need — today, tomorrow, and for generations to come.',
              },
              {
                roman: 'III',
                title: 'Prosperity',
                desc: 'True wealth is not built overnight. We design strategies that compound over time, creating financial freedom and lasting generational impact for the families we serve.',
              },
            ].map(p => (
              <div className="lp-pillar-card" key={p.roman}>
                <span className="lp-pillar-roman">{p.roman}</span>
                <div className="lp-pillar-rule"/>
                <h3 className="lp-pillar-title">{p.title}</h3>
                <p className="lp-pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHO WE SERVE ── */}
      <section className="lp-serve" id="serve">
        <div className="lp-container">
          <div className="lp-section-header">
            <p className="lp-eyebrow">Who We Serve</p>
            <h2 className="lp-section-title">Protection Built for Every Stage of Life</h2>
            <p className="lp-section-sub">Whether you're building a family, growing a business, or preserving what you've worked for — we have a path forward for you.</p>
          </div>
          <div className="lp-serve-grid">
            {[
              {
                img: img('1609220136736-443140cffec6', 600),
                title: 'Families & Individuals',
                desc: 'Ensure the people you love are protected no matter what life brings. From young families building futures to individuals securing their legacy.',
                cta: 'Family Coverage →',
              },
              {
                img: img('1556761175-5973dc0f32e7', 600),
                title: 'Business Owners',
                desc: "Your business is your life's work. Protect it with key person coverage, buy-sell agreements, and executive benefit strategies that reward loyalty.",
                cta: 'Business Coverage →',
              },
              {
                img: img('1559526324-4b87b5e36e44', 600),
                title: 'Retirees & Seniors',
                desc: 'Final expense, legacy planning, and long-term care preparation — peace of mind for every chapter of your retirement.',
                cta: 'Senior Coverage →',
              },
            ].map(item => (
              <div className="lp-serve-card" key={item.title}>
                <div className="lp-serve-card-img">
                  <img src={item.img} alt={item.title} loading="lazy"/>
                </div>
                <div className="lp-serve-card-body">
                  <h3 className="lp-serve-card-title">{item.title}</h3>
                  <p className="lp-serve-card-desc">{item.desc}</p>
                  <button className="lp-serve-card-link" onClick={() => scrollTo('services')}>
                    {item.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. SERVICES ── */}
      <section className="lp-services" id="services">
        <div className="lp-container">
          <div className="lp-section-header">
            <p className="lp-eyebrow">What We Offer</p>
            <h2 className="lp-section-title">Comprehensive Life Insurance Solutions</h2>
            <p className="lp-section-sub">From foundational protection to sophisticated wealth-building strategies — we meet you where you are.</p>
          </div>
          <div className="lp-services-grid">
            {SERVICES.map(s => (
              <div className="lp-service-card lp-service-card--v2" key={s.title}>
                <div className="lp-service-accent"/>
                <div className="lp-service-body">
                  <h3 className="lp-service-title">{s.title}</h3>
                  <span className="lp-service-sub">{s.sub}</span>
                  <p className="lp-service-desc">{s.desc}</p>
                  <button className="lp-service-link" onClick={onApply}>Get a Quote →</button>
                </div>
              </div>
            ))}
          </div>
          <div className="lp-services-cta">
            <button className="lp-btn-gold" onClick={onApply}>
              Find My Coverage <ArrowRight/>
            </button>
          </div>
        </div>
      </section>

      {/* ── 8. GOALL PROGRAM ── */}
      <section className="lp-goall" id="goall">
        <div className="lp-container">
          <div className="lp-goall-header">
            <p className="lp-eyebrow lp-eyebrow--light">Featured Program</p>
            <h2 className="lp-section-title lp-section-title--light">
              The GOALL Program
            </h2>
            <p className="lp-goall-acronym">Growth Only Automated Life &amp; Legacy</p>
            <p className="lp-goall-intro">
              SC Financial partners with the GOALL program to deliver one of the most innovative
              employer-sponsored benefit solutions in the country. Unlike traditional 401(k) plans,
              GOALL leverages the power of permanent life insurance to give employees protection,
              growth, and tax-free retirement income — all without market risk.
            </p>
          </div>

          <div className="lp-goall-columns">
            <div className="lp-goall-col">
              <h3 className="lp-goall-col-title">For Employers</h3>
              <ul className="lp-goall-list">
                {[
                  'Attract, retain & reward top talent at lower cost than traditional benefit programs',
                  'Achieve 90%+ employee participation without mandatory enrollment',
                  'Reduce company tax liability while dramatically enhancing benefit value',
                  'Cost 40% less than comparable alternative benefit programs',
                ].map(item => (
                  <li key={item}><span className="lp-goall-check"><CheckIcon/></span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="lp-goall-col">
              <h3 className="lp-goall-col-title">For Employees</h3>
              <ul className="lp-goall-list">
                {[
                  'Permanent death benefit that travels with you after leaving your employer',
                  'Built-in living benefits: terminal, chronic & critical illness coverage',
                  'Tax-free retirement income — principal never loses value in a down market',
                  'Flexible access for college, home purchase, medical bills, or emergencies',
                ].map(item => (
                  <li key={item}><span className="lp-goall-check"><CheckIcon/></span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lp-goall-rule"/>

          <div className="lp-goall-how">
            {[
              {
                num: '01',
                title: 'Zero Market Risk',
                desc: 'Principal is fully protected. Your cash value grows tax-deferred and never decreases when the stock market falls — growth only, no losses.',
              },
              {
                num: '02',
                title: 'Living Benefits',
                desc: 'Access a portion of your death benefit while still living if diagnosed with a terminal, chronic, or critical illness. Protection for life\'s hardest moments.',
              },
              {
                num: '03',
                title: 'Tax-Free Retirement',
                desc: 'Retirement distributions come out tax-free and don\'t count as income against Social Security. Fully portable — benefits stay with the employee no matter where they work.',
              },
            ].map(card => (
              <div className="lp-goall-how-card" key={card.num}>
                <span className="lp-goall-how-num">{card.num}</span>
                <h4 className="lp-goall-how-title">{card.title}</h4>
                <p className="lp-goall-how-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="lp-goall-cta">
            <a className="lp-btn-gold" href="https://umustsee.net/FGL6JS" target="_blank" rel="noopener noreferrer">
              Learn How GOALL Can Work for Your Team <ArrowRight/>
            </a>
          </div>
        </div>
      </section>

      {/* ── 9. STATS ── */}
      <section className="lp-stats">
        <div className="lp-container">
          <div className="lp-section-header lp-section-header--light">
            <p className="lp-eyebrow lp-eyebrow--light">Why SC Financial</p>
            <h2 className="lp-section-title lp-section-title--light">A Track Record Built on Trust</h2>
          </div>
          <div className="lp-stats-grid">
            {[
              { num: '$500M+',   label: 'Coverage Placed',    detail: 'for families and individuals' },
              { num: '98%',      label: 'Client Retention',   detail: 'year over year'               },
              { num: '50',       label: 'States Licensed',    detail: 'full national coverage'       },
              { num: '~10 min',  label: 'To Apply',           detail: 'fully digital, start to finish'},
            ].map(s => (
              <div className="lp-stat-card" key={s.num}>
                <span className="lp-stat-num">{s.num}</span>
                <span className="lp-stat-label">{s.label}</span>
                <span className="lp-stat-detail">{s.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. OUR STORY ── */}
      <section className="lp-story" id="story">
        <div className="lp-container">
          <div className="lp-story-inner">
            <div className="lp-story-photo">
              <img
                src={img('1573497019940-1c28c88b4f3e', 900)}
                alt="SC Financial advisor meeting with clients"
                loading="lazy"
              />
              <div className="lp-story-photo-badge">
                <SCSeal size={68}/>
                <span>Est. MMXXVI</span>
              </div>
            </div>
            <div className="lp-story-content">
              <p className="lp-eyebrow">Our Story</p>
              <h2 className="lp-section-title">Born from a Belief That Every Family Deserves a Trusted Advocate</h2>
              <p className="lp-story-body">
                SC Financial &amp; Life Services was founded on a simple conviction: the life
                insurance industry needed brokers who lead with the client's interest — not the
                commission. We built this firm to be different. Independent, principled, and
                unwavering in our commitment to the families we serve.
              </p>
              <p className="lp-story-body">
                Operating across all 50 states, we work with the nation's top-rated carriers to
                design coverage strategies that fit real lives — not products looking for buyers.
              </p>
              <div className="lp-story-milestones">
                {[
                  { year: 'MMXXVI',  label: 'Founded with a fiduciary-first philosophy' },
                  { year: '50',      label: 'States licensed from day one' },
                  { year: '$500M+',  label: 'In coverage placed for clients' },
                ].map(m => (
                  <div className="lp-story-milestone" key={m.year}>
                    <span className="lp-story-milestone-year">{m.year}</span>
                    <span className="lp-story-milestone-label">{m.label}</span>
                  </div>
                ))}
              </div>
              <button className="lp-btn-gold" onClick={onApply}>
                Begin Your Application <ArrowRight/>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. PHILOSOPHY QUOTE ── */}
      <section className="lp-philosophy">
        <div className="lp-container">
          <div className="lp-philosophy-inner">
            <span className="lp-quote-glyph">&ldquo;</span>
            <blockquote className="lp-philosophy-quote">
              The foundation of a financial life is not yield,<br/>
              but the steadfast stewardship of what is entrusted.
            </blockquote>
            <p className="lp-philosophy-attr">— The SC Financial Standard of Care</p>
          </div>
        </div>
      </section>

      {/* ── 12. PROCESS ── */}
      <section className="lp-process" id="process">
        <div className="lp-container">
          <div className="lp-section-header">
            <p className="lp-eyebrow">How It Works</p>
            <h2 className="lp-section-title">From First Conversation to Full Coverage</h2>
            <p className="lp-section-sub">We believe the path to protection should be clear, simple, and reassuring.</p>
          </div>
          <div className="lp-process-steps">
            {[
              { num: '01', title: 'Consult',  desc: 'We listen first. Understanding your family, your goals, and your concerns before any recommendation is made.' },
              { num: '02', title: 'Design',   desc: 'We architect a coverage plan tailored to your needs — not a one-size-fits-all product pushed for commission.' },
              { num: '03', title: 'Apply',    desc: 'Our streamlined digital application takes about 10 minutes. We guide you every step of the way.' },
              { num: '04', title: 'Protect',  desc: 'Coverage in place. Peace of mind delivered. An ongoing relationship built on trust and regular review.' },
            ].map(s => (
              <div className="lp-process-step" key={s.num}>
                <div className="lp-process-num">{s.num}</div>
                <h3 className="lp-process-title">{s.title}</h3>
                <p className="lp-process-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. TESTIMONIALS ── */}
      <section className="lp-testimonials">
        <div className="lp-container">
          <div className="lp-section-header">
            <p className="lp-eyebrow">Client Stories</p>
            <h2 className="lp-section-title">What Our Clients Say</h2>
          </div>
          <div className="lp-testimonials-grid">
            {TESTIMONIALS.map(t => (
              <div className="lp-testimonial-card" key={t.name}>
                <div className="lp-testimonial-stars">★★★★★</div>
                <blockquote className="lp-testimonial-quote">"{t.quote}"</blockquote>
                <div className="lp-testimonial-footer">
                  <div className="lp-testimonial-avatar">
                    <img src={t.avatarUrl} alt={t.name}/>
                  </div>
                  <div>
                    <p className="lp-testimonial-name">{t.name}</p>
                    <p className="lp-testimonial-meta">{t.location} · {t.policy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. RESOURCES ── */}
      <section className="lp-resources" id="resources">
        <div className="lp-container">
          <div className="lp-section-header">
            <p className="lp-eyebrow">Resource Center</p>
            <h2 className="lp-section-title">Knowledge for Every Stage of Your Financial Life</h2>
          </div>
          <div className="lp-resources-grid">
            {[
              {
                img: img('1434493789847-2f02dc6ca35d', 600),
                tag: 'Getting Started',
                title: 'Life Insurance 101: What Every Family Should Know',
                desc: "Understanding the difference between term, whole, and universal life — and which type fits your family's needs right now.",
                read: '5 min read',
              },
              {
                img: img('1493809842364-78817add7ffb', 600),
                tag: 'Planning',
                title: 'How Much Coverage Does Your Family Actually Need?',
                desc: 'A straightforward framework for calculating the right death benefit — based on your real income, debts, and obligations.',
                read: '7 min read',
              },
              {
                img: img('1473186578172-c141e6798cf4', 600),
                tag: 'Retirement',
                title: 'Using Life Insurance as a Retirement Planning Tool',
                desc: 'How indexed universal life policies provide tax-advantaged growth while maintaining lifetime protection — and how GOALL makes this accessible.',
                read: '6 min read',
              },
            ].map(a => (
              <div className="lp-resource-card" key={a.title}>
                <div className="lp-resource-img">
                  <img src={a.img} alt={a.title} loading="lazy"/>
                  <span className="lp-resource-tag">{a.tag}</span>
                </div>
                <div className="lp-resource-body">
                  <h3 className="lp-resource-title">{a.title}</h3>
                  <p className="lp-resource-desc">{a.desc}</p>
                  <span className="lp-resource-read">{a.read}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. CTA BANNER ── */}
      <section className="lp-cta-banner lp-cta-banner--photo" id="contact">
        <div className="lp-cta-overlay" aria-hidden="true"/>
        <div className="lp-container">
          <div className="lp-cta-content lp-cta-content--centered">
            <h2 className="lp-cta-title">Ready to Secure Your Family's Future?</h2>
            <p className="lp-cta-sub">Begin your application today. Takes about 10 minutes. Fully secure and digital.</p>
            <div className="lp-cta-actions">
              <button className="lp-btn-gold" onClick={onApply}>
                Begin Your Application <ArrowRight/>
              </button>
              <a href="mailto:info@scfinanciallife.com" className="lp-btn-outline">
                Speak With an Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 16. FOOTER ── */}
      <footer className="lp-footer">
        <div className="lp-container">
          <div className="lp-footer-top">
            <div className="lp-footer-brand">
              <SCSeal size={54}/>
              <div>
                <p className="lp-footer-name">SC Financial &amp; Life Services</p>
                <p className="lp-footer-tagline"><em>Stewards of Your Financial Life.</em></p>
              </div>
            </div>
            <div className="lp-footer-links">
              <div className="lp-footer-col">
                <p className="lp-footer-col-title">Coverage</p>
                <span>Term Life Insurance</span>
                <span>Whole Life Insurance</span>
                <span>Universal Life Insurance</span>
                <span>Indexed Universal Life</span>
                <span>Defined Benefit Plans</span>
                <button onClick={() => scrollTo('goall')}>GOALL Program</button>
              </div>
              <div className="lp-footer-col">
                <p className="lp-footer-col-title">Company</p>
                <button onClick={() => scrollTo('about')}>About Us</button>
                <button onClick={() => scrollTo('serve')}>Who We Serve</button>
                <button onClick={() => scrollTo('story')}>Our Story</button>
                <button onClick={() => scrollTo('process')}>How It Works</button>
                <button onClick={onApply}>Apply Now</button>
              </div>
              <div className="lp-footer-col">
                <p className="lp-footer-col-title">Contact</p>
                <a href="mailto:info@scfinanciallife.com">info@scfinanciallife.com</a>
                <a href="tel:+12125550101">+1 (212) 555-0101</a>
                <span style={{ marginTop: '6px', fontSize: '0.82rem', opacity: 0.45, fontStyle: 'italic' }}>Licensed Insurance Brokerage</span>
              </div>
            </div>
          </div>

          <div className="lp-footer-certs">
            <span className="lp-footer-cert">AM Best A+</span>
            <span className="lp-footer-cert">BBB Accredited</span>
            <span className="lp-footer-cert">Licensed · All 50 States</span>
            <span className="lp-footer-cert">GOALL Partner Agency</span>
          </div>

          <div className="lp-footer-social">
            <button className="lp-footer-social-link" aria-label="LinkedIn"><LinkedInIcon/></button>
            <button className="lp-footer-social-link" aria-label="Facebook"><FacebookIcon/></button>
          </div>

          <div className="lp-footer-bottom">
            <p>© 2026 SC Financial Life Group. All rights reserved. <em>Stewards of Your Financial Life.</em></p>
            <div className="lp-footer-legal">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Licensing</span>
            </div>
          </div>

          <p className="lp-footer-disclaimer">
            SC Financial &amp; Life Services is an independent insurance brokerage. Products and
            availability vary by state. Life insurance policies are issued by third-party carriers
            not affiliated with SC Financial &amp; Life Services. GOALL is a registered program of
            GOALL Agency. Defined benefit plans are subject to IRS contribution and testing rules.
            Always review policy documents carefully before purchasing any insurance product.
          </p>
        </div>
      </footer>

    </div>
  )
}

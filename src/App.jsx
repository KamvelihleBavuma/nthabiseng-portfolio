import { useEffect, useRef, useState } from "react";

import {
  profile,
  navigation,
  strengths,
  personalStatement,
  journey,
  developmentRecords,
  tutorialUnits,
  sessionSchedule,
  technologyTools,
  reflections,
  documents,
  gallery,
  feedbackChannels,
} from "./data.js";

const fullName = `${profile.firstName} ${profile.lastName}`;

const documentCategories = [
  "All",
  ...new Set(documents.map((item) => item.category)),
];

function readTheme() {
  try {
    const saved = localStorage.getItem("portfolio-theme");

    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // Storage is optional.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function readSection() {
  const id = window.location.hash.slice(1);

  return navigation.some((item) => item.id === id) ? id : "personal";
}

// Missing images are omitted, with no editing prompts or placeholders.
function AssetImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) return null;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>

      <h2 id="section-title" tabIndex={-1}>
        {title}
      </h2>

      {children && <p className="section-description">{children}</p>}
    </header>
  );
}

function PersonalStatement({ onNavigate }) {
  return (
    <>
      <SectionHeading
        eyebrow="01 / Personal Statement"
        title="A student. A tutor. A growing leader."
      >
        My journey of preparation, partnership, and practical student support.
      </SectionHeading>

      <div className="statement-grid">
        <article className="card statement-card">
          <span className="badge">My tutoring journey</span>

          <h3>Hello, I’m {profile.firstName}.</h3>

          {personalStatement.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <button
            className="button button-primary"
            onClick={() => onNavigate("reflections")}
          >
            Explore my reflections <span aria-hidden="true">↗</span>
          </button>
        </article>

        <aside className="card values-card">
          <p className="eyebrow">What I bring</p>
          <h3>Friendly energy. Focused effort.</h3>

          <div className="chips">
            {strengths.map((strength) => (
              <span className="chip" key={strength}>
                {strength}
              </span>
            ))}
          </div>

          <blockquote className="personal-motto">
            “{profile.tagline}”
            <cite>My portfolio motto</cite>
          </blockquote>
        </aside>
      </div>

      <h3 className="subheading">My journey so far</h3>

      <ol className="timeline">
        {journey.map((item) => (
          <li key={item.title}>
            <span className="timeline-marker">{item.marker}</span>

            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

function ModuleDetails() {
  const details = [
    ["Institution", profile.university],
    ["Qualification", profile.qualification],
    ["Course structure", profile.courseStructure],
    ["Course started", profile.courseStart],
    ["Tutoring year", profile.tutoringYear],
    ["Module", profile.module],
    ["Lecturer", profile.lecturer],
    ["Tutor", fullName],
    ["Tutor partner", `${profile.partner} · third-year student`],
    ["Practical programming language", "C#"],
  ];

  return (
    <>
      <SectionHeading
        eyebrow="02 / Module Details"
        title="Development Software 1"
      >
        Practical tutorial support guided by the 2026 Student Module Guide.
      </SectionHeading>

      <article className="card">
        <dl className="details-grid">
          {details.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </article>

      <div className="two-column section-space">
        <article className="card">
          <h3>The role of tutorials</h3>

          <p>
            Mrs. Twetwa-Dube taught both theory and practical content. At her
            request, our tutorials were entirely practical and gave students
            opportunities to work through activities.
          </p>

          <p>
            We followed the module guide strictly when preparing sessions and
            delivering topics.
          </p>
        </article>

        <article className="card">
          <h3>My responsibilities</h3>

          <ul className="content-list">
            <li>Preparing and conducting practical DS1 tutorials.</li>
            <li>Supporting group activities and responding to questions.</li>
            <li>Creating notes and exercises with my tutor partner.</li>
            <li>Submitting session plans with physical registers.</li>
            <li>Helping invigilate five of the module’s six tests.</li>
          </ul>
        </article>
      </div>
    </>
  );
}

function TrainingDevelopment() {
  return (
    <>
      <SectionHeading
        eyebrow="03 / Training & Development"
        title="Preparing for student success"
      >
        Training, mentoring, and collaboration through the FEBEIT tutor programme.
      </SectionHeading>

      <article className="feature-panel">
        <p className="eyebrow">Programme theme</p>
        <h3>Student Success</h3>

        <p>
          The Tutor Training and Preparation Programme took place at the start
          of the first and second semesters. Mrs. Yawa and other student
          assistance representatives trained and mentored us in practical
          approaches to conducting sessions and working with students.
        </p>

        <p>
          Their mentoring continued throughout the programme in the Faculty of
          Engineering, Built Environment and Information Technology.
        </p>
      </article>

      <div className="two-column section-space">
        {developmentRecords.map((record) => (
          <article className="card" key={record.title}>
            <span className="badge">{record.status}</span>
            <h3>{record.title}</h3>
            <p>{record.text}</p>

            <div className="application">
              <h4>Connection to my tutoring</h4>
              <p>{record.application}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function TutorialDelivery({ onNavigate }) {
  return (
    <>
      <SectionHeading
        eyebrow="04 / Tutorial Delivery"
        title="Practical learning, together"
      >
        Activities, group work, and a topic sequence drawn from the module guide.
      </SectionHeading>

      <div className="two-column">
        <article className="card">
          <h3>How sessions were conducted</h3>

          <p>
            Tutorials were entirely practical. Students were most often
            separated into groups for activities, using a technique learned
            during our training programme.
          </p>

          <p>
            Whiteboards, markers, dusters, and projectors supported activities
            in campus venues. Some resources were provided by our tutor
            programme facilitators.
          </p>
        </article>

        <article className="card">
          <h3>Preparation and response</h3>

          <p>
            Most session materials came from Mrs. Twetwa-Dube. We also created
            notes and exercise documents to prepare for and conduct tutorials.
          </p>

          <p>
            Student feedback on activities was received and attended to during
            and immediately after sessions.
          </p>
        </article>
      </div>

      <h3 className="subheading">Usual session times</h3>

      <div className="schedule-grid">
        {sessionSchedule.map((session) => (
          <article className="card schedule-card" key={session.day}>
            <span className="badge">{session.frequency}</span>
            <h4>{session.day}</h4>
            <p className="session-time">{session.time}</p>
          </article>
        ))}
      </div>

      <p className="small-text section-space">
        Times are South African Standard Time. Friday sessions were occasional,
        especially a few days before tests.
      </p>

      <h3 className="subheading">Tutorial sequence</h3>

      <p className="section-description">
        Topics were delivered in the following order, as specified by the 2026
        Student Module Guide.
      </p>

      <ol className="unit-list">
        {tutorialUnits.map((unit, index) => (
          <li key={unit.unit}>
            <span className="unit-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <span className="badge">{unit.unit}</span>
              <h4>{unit.title}</h4>
              {unit.detail && <p>{unit.detail}</p>}
            </div>
          </li>
        ))}
      </ol>

      <article className="card section-space">
        <h3>Preparation and attendance records</h3>

        <p>
          Under the FEBEIT tutor programme policy, tutorial session plans were
          submitted alongside physical registers. The evidence library brings
          these records together with our tutor-created notes and revision
          resources.
        </p>

        <button
          className="button button-primary"
          onClick={() => onNavigate("evidence")}
        >
          Explore tutorial evidence <span aria-hidden="true">↗</span>
        </button>
      </article>
    </>
  );
}

function Technology() {
  return (
    <>
      <SectionHeading
        eyebrow="05 / Integration of Technology"
        title="Tools that supported the work"
      >
        Preparing resources, demonstrating activities, and maintaining contact
        with students.
      </SectionHeading>

      <div className="two-column">
        {technologyTools.map((tool) => (
          <article className="card" key={tool.title}>
            <span className="badge">{tool.category}</span>
            <h3>{tool.title}</h3>
            <p>{tool.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}

function Reflections() {
  return (
    <>
      <SectionHeading
        eyebrow="06 / Reflections & Lessons Learnt"
        title="Learning through the tutor role"
      >
        Connecting my training, technology choices, and practical delivery to
        the lessons of the programme.
      </SectionHeading>

      <div className="two-column">
        {reflections.map((reflection) => (
          <article className="card" key={reflection.title}>
            <h3>{reflection.title}</h3>

            <dl className="reflection-details">
              <div>
                <dt>The challenge</dt>
                <dd>{reflection.challenge}</dd>
              </div>

              <div>
                <dt>My response</dt>
                <dd>{reflection.response}</dd>
              </div>

              <div>
                <dt>The lesson</dt>
                <dd>{reflection.lesson}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </>
  );
}

function Filters({ options, selected, onSelect }) {
  return (
    <div
      className="filters"
      role="group"
      aria-label="Filter documents by category"
    >
      {options.map((option) => (
        <button
          key={option}
          className={`filter-button ${selected === option ? "selected" : ""}`}
          aria-pressed={selected === option}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function DocumentCard({ item, onPreview }) {
  return (
    <article className="card document-card">
      <div className="document-topline">
        <span className="file-mark" aria-hidden="true">
          PDF
        </span>
        <span className="badge">{item.category}</span>
      </div>

      <h4>{item.title}</h4>
      <p>{item.description}</p>

      {item.file && (
        <div className="document-actions">
          <button
            className="button button-secondary"
            onClick={() =>
              onPreview({
                kind: "pdf",
                title: item.title,
                src: item.file,
                downloadable: item.downloadable,
                downloadName: item.downloadName,
              })
            }
          >
            Preview
          </button>

          {item.downloadable && (
            <a
              className="button button-primary"
              href={item.file}
              download={item.downloadName}
            >
              Download
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function PhotoCard({ photo, onPreview }) {
  return (
    <figure className="gallery-card">
      <AssetImage
        src={photo.image}
        alt={photo.alt}
        className="gallery-image"
      />

      <figcaption>
        <span className="badge">{photo.category}</span>
        <h4>{photo.title}</h4>
        <p>{photo.caption}</p>

        <button
          className="text-button"
          onClick={() =>
            onPreview({
              kind: "image",
              title: photo.title,
              src: photo.image,
              alt: photo.alt,
              caption: photo.caption,
            })
          }
        >
          View image <span aria-hidden="true">↗</span>
        </button>
      </figcaption>
    </figure>
  );
}

function Evidence({ onPreview }) {
  const [filter, setFilter] = useState("All");

  const visibleDocuments = documents.filter(
    (item) => filter === "All" || item.category === filter,
  );

  const photos = gallery.filter((photo) => Boolean(photo.image));

  if (profile.portrait) {
    photos.unshift({
      id: "professional-profile",
      title: fullName,
      category: "Professional Profile",
      caption: "Development Software 1 tutor, 2026.",
      image: profile.portrait,
      alt: `Professional portrait of ${fullName}`,
    });
  }

  return (
    <>
      <SectionHeading
        eyebrow="07 / Gallery / Evidence"
        title="The resources behind the sessions"
      >
        Tutor-created notes, revision documents, the module guide, and session
        records.
      </SectionHeading>

      <h3 className="subheading first-subheading">Document library</h3>

      <Filters
        options={documentCategories}
        selected={filter}
        onSelect={setFilter}
      />

      <p className="result-count" role="status">
        {visibleDocuments.length} document{" "}
        {visibleDocuments.length === 1 ? "entry" : "entries"}
      </p>

      <div className="two-column">
        {visibleDocuments.map((item) => (
          <DocumentCard key={item.id} item={item} onPreview={onPreview} />
        ))}
      </div>

      {photos.length > 0 && (
        <>
          <h3 className="subheading">Profile and attendance records</h3>

          <div className="gallery-grid">
            {photos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onPreview={onPreview}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

function StudentFeedback({ onPreview }) {
  const { whatsapp, teams } = feedbackChannels;

  return (
    <>
      <SectionHeading
        eyebrow="08 / Student Feedback"
        title="Communication and responsiveness"
      >
        Staying connected through class channels, residence groups, and
        practical tutorial activities.
      </SectionHeading>

      <article className="feature-panel">
        <h3>Responding during and after sessions</h3>

        <p>
          Student questions, comments, and feedback on activities were received
          and attended to during and immediately after tutorials. Notepad
          supported note taking during and after these sessions.
        </p>
      </article>

      <div className="two-column section-space">
        <article className="card">
          <span className="badge">Class and residence groups</span>
          <h3>{whatsapp.title}</h3>
          <p>{whatsapp.text}</p>

          {whatsapp.image && (
            <figure className="channel-figure">
              <AssetImage
                src={whatsapp.image}
                alt={whatsapp.alt}
                className="channel-image"
              />

              <figcaption>{whatsapp.caption}</figcaption>

              <button
                className="text-button"
                onClick={() =>
                  onPreview({
                    kind: "image",
                    title: whatsapp.title,
                    src: whatsapp.image,
                    alt: whatsapp.alt,
                    caption: whatsapp.caption,
                  })
                }
              >
                View group overview <span aria-hidden="true">↗</span>
              </button>
            </figure>
          )}
        </article>

        <article className="card">
          <span className="badge">Online class channel</span>
          <h3>{teams.title}</h3>
          <p>{teams.text}</p>

          <a
            className="button button-primary"
            href={teams.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open DS1 class team <span aria-hidden="true">↗</span>
          </a>

          <p className="small-text section-space">
            Access is managed through Microsoft Teams and may require your
            university account and team membership.
          </p>
        </article>
      </div>
    </>
  );
}

function PreviewDialog({ preview, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog.open) dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="preview-dialog"
      aria-labelledby="preview-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <header className="preview-header">
        <h2 id="preview-title">{preview.title}</h2>

        <button
          className="icon-button"
          aria-label="Close preview"
          autoFocus
          onClick={onClose}
        >
          ×
        </button>
      </header>

      {preview.kind === "pdf" ? (
        <>
          <iframe
            className="pdf-frame"
            src={preview.src}
            title={`${preview.title} PDF`}
          />

          <div className="preview-actions">
            <a
              className="button button-secondary"
              href={preview.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF in a new tab
            </a>

            {preview.downloadable && (
              <a
                className="button button-primary"
                href={preview.src}
                download={preview.downloadName}
              >
                Download PDF
              </a>
            )}
          </div>
        </>
      ) : (
        <figure className="image-preview">
          <AssetImage
            src={preview.src}
            alt={preview.alt}
            className="enlarged-image"
          />
          <figcaption>{preview.caption}</figcaption>
        </figure>
      )}
    </dialog>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState(readSection);
  const [theme, setTheme] = useState(readTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [preview, setPreview] = useState(null);

  const mainRef = useRef(null);
  const focusHeading = useRef(false);

  const activeNavigation = navigation.find(
    (item) => item.id === activeSection,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Saved preferences are optional.
    }
  }, [theme]);

  useEffect(() => {
    function handleHashChange() {
      // The skip link moves focus without changing the selected section.
      if (window.location.hash === "#main-content") {
        mainRef.current?.focus();
        return;
      }

      focusHeading.current = true;
      setActiveSection(readSection());
      setMenuOpen(false);
      setPreview(null);
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    document.title = `${activeNavigation.label} | ${fullName}`;

    if (focusHeading.current) {
      const heading = mainRef.current?.querySelector("#section-title");

      heading?.focus({ preventScroll: true });

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      mainRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });

      focusHeading.current = false;
    }
  }, [activeSection, activeNavigation.label]);

  function navigateTo(id) {
    setMenuOpen(false);

    if (id === activeSection) {
      mainRef.current?.querySelector("#section-title")?.focus();
      return;
    }

    window.location.hash = id;
  }

  let section;

  switch (activeSection) {
    case "module":
      section = <ModuleDetails />;
      break;
    case "training":
      section = <TrainingDevelopment />;
      break;
    case "delivery":
      section = <TutorialDelivery onNavigate={navigateTo} />;
      break;
    case "technology":
      section = <Technology />;
      break;
    case "reflections":
      section = <Reflections />;
      break;
    case "evidence":
      section = <Evidence onPreview={setPreview} />;
      break;
    case "feedback":
      section = <StudentFeedback onPreview={setPreview} />;
      break;
    default:
      section = <PersonalStatement onNavigate={navigateTo} />;
  }

  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          mainRef.current?.focus();
          mainRef.current?.scrollIntoView();
        }}
      >
        Skip to portfolio content
      </a>

      <header className="site-header">
        <a
          className="brand"
          href="#personal"
          aria-label={`${fullName} portfolio home`}
          onClick={(event) => {
            event.preventDefault();
            navigateTo("personal");
          }}
        >
          <span className="brand-mark" aria-hidden="true">
            NM
          </span>

          <span>
            {fullName}
            <small>DS1 tutor portfolio · {profile.tutoringYear}</small>
          </span>
        </a>

        <div className="header-actions">
          <span className="university-label">{profile.university}</span>

          <button
            className="theme-button"
            onClick={() =>
              setTheme((current) => (current === "light" ? "dark" : "light"))
            }
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </header>

      <section
        className={`hero ${profile.portrait ? "hero-with-portrait" : ""}`}
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <p className="eyebrow">
            {profile.facultyShort} / Development Software 1 / 2026
          </p>

          <h1 id="hero-title">
            A little courage.
            <br />
            A lot of <em>purpose.</em>
          </h1>

          <p className="hero-description">
            I’m {fullName}, an Applications Development student and DS1 tutor.
            This is my journey of practical learning, student support, and
            growing into leadership.
          </p>

          <div className="hero-actions">
            <button
              className="button button-primary"
              onClick={() => navigateTo("evidence")}
            >
              Explore my evidence <span aria-hidden="true">↗</span>
            </button>

            <button
              className="button button-secondary"
              onClick={() => navigateTo("personal")}
            >
              Read my story
            </button>
          </div>

          <div className="hero-facts">
            <div>
              <strong>2024</strong>
              <span>Course started</span>
            </div>

            <div>
              <strong>2026</strong>
              <span>DS1 tutoring</span>
            </div>

            <div>
              <strong>5 of 6</strong>
              <span>Tests assisted with invigilation</span>
            </div>
          </div>
        </div>

        {profile.portrait && (
          <div className="portrait-composition">
            <AssetImage
              src={profile.portrait}
              alt={`Professional portrait of ${fullName}`}
              className="portrait"
            />

            <div className="portrait-label">
              Friendly energy.
              <strong>Focused effort.</strong>
            </div>
          </div>
        )}
      </section>

      <div className="portfolio-layout">
        <aside className="sidebar">
          <div className="sidebar-heading">
            <div>
              <p className="eyebrow">Explore the portfolio</p>
              <p className="sidebar-current">{activeNavigation.label}</p>
            </div>

            <button
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="portfolio-navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? "Close menu" : "Open menu"}
            </button>
          </div>

          <nav
            id="portfolio-navigation"
            className={`portfolio-navigation ${menuOpen ? "is-open" : ""}`}
            aria-label="Portfolio sections"
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`navigation-link ${
                  activeSection === item.id ? "active" : ""
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(item.id);
                }}
              >
                <span className="navigation-number" aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="sidebar-note">
            <strong>My learning journey</strong>
            <p>
              {profile.studyYear}
              <br />
              {profile.qualification}
              <br />
              {profile.courseStructure}
            </p>
          </div>
        </aside>

        <main
          id="main-content"
          ref={mainRef}
          className="main-content"
          tabIndex={-1}
        >
          <div className="section-content" key={activeSection}>
            {section}
          </div>
        </main>
      </div>

      <footer className="site-footer">
        <div>
          <strong>{fullName}</strong>
          <p>{profile.module} · Tutor portfolio · {profile.tutoringYear}</p>
        </div>

        <div>
          {profile.contactEmail && (
            <a href={`mailto:${profile.contactEmail}`}>
              Contact {profile.firstName}
            </a>
          )}
          <p>Personal student portfolio · {profile.university}</p>
        </div>
      </footer>

      {preview && (
        <PreviewDialog
          preview={preview}
          onClose={() => setPreview(null)}
        />
      )}
    </>
  );
}
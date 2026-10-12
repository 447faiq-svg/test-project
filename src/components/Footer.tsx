const services = [
  { label: "AI Agents", href: "/services/ai-agents", comingSoon: true },
  { label: "Medical Billing Services", href: "/services/medical-billing" },
  { label: "Medical Billing and Coding", href: "/services/medical-billing-coding" },
  { label: "Laboratory Billing Services", href: "/services/laboratory-billing" },
  { label: "Medical Credentialing Services", href: "/services/medical-credentialing" },
  { label: "MIPS Reporting", href: "/services/mips-reporting" },
  { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
  { label: "Medical Billing Audit", href: "/services/medical-billing-audit" },
];

const specialities = [
  { label: "Cardiology", href: "/specialties/cardiology" },
  { label: "Dentistry", href: "/specialties/dentistry" },
  { label: "Orthopedics", href: "/specialties/orthopedics" },
  { label: "Pediatrics", href: "/specialties/pediatrics" },
  { label: "Obstetrics & Gynaecology", href: "/specialties/obstetrics-gynaecology" },
];

const contacts = [
  {
    title: "Phone",
    detail: "+1 (406) 505-8012",
    href: "tel:+14065058012",
    icon: "phone" as const,
  },
  {
    title: "Email",
    detail: "contact@interpulseglobal.com",
    href: "mailto:contact@interpulseglobal.com",
    icon: "email" as const,
  },
  {
    title: "Fax",
    detail: "+1 (803) 398-4046",
    href: "fax:+18033984046",
    icon: "phone" as const,
  },
  {
    title: "Kalispell, Montana",
    detail: "1001 S Main St Ste 600, Kalispell, Montana, United States",
    href: "/locations",
    icon: "pin" as const,
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1FWTh6tjHy/?mibextid=wwXIfr",
    icon: "facebook" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/interpulseglobal",
    icon: "instagram" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/interpulse-global/",
    icon: "linkedin" as const,
  },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor" aria-hidden>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor" aria-hidden>
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-[#FF9A55]" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#FFFFFF"
        d="M15.1 12.5h-2V20h-2.8v-7.5H8.7V9.9h1.6V8.4c0-1.6.8-4.1 4.1-4.1h2.4v2.6h-1.7c-.3 0-.7.1-.7.8v2.2h2.4l-.4 2.6z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
      <defs>
        <linearGradient id="ig-bg" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6.5" fill="url(#ig-bg)" />
      <rect
        x="5.2"
        y="5.2"
        width="13.6"
        height="13.6"
        rx="4.2"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="3.35"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.7"
      />
      <circle cx="16.55" cy="7.55" r="1.05" fill="#FFFFFF" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#FFFFFF"
        d="M7.2 9.4H4.8V19h2.4V9.4zM6 4.5a1.4 1.4 0 1 0 0 2.8A1.4 1.4 0 0 0 6 4.5zM19.2 12.8c0-2.7-1.4-4-3.4-4-1.6 0-2.3.9-2.7 1.5V9.4H11c0 .7 0 9.6 0 9.6h2.4v-5.4c0-.3 0-.6.1-.8.3-.6.9-1.3 1.9-1.3 1.3 0 1.8 1 1.8 2.4V19h2.4v-6.2z"
      />
    </svg>
  );
}

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
  if (name === "facebook") return <FacebookIcon />;
  if (name === "instagram") return <InstagramIcon />;
  return <LinkedInIcon />;
}

export default function Footer() {
  return (
    <footer
      className="relative text-white"
      style={{
        background:
          "linear-gradient(160deg, #0B1F33 0%, #123A5C 55%, #0B1F33 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* About us */}
          <div>
            <h3 className="text-base font-semibold">About us</h3>
            <p className="mt-2 text-[13px] font-bold tracking-[0.12em] text-[#FF9A55] uppercase">
              Driving Digital Excellence
            </p>
            <p className="mt-4 text-[13px] leading-7 text-white/80 sm:text-sm sm:leading-7">
              At{" "}
              <strong className="font-semibold text-white">
                InterPulse Global
              </strong>
              , we believe in complete transparency. Our team of highly skilled{" "}
              <strong className="font-semibold text-white">
                medical billing
              </strong>{" "}
              professionals is dedicated to maximizing revenue for healthcare
              providers by ensuring accurate coding, timely claim submission,
              and efficient follow-up.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-[6px] transition hover:scale-105 hover:opacity-90"
                >
                  <SocialIcon name={item.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-base font-semibold">Our Services</h3>
            <ul className="mt-4">
              {services.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-white/15 last:border-b-0"
                >
                  <a
                    href={item.href}
                    className="flex items-center justify-between gap-2 py-3 text-[13px] text-white/90 transition hover:text-[#FF9A55] sm:text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <ChevronIcon />
                      {item.label}
                    </span>
                    {item.comingSoon ? (
                      <span className="text-[9px] font-bold tracking-wide text-[#FF9A55] uppercase">
                        Coming Soon
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Specialities */}
          <div>
            <h3 className="text-base font-semibold">Our Specialities</h3>
            <ul className="mt-4">
              {specialities.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-white/15 last:border-b-0"
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-2 py-3 text-[13px] text-white/90 transition hover:text-[#FF9A55] sm:text-sm"
                  >
                    <ChevronIcon />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-base font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-5">
              {contacts.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="text-[#FF9A55]">
                    {item.icon === "phone" ? (
                      <PhoneIcon />
                    ) : item.icon === "email" ? (
                      <EmailIcon />
                    ) : (
                      <PinIcon />
                    )}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <a
                      href={item.href}
                      className="mt-1 block text-[13px] leading-6 text-white/85 transition hover:text-[#FF9A55]"
                    >
                      {item.detail}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 text-center">
          <p className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
            InterPulse <span className="text-[#FF9A55]">Global</span>
          </p>
          <p className="mt-2 font-[family-name:var(--font-display)] text-[13px] font-bold tracking-[0.12em] text-[#FF9A55] uppercase">
            Driving Digital Excellence
          </p>
          <p className="mt-3 text-xs text-white/65">
            © {new Date().getFullYear()} InterPulse Global. All Rights Reserved.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <a
              href="/privacy"
              className="text-xs font-medium text-[#FF9A55] transition hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-xs font-medium text-[#FF9A55] transition hover:text-white"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SpecialtiesPage() {
  return (
    <section className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold tracking-[0.14em] text-[#FF7A3A] uppercase">
        Specialties
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--text)]">
        Specialty-Tuned Reimbursement Logic
      </h1>
      <p className="mt-4 text-[15px] leading-7 text-[var(--text-muted)] sm:text-base">
        Explore our full specialty coverage on the home page, including Internal
        Medicine, Cardiology, Orthopedics, Pediatrics, and more.
      </p>
      <a
        href="/#specialties"
        className="mt-8 inline-flex text-sm font-medium text-[#FF6B1A] hover:underline"
      >
        View specialties on Home →
      </a>
    </section>
  );
}

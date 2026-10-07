export type Specialty = {
  title: string;
  slug: string;
  summary: string;
};

export const specialties: Specialty[] = [
  {
    title: "Family Medicine",
    slug: "family-medicine",
    summary:
      "Primary care billing for preventive visits, chronic care management, and multi-payer evaluation and management workflows.",
  },
  {
    title: "Dentistry",
    slug: "dentistry",
    summary:
      "Dental and oral surgery claim support covering CDT/CPT crossover, payer policies, and procedure documentation requirements.",
  },
  {
    title: "Internal Medicine",
    slug: "internal-medicine",
    summary:
      "Adult medicine reimbursement support for complex E/M coding, chronic conditions, and hospital-aligned outpatient billing.",
  },
  {
    title: "Pediatrics",
    slug: "pediatrics",
    summary:
      "Pediatric billing for well-child visits, immunizations, age-based coding, and guardian/patient eligibility workflows.",
  },
  {
    title: "Geriatrics",
    slug: "geriatrics",
    summary:
      "Geriatric care billing focused on Medicare rules, care coordination, and high-acuity chronic disease management.",
  },
  {
    title: "General Practice",
    slug: "general-practice",
    summary:
      "General practice revenue cycle support for office visits, procedures, and everyday payer submission requirements.",
  },
  {
    title: "General Surgery",
    slug: "general-surgery",
    summary:
      "Surgical billing for operative reports, global periods, modifiers, and facility versus professional claim splits.",
  },
  {
    title: "Orthopedics",
    slug: "orthopedics",
    summary:
      "Orthopedic coding and claims management for fractures, joints, injections, and surgical episode reimbursement.",
  },
  {
    title: "Cardiothoracic Surgery",
    slug: "cardiothoracic-surgery",
    summary:
      "High-complexity cardiothoracic billing with precise operative coding, authorizations, and payer-specific surgical rules.",
  },
  {
    title: "Neurosurgery",
    slug: "neurosurgery",
    summary:
      "Neurosurgery revenue support for spinal and cranial procedures, implant billing, and documentation-driven coding.",
  },
  {
    title: "Plastic & Reconstructive Surgery",
    slug: "plastic-reconstructive-surgery",
    summary:
      "Plastic and reconstructive claim workflows covering medical necessity, staged procedures, and cosmetic versus covered care.",
  },
  {
    title: "Urology",
    slug: "urology",
    summary:
      "Urology billing for cystoscopy, stone procedures, oncology pathways, and procedure-based outpatient coding.",
  },
  {
    title: "Otolaryngology (ENT)",
    slug: "otolaryngology-ent",
    summary:
      "ENT specialty billing for endoscopy, allergy, sinus surgery, and audiology-adjacent reimbursement workflows.",
  },
  {
    title: "Vascular Surgery",
    slug: "vascular-surgery",
    summary:
      "Vascular surgery claim support for endovascular and open procedures, device coding, and authorization management.",
  },
  {
    title: "Cardiology",
    slug: "cardiology",
    summary:
      "Cardiology RCM for diagnostics, interventions, device clinics, and specialty-specific medical necessity rules.",
  },
  {
    title: "Pulmonology",
    slug: "pulmonology",
    summary:
      "Pulmonology billing for PFTs, sleep studies, bronchoscopies, and chronic respiratory care management.",
  },
  {
    title: "Gastroenterology",
    slug: "gastroenterology",
    summary:
      "GI billing for endoscopy, colonoscopy, anesthesia coordination, and pathology-linked claim workflows.",
  },
  {
    title: "Nephrology",
    slug: "nephrology",
    summary:
      "Nephrology revenue support for dialysis, CKD management, and facility-aligned Medicare billing requirements.",
  },
  {
    title: "Endocrinology",
    slug: "endocrinology",
    summary:
      "Endocrine billing for diabetes, thyroid, hormone therapy, and continuous monitoring-related encounters.",
  },
  {
    title: "Rheumatology",
    slug: "rheumatology",
    summary:
      "Rheumatology claim management for infusion therapies, biologic authorizations, and complex diagnosis coding.",
  },
  {
    title: "Infectious Diseases",
    slug: "infectious-diseases",
    summary:
      "Infectious disease billing for consults, infusion therapy, and prolonged hospital-aligned care encounters.",
  },
  {
    title: "Hematology / Oncology",
    slug: "hematology-oncology",
    summary:
      "Hematology and oncology RCM for infusion suites, drug billing, prior auth, and multi-visit treatment plans.",
  },
  {
    title: "Obstetrics & Gynaecology",
    slug: "obstetrics-gynaecology",
    summary:
      "OB/GYN billing for prenatal packages, deliveries, surgical gynecology, and maternity global period rules.",
  },
  {
    title: "Maternal Fetal Medicine",
    slug: "maternal-fetal-medicine",
    summary:
      "MFM specialty billing for high-risk pregnancy ultrasounds, consults, and complex antepartum services.",
  },
  {
    title: "Neurology",
    slug: "neurology",
    summary:
      "Neurology claim workflows for EMGs, EEGs, infusions, and evaluation-heavy outpatient visit coding.",
  },
  {
    title: "Psychiatry",
    slug: "psychiatry",
    summary:
      "Behavioral health billing for psychotherapy, medication management, and telehealth-compliant claim submission.",
  },
  {
    title: "Pain Management",
    slug: "pain-management",
    summary:
      "Pain management billing for injections, interventional procedures, and payer policy-driven medical necessity.",
  },
  {
    title: "Emergency Medicine / Urgent Care",
    slug: "emergency-medicine-urgent-care",
    summary:
      "Emergency and urgent care billing for acuity levels, after-hours encounters, and high-volume claim throughput.",
  },
  {
    title: "Critical Care Medicine",
    slug: "critical-care-medicine",
    summary:
      "Critical care coding support for time-based critical care, ICU documentation, and hospitalist coordination.",
  },
  {
    title: "Anesthesiology",
    slug: "anesthesiology",
    summary:
      "Anesthesia billing for time units, physical status modifiers, and surgical case-linked professional claims.",
  },
  {
    title: "Radiology",
    slug: "radiology",
    summary:
      "Radiology revenue cycle support for imaging CPT pairs, professional/technical splits, and prior authorization.",
  },
  {
    title: "Pathology",
    slug: "pathology",
    summary:
      "Pathology billing for specimen coding, professional interpretation, and lab-aligned claim submission.",
  },
  {
    title: "Physical Medicine & Rehabilitation",
    slug: "physical-medicine-rehabilitation",
    summary:
      "PM&R billing for therapy plans, interventional rehab, and documentation-driven visit frequency rules.",
  },
  {
    title: "Chiropractic Medicine",
    slug: "chiropractic-medicine",
    summary:
      "Chiropractic claim support for manipulative treatment, Medicare limits, and progressive care documentation.",
  },
];

export function getSpecialty(slug: string) {
  return specialties.find((item) => item.slug === slug);
}

export function specialtyHref(slug: string) {
  return `/specialties/${slug}`;
}

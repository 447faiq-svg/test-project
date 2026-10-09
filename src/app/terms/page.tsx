import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | InterPulse Global",
  description:
    "Terms and conditions for using the InterPulse Global website and requesting medical billing consultation services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="October 6, 2026"
      otherHref="/privacy"
      otherLabel="Privacy Policy"
      sections={[
        {
          title: "Acceptance of Terms",
          body: (
            <p>
              By accessing or using the InterPulse Global website, you agree to
              these Terms &amp; Conditions. If you do not agree, please do not
              use the site. Additional written agreements may apply when you
              engage our billing or revenue cycle services.
            </p>
          ),
        },
        {
          title: "Website Content",
          body: (
            <p>
              Content on this website is provided for general informational
              purposes and does not constitute legal, financial, clinical, or
              coding advice. Performance indicators described on the site are
              illustrative and may vary by practice, specialty, payer mix, and
              claim volume.
            </p>
          ),
        },
        {
          title: "Consultation Requests",
          body: (
            <p>
              Submitting a consultation form does not create a service contract.
              We will review your inquiry and respond based on availability and
              fit. Any engagement for medical billing, coding, audit, EMR/EHR
              support, or revenue cycle management requires a separate written
              agreement.
            </p>
          ),
        },
        {
          title: "Acceptable Use",
          body: (
            <p>
              You agree not to misuse the website, attempt unauthorized access,
              disrupt services, submit unlawful or misleading information, or
              use the site in any manner that could harm InterPulse Global, its
              users, or third parties.
            </p>
          ),
        },
        {
          title: "Intellectual Property",
          body: (
            <p>
              All trademarks, logos, text, graphics, and other materials on this
              site are owned by InterPulse Global or its licensors and may not
              be copied, modified, or distributed without prior written
              permission, except for personal, non-commercial viewing.
            </p>
          ),
        },
        {
          title: "Limitation of Liability",
          body: (
            <p>
              To the fullest extent permitted by law, InterPulse Global is not
              liable for indirect, incidental, special, consequential, or
              punitive damages arising from your use of the website or reliance
              on its content. Website services are provided &ldquo;as
              is&rdquo; without warranties of any kind.
            </p>
          ),
        },
        {
          title: "Changes",
          body: (
            <p>
              We may update these Terms &amp; Conditions from time to time. The
              &ldquo;Last updated&rdquo; date reflects the latest revision.
              Continued use of the website after changes constitutes acceptance
              of the updated terms.
            </p>
          ),
        },
        {
          title: "Contact",
          body: (
            <p>
              For questions about these terms, contact InterPulse Global via our{" "}
              <Link
                href="/contact"
                className="font-medium text-[#FF6B1A] transition hover:underline"
              >
                Contact
              </Link>{" "}
              page or consultation form.
            </p>
          ),
        },
      ]}
    />
  );
}

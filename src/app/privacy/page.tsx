import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | InterPulse Global",
  description:
    "How InterPulse Global collects, uses, and protects information when you use our website and request consultation services.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 6, 2026"
      otherHref="/terms"
      otherLabel="Terms & Conditions"
      sections={[
        {
          title: "Overview",
          body: (
            <p>
              InterPulse Global (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard information
              when you visit our website, submit a consultation request, or
              otherwise interact with our online services.
            </p>
          ),
        },
        {
          title: "Information We Collect",
          body: (
            <p>
              We may collect information you provide directly, such as your
              name, email address, phone number, practice details, and message
              content when you request a consultation or contact us. We may also
              collect limited technical data such as browser type, device
              information, and pages visited to improve site performance and
              security.
            </p>
          ),
        },
        {
          title: "How We Use Information",
          body: (
            <p>
              We use collected information to respond to inquiries, schedule
              consultations, deliver requested services, improve our website,
              communicate about offerings, and meet legal or compliance
              obligations. We do not sell personal information.
            </p>
          ),
        },
        {
          title: "Sharing of Information",
          body: (
            <p>
              We may share information with trusted service providers who assist
              with website hosting, communications, or operations, subject to
              confidentiality obligations. We may also disclose information when
              required by law or to protect our rights, users, or the public.
            </p>
          ),
        },
        {
          title: "Data Security",
          body: (
            <p>
              We implement reasonable administrative, technical, and physical
              safeguards designed to protect information. No method of
              transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
          ),
        },
        {
          title: "Your Choices",
          body: (
            <p>
              You may request access to, correction of, or deletion of personal
              information we hold about you, subject to applicable law. Contact
              us using the details on our{" "}
              <Link
                href="/contact"
                className="font-medium text-[#FF6B1A] transition hover:underline"
              >
                Contact
              </Link>{" "}
              page to submit a request.
            </p>
          ),
        },
        {
          title: "Contact",
          body: (
            <p>
              Questions about this Privacy Policy may be directed to InterPulse
              Global through our consultation form or contact channels listed on
              this website.
            </p>
          ),
        },
      ]}
    />
  );
}

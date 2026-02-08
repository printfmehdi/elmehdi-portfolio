import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ContactInfoSidebar from "@/components/contact/contact-info-sidebar";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <section className="rounded-xl border bg-background p-5 sm:p-6">
          <ContactForm />
        </section>
        <ContactInfoSidebar />
      </div>
    </PageContainer>
  );
}

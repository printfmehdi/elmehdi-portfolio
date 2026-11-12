import React from "react";

import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  eyebrow?: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  eyebrow,
  children,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <PageHeader title={title} description={description} eyebrow={eyebrow} />
      <div className="pt-10">{children}</div>
    </ClientPageWrapper>
  );
}

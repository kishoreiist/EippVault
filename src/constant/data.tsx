export type tSolutionsData = {
  slug: string;
  title: string;
  disc: string;
  list: string[];
};

export type tPricingPlan = {
  title: string;
  price: string;
  description: string;
  features: string[];
  delivery: string;
  highlight?: boolean;
};

export type tProduct = {
  slug: string;
  title: string;
  description: string;
  list: string[];
  image: string;
};

export const solutionsData: tSolutionsData[] = [
  {
    slug: "document_scanning",
    title: "Document Scanning & Indexing",
    disc: `At EIPP Vault, we convert your physical documents into clear, searchable digital files making them easier to access, store, and manage. Each document is scanned, indexed, and organized based on your business structure, ensuring quick retrieval and accurate record control. This helps reduce manual work, save storage space, improve compliance, and support a smooth transition toward a paperless workflow.`,
    list: [
      "Fast and clear digital conversion of physical documents",
      "Easy search and retrieval using smart indexing",
      "Reduces paper storage and improves workflow efficiency",
      "Enhances data security and backup reliability",
      "Supports remote work with anywhere-accessible digital records",
    ],
  },
  {
    slug: "employee_onboarding",
    title: "Employee Onboarding",
    disc: `At EIPP Vault, we simplify onboarding so your new hires feel welcome, compliant, and productive from day one. Instead of paperwork, fragmented systems and delay-filled handovers, we deliver a unified digital journey that handles offer letters, documentation, training modules and role-based access — all in one flow. Our service ensures every new employee is onboarded with clarity, speed and confidence — enabling your team to integrate faster and your company to grow seamlessly.`,
    list: [
      "Digital offer-letters, e-signatures & automated workflows",
      "Role-based training & access setup in one streamlined process",
      "Improved compliance, reduced manual tasks and faster productivity",
    ],
  },
  {
    slug: "digital_invoice_processing",
    title: "Digital Invoice Processing",
    disc: ` We provide streamlined digital invoice-processing services that convert your incoming invoices into a fast, accurate, and fully trackable workflow. Instead of managing paper piles, your invoices are captured, validated and routed digitally, integrated with your business rules for approval and posting. We ensure each invoice is processed with precision, stored in a secure archive, and accessible whenever you need it. This service helps you cut manual effort, lower processing time, improve compliance and gain financial control.`,
    list: [
      "Faster invoice approval and payment cycles",
      "Reduced errors with automated data capture & validation",
      "Full audit-trail and digital archiving",
      "Seamless integration with your accounting/ERP systems",
    ],
  },
];

export const pricingPlans: tPricingPlan[] = [
  {
    title: "Standard Plan",
    price: "₹4,000",
    description:
      "Ideal for small teams looking to securely manage documents with essential features.",
    features: [
      "Single user access",
      "Up to 5GB storage",
      "Basic version control",
      "Email support",
      "3-day setup time",
    ],
    delivery: "Est. 3 days of delivery",
  },
  {
    title: "Professional Plan",
    price: "₹20,000",
    description:
      "Perfect for growing organizations needing collaboration and advanced document security.",
    features: [
      "Up to 5 user accounts",
      "20GB secure storage",
      "Advanced version control",
      "Priority support",
      "7-day setup time",
    ],
    delivery: "Est. 7 days of delivery",
    highlight: true,
  },
  {
    title: "Premium Plan",
    price: "₹50,000",
    description:
      "For enterprises requiring maximum security, integrations, and dedicated support.",
    features: [
      "Unlimited users",
      "50GB cloud storage",
      "Audit logs & analytics",
      "Dedicated success manager",
      "14-day setup time",
    ],
    delivery: "Est. 14 days of delivery",
  },
];

export const productsData: tProduct[] = [
  {
    slug: "cloud_based_dms",
    title: "Cloud-Based Document Management System",
    description: `We deliver a robust cloud-based document management system built to simplify how your organisation stores, manages and accesses critical records. Instead of hardware overhead and on-site infrastructure, your documents are hosted on secure, enterprise-grade cloud platforms — accessible from anywhere, anytime.

With full-text search, indexing, metadata tagging, mobile access and version control, your files stay organised and ready for use. Whether you're handling contracts, employee files, CAD drawings or multi-format records, our cloud solution keeps them secure, compliant and instantly retrievable.

Built for efficiency, scalability and flexible access, our cloud DMS lets you reduce storage costs, increase collaboration and shift toward a streamlined, digital-first workflow.`,
    list: [
      "Centralized Document Storage – Keep all files in one secure cloud workspace, accessible from browser, desktop, or mobile.",
      "Smart Search & Indexing – Find documents instantly using keywords, tags, metadata, or content-based lookup.",
      "Secure Access Controls – Assign role-based permissions to ensure the right people have access to the right information.",
      "Automated Workflows – Review, approve, and track document-related tasks without manual follow-ups.",
      "Version Control – Every update is stored safely, with the ability to view, compare, or restore previous versions anytime.",
    ],
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6c85729e?auto=format&fit=crop&w=2000&q=80",
  },

  {
    slug: "document_digitisation_indexing",
    title: "Document Digitisation & Indexing",
    description: `We help organizations convert their physical documents into well-structured digital formats that are easy to search, retrieve, and manage. Many businesses still rely on paper archives or outdated record systems that slow down operations and increase the risk of data loss.

Our digitisation service securely scans and transforms physical files into high-quality digital records, while also indexing and categorizing them based on your business structure to ensure they are organized and searchable. Whether you need to digitize employee files, vendor records, engineering drawings, medical documents, legal files, financial statements, or long-term archives, we maintain accuracy, clarity, and integrity throughout the process.

Once digitized, your documents are stored in a secure digital repository or Document Management System (DMS), allowing instant retrieval, controlled access, version tracking, and reliable backup. This eliminates time-consuming manual searches, prevents damage or loss, improves collaboration, and enables your team to work faster and make confident, well-informed decisions from anywhere.`,
    list: [
      "Faster Access to Information – Retrieve records in seconds using search keywords, metadata, or document categories instead of digging through paper files.",
      "Reduced Storage Overhead – Free your office from racks, cupboards, warehouse storage, and long-term physical maintenance.",
      "Stronger Security & Compliance – Digital records are encrypted, backed up, access-controlled, and audit-friendly.",
      "Reliable Long-Term Preservation – Protect your documents from physical deterioration and environmental damage for years to come.",
    ],
    image:
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=2000&q=80",
  },

  {
    slug: "on_premises_dms",
    title: "On-Premises Document Management System",
    description: `We deliver a robust on-premises document management system built for organisations that demand full control over their data and infrastructure. Rather than relying solely on external cloud platforms, your files, workflows and records reside within your own secure servers — providing complete transparency, tighter governance and tailored configuration.

Our solution supports universal formats (PDF, JPEG, CAD drawings, Office files and more) and includes indexing, metadata, version-control, audit trails and secure user access. With everything hosted on-site, you benefit from direct oversight, faster internal access and compliance fit for sectors with stringent operational requirements.

Whether you’re managing contracts, engineering drawings, legal records or regulated archives — our on-premises system empowers your team to search, retrieve and collaborate with ease, while your IT retains full visibility and control.`,
    list: [
      "Complete Data Ownership – All documents and records stay within your organisation’s internal servers, ensuring full control over access, storage, and security.",
      "Role-Based Access Control – Set user permissions based on department, role, or function to ensure only authorised users can view or modify information.",
      "Advanced Document Indexing – Documents are indexed and tagged for accurate classification and ultra-fast search and retrieval.",
      "Version Control & Audit Logging – Track document revisions, maintain complete history, and stay compliance-ready with built-in audit trails.",
      "Integration with Existing Systems – Works seamlessly with ERP, HRMS, CRM, financial systems, and internal business applications.",
    ],
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=2000&q=80",
  },
];

export const certifications = [
    {
      title: "ISO 9001:2015 Certification",
      description:
        "EIPP Solutions is an ISO 9001:2015 certified company, dedicated to maintaining the highest standards of quality and excellence in every aspect of our operations. Our Quality Management System (QMS) ensures that all processes are well-defined, monitored, and continuously improved to meet customer expectations and regulatory requirements.",
      image: "/logo2.jpg",
      imgHeight: "h-36", 
    },
    {
      title: "ISO/IEC 27001:2022 Certification",
      description:
        "The ISO Certification is a seal from a third-party body that confirms the company runs an internationally recognized management system. It enhances credibility, supports business  tenders, and instills confidence among clients about our practices.",
      image: "/logo3.jpg",
      imgHeight: "h-36", 
    },
    {
      title: "PCI DSS Certification",
      description:
        "EIPP Solutions maintains strict adherence to PCI DSS and SOC 2 compliance standards, reflecting our strong commitment to data security, privacy, and operational excellence. PCI DSS (Payment Card Industry Data Security Standard) ensures that all financial and payment-related information is securely processed, stored, and transmitted, protecting clients from data breaches and fraud.",
      image: "/logo4.webp",
      imgHeight: "h-28", 
    },
    {
      title: "SOC 2 Certification",
      description:
        "SOC 2 (Service Organization Control 2) compliance demonstrates our commitment to managing customer data based on key trust principles — Security, Availability, Processing Integrity, Confidentiality, and Privacy. Together, these standards reinforce EIPP Solutions’ dedication to delivering secure, transparent, and reliable solutions, ensuring our clients’ information and systems are always protected to the highest industry standards.",
      image: "/logo1.png",
      imgHeight: "h-28", 
    },
];
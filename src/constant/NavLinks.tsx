export const menus = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  {
    name: "Solutions",
    href: "#solutions",
    submenu: [
      {
        name: "Document Scanning & Indexing",
        href: "/solutions/document_scanning",
      },
      {
        name: "Employee Onboarding",
        href: "/solutions/employee_onboarding",
      },
      {
        name: "Digital Invoice Processing",
        href: "/solutions/digital_invoice_processing",
      },
    ],
  },

  {
    name: "Products",
    href: "#products",
    submenu: [
      {
        name: "Cloud-Based DMS",
        href: "/products/cloud_based_dms",
      },
      {
        name: " On-Premises DMS",
        href: "/products/on_premises_dms",
      },
      {
        name: "Document Digitisation & Indexing",
        href: "/products/document_digitisation_indexing",
      },
    ],
  },

  { name: "Pricing", href: "/#pricing" },
  { name: "Contact Us", href: "/#contact-us" },
  { name: "Certifications",href:"/#certifications"}
];

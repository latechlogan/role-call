🏷️ Role Call
A definitive, filterable reference of semantic HTML elements, their implicit ARIA roles, and allowed ARIA properties.

🌟 Project Goal
The primary goal of Role Call is to provide front-end developers with a quick, definitive resource that maps standard semantic HTML elements to their W3C-defined ARIA roles and constraints.

This resource is essential for developers who need to understand the precise accessibility contract of an element, enabling:

Reliable Testing: Using getByRole with confidence in tools like React Testing Library.

Valid ARIA Usage: Knowing which role and aria-\* attributes are valid for any given HTML element.

📊 Data Structure
The core value of this project is the comprehensive data pulled directly from the W3C ARIA in HTML Specification. Each entry includes:
|Field |Description |
|--------------|----------------------------------------------------------------------------------|
|element |The HTML tag (e.g., <a>, <button>, <li>). |
|withConditions|Any conditions that change the implicit role (e.g., "with href" for <a>). |
|implicitRole |The default ARIA role assigned by the browser (e.g., link, button). |
|allowedRoles |A list of explicit ARIA roles that can legally override the default role (if any).|
|ariaAttributes|A list of aria-\* attributes that are permitted on this element. |
|notes |Any special considerations or exceptions from the specification. |

🚀 Features (Planned)Searchable/Filterable Interface: Quickly search by element, role, or attribute.Clear Role Mapping Table: Visualize the element $\to$ implicitRole relationship.Valid ARIA Checker: A tool to check if an explicitly set role and its attributes are valid for a given element.

💡 Data ReferenceThe data is meticulously compiled from the W3C's source of truth: [W3C ARIA in HTML Specification](https://www.w3.org/TR/html-aria/)

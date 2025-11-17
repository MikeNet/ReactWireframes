Based on the code in `mikenet/reactwireframes/ReactWireframes-18e09fbc9d91d4196b7b57d707f9d430e7b5b1a6/App.tsx`, the application features a centralized "Wireframe Patterns" navigation sidebar that allows users to switch between six distinct UI layouts. All layouts share a cohesive dark theme using slate-blue background tones (`#0F172A`, `#020617`) and white/gray text.

Here is the explanation of the design for each layout:

### 1. Sidebar + Content
* **Intent:** Designed for admin consoles, tools, and SaaS applications where navigation is primary.
* **Structure:**
    * **Left Sidebar:** A fixed vertical column (`220px` wide) containing the app name and a vertical navigation menu (Dashboard, Projects, etc.). Active links are highlighted with a blue background.
    * **Main Area:** A distinct section with a header and a content body containing a generic card for the primary interface.

### 2. Topbar + Content
* **Intent:** Suitable for marketing sites, documentation, or apps where global search/branding is more important than persistent navigation.
* **Structure:**
    * **Header (Topbar):** A horizontal bar containing the product name on the left and a search bar plus user avatar on the right.
    * **Content Area:** A split view featuring a large "Primary Section" (taking up 2/3rds of the space) for core content and a smaller "Sidebar Panel" (1/3rd) for secondary actions or info.

### 3. Dashboard (Cards)
* **Intent:** A data-heavy view for monitoring metrics and activity.
* **Structure:**
    * **KPI Row:** A grid of cards at the top displaying key metrics (Active Users, Revenue, etc.) with labels and large value text.
    * **Main Content:** A lower section divided into a "Primary Chart Area" (larger flexible container) and a "Recent Activity" list (side panel).

### 4. Master–Detail
* **Intent:** Allows users to browse a list of items and view details simultaneously, commonly used for email or contact management.
* **Structure:**
    * **Master List:** A narrower left column (`260px`) displaying a list of items (e.g., Customers). Clicking a row updates the main view.
    * **Detail Panel:** The main right-hand area displaying full details for the selected item, including action buttons (Primary/Secondary).

### 5. Multi-step Wizard
* **Intent:** Used for linear processes like onboarding or complex forms.
* **Structure:**
    * **Progress Tracker:** A visual row of circular indicators showing the current step (1, 2, 3) and completion status.
    * **Step Content:** A dynamic card that changes based on the step (Basic Info -> Details -> Review).
    * **Navigation:** "Back" and "Next/Submit" buttons located at the bottom right of the card.

### 6. Table + Filters
* **Intent:** Designed for back-office data tools and analytics management.
* **Structure:**
    * **Filter Panel:** A card at the top containing search inputs, dropdowns (Status, Owner), and an "Apply" button.
    * **Results Table:** A standard data table below the filters displaying rows of data with columns for Name, Status, Owner, and an Actions column with "View/Edit" buttons.

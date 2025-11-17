import React, { useState } from "react";

type LayoutId =
  | "sidebar-content"
  | "topbar-content"
  | "dashboard"
  | "master-detail"
  | "wizard"
  | "table-filters";

const layouts: { id: LayoutId; label: string }[] = [
  { id: "sidebar-content", label: "Sidebar + Content" },
  { id: "topbar-content", label: "Topbar + Content" },
  { id: "dashboard", label: "Dashboard (Cards)" },
  { id: "master-detail", label: "Master–Detail" },
  { id: "wizard", label: "Multi-step Wizard" },
  { id: "table-filters", label: "Table + Filters" },
];

const App: React.FC = () => {
  const [selectedLayout, setSelectedLayout] =
    useState<LayoutId>("sidebar-content");

  return (
    <div className="app-root" style={rootStyle}>
      <aside style={navStyle}>
        <h1 style={navTitleStyle}>Wireframe Patterns</h1>
        {layouts.map((layout) => (
          <button
            key={layout.id}
            onClick={() => setSelectedLayout(layout.id)}
            style={{
              ...navButtonStyle,
              ...(selectedLayout === layout.id ? navButtonActiveStyle : {}),
            }}
          >
            {layout.label}
          </button>
        ))}
      </aside>

      <main style={mainStyle}>
        {selectedLayout === "sidebar-content" && <SidebarContentExample />}
        {selectedLayout === "topbar-content" && <TopbarContentExample />}
        {selectedLayout === "dashboard" && <DashboardExample />}
        {selectedLayout === "master-detail" && <MasterDetailExample />}
        {selectedLayout === "wizard" && <WizardExample />}
        {selectedLayout === "table-filters" && <TableWithFiltersExample />}
      </main>
    </div>
  );
};

export default App;

/* ------------------------------------------------------------------ */
/* 1. SIDEBAR + CONTENT LAYOUT                                        */
/* ------------------------------------------------------------------ */

const SidebarContentExample: React.FC = () => {
  return (
    <div style={shellStyle}>
      <aside style={sidebarStyle}>
        <div style={sidebarHeaderStyle}>App Name</div>
        <nav>
          <SidebarLink active>Dashboard</SidebarLink>
          <SidebarLink>Projects</SidebarLink>
          <SidebarLink>Reports</SidebarLink>
          <SidebarLink>Settings</SidebarLink>
        </nav>
      </aside>

      <section style={contentStyle}>
        <header style={contentHeaderStyle}>
          <h2 style={{ margin: 0 }}>Sidebar + Content Layout</h2>
          <div>Use this for admin consoles, tools, SaaS apps.</div>
        </header>

        <div style={contentBodyStyle}>
          <div style={cardStyle}>
            <h3>Primary Content Area</h3>
            <p>
              This is where your main page content lives. Think dashboards,
              tables, or detail views.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const SidebarLink: React.FC<{ active?: boolean }> = ({ active, children }) => (
  <div
    style={{
      padding: "8px 12px",
      borderRadius: 6,
      marginBottom: 4,
      fontSize: 14,
      cursor: "pointer",
      backgroundColor: active ? "#1D4ED8" : "transparent",
      color: active ? "#FFFFFF" : "#E5E7EB",
    }}
  >
    {children}
  </div>
);

/* ------------------------------------------------------------------ */
/* 2. TOPBAR + CONTENT LAYOUT                                         */
/* ------------------------------------------------------------------ */

const TopbarContentExample: React.FC = () => {
  return (
    <div style={shellVerticalStyle}>
      <header style={topbarStyle}>
        <div style={{ fontWeight: 600 }}>Product Name</div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <input
            type="search"
            placeholder="Search..."
            style={topbarSearchStyle}
          />
          <div style={avatarStyle}>MA</div>
        </div>
      </header>

      <section style={topContentStyle}>
        <h2 style={{ marginTop: 0 }}>Topbar + Content Layout</h2>
        <p>
          Use this for marketing sites, documentation, or apps where a global
          bar is more important than persistent navigation.
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
          <div style={{ ...cardStyle, flex: 2 }}>
            <h3>Primary Section</h3>
            <p>Hero, main content, or core workflow goes here.</p>
          </div>
          <div style={{ ...cardStyle, flex: 1 }}>
            <h3>Sidebar Panel</h3>
            <p>Use for secondary info, CTAs, or quick actions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 3. DASHBOARD (CARDS) WIREFRAME                                     */
/* ------------------------------------------------------------------ */

const DashboardExample: React.FC = () => {
  const kpis = [
    { label: "Active Users", value: "2,341" },
    { label: "Monthly Revenue", value: "$48,920" },
    { label: "Error Rate", value: "0.7%" },
    { label: "NPS", value: "64" },
  ];

  return (
    <div style={shellVerticalStyle}>
      <header style={contentHeaderStyle}>
        <h2 style={{ margin: 0 }}>Dashboard Layout</h2>
        <div>Use KPI cards + main content + secondary panel.</div>
      </header>

      <section
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div style={kpiRowStyle}>
          {kpis.map((kpi) => (
            <div key={kpi.label} style={kpiCardStyle}>
              <div style={kpiLabelStyle}>{kpi.label}</div>
              <div style={kpiValueStyle}>{kpi.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ ...cardStyle, flex: 2, minHeight: 220 }}>
            <h3>Primary Chart Area</h3>
            <p>Placeholder for charts (line, bar, etc.).</p>
          </div>

          <div style={{ ...cardStyle, flex: 1 }}>
            <h3>Recent Activity</h3>
            <ul>
              <li>User A created Project X.</li>
              <li>Backup job completed.</li>
              <li>New error reported in Service Y.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 4. MASTER–DETAIL LAYOUT                                            */
/* ------------------------------------------------------------------ */

type Item = { id: number; name: string; summary: string; details: string };

const masterItems: Item[] = [
  {
    id: 1,
    name: "Customer #1024",
    summary: "High-value account",
    details:
      "Detailed view of Customer #1024. Include contact info, usage, billing, notes.",
  },
  {
    id: 2,
    name: "Customer #2048",
    summary: "Trial user",
    details: "Details about trial stage, onboarding steps, and next actions.",
  },
  {
    id: 3,
    name: "Customer #4096",
    summary: "At-risk account",
    details:
      "Flagged as at-risk. Surface reasons and recommended interventions.",
  },
];

const MasterDetailExample: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(masterItems[0].id);
  const selectedItem = masterItems.find((i) => i.id === selectedId)!;

  return (
    <div style={shellStyle}>
      <section style={masterColumnStyle}>
        <header style={columnHeaderStyle}>Master List</header>
        <div>
          {masterItems.map((item) => (
            <div
              key={item.id}
              style={{
                ...masterRowStyle,
                ...(item.id === selectedId ? masterRowActiveStyle : {}),
              }}
              onClick={() => setSelectedId(item.id)}
            >
              <div style={{ fontWeight: 500 }}>{item.name}</div>
              <div style={{ fontSize: 12, color: "#6B7280" }}>
                {item.summary}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={detailColumnStyle}>
        <header style={columnHeaderStyle}>Detail Panel</header>
        <div style={{ padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>{selectedItem.name}</h3>
          <p>{selectedItem.details}</p>
          <div style={{ marginTop: 16 }}>
            <button style={primaryButtonStyle}>Primary Action</button>
            <button style={secondaryButtonStyle}>Secondary Action</button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 5. MULTI-STEP WIZARD LAYOUT                                        */
/* ------------------------------------------------------------------ */

type WizardStepId = 1 | 2 | 3;

const WizardExample: React.FC = () => {
  const [step, setStep] = useState<WizardStepId>(1);

  const canGoBack = step > 1;
  const canGoNext = step < 3;

  const goBack = () =>
    canGoBack && setStep((prev) => (prev - 1) as WizardStepId);
  const goNext = () =>
    canGoNext && setStep((prev) => (prev + 1) as WizardStepId);

  return (
    <div style={shellVerticalStyle}>
      <header style={contentHeaderStyle}>
        <h2 style={{ margin: 0 }}>Multi-step Wizard</h2>
        <div>Use for onboarding flows, complex forms, or setup wizards.</div>
      </header>

      <section style={{ padding: 16 }}>
        <div style={wizardProgressRowStyle}>
          <WizardStepIndicator current={step} step={1} label="Basic Info" />
          <WizardStepIndicator current={step} step={2} label="Details" />
          <WizardStepIndicator current={step} step={3} label="Review" />
        </div>

        <div style={{ ...cardStyle, marginTop: 16 }}>
          {step === 1 && (
            <>
              <h3>Step 1 – Basic Info</h3>
              <p>Collect minimal info to start the process.</p>
              <WireframeInput label="Name" />
              <WireframeInput label="Email" />
            </>
          )}
          {step === 2 && (
            <>
              <h3>Step 2 – Additional Details</h3>
              <p>Ask for details only when necessary.</p>
              <WireframeInput label="Company" />
              <WireframeInput label="Role" />
            </>
          )}
          {step === 3 && (
            <>
              <h3>Step 3 – Review & Confirm</h3>
              <p>Show a summary and let users confirm or go back.</p>
              <ul>
                <li>Show key collected values</li>
                <li>Highlight anything critical</li>
                <li>Provide clear confirm/submit button</li>
              </ul>
            </>
          )}

          <div style={wizardButtonRowStyle}>
            <button
              onClick={goBack}
              disabled={!canGoBack}
              style={secondaryButtonStyle}
            >
              Back
            </button>
            {step < 3 ? (
              <button onClick={goNext} style={primaryButtonStyle}>
                Next
              </button>
            ) : (
              <button style={primaryButtonStyle}>Submit</button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

interface WizardStepIndicatorProps {
  current: WizardStepId;
  step: WizardStepId;
  label: string;
}

const WizardStepIndicator: React.FC<WizardStepIndicatorProps> = ({
  current,
  step,
  label,
}) => {
  const isActive = current === step;
  const isCompleted = current > step;

  return (
    <div style={wizardStepStyle}>
      <div
        style={{
          ...wizardCircleStyle,
          ...(isActive ? wizardCircleActiveStyle : {}),
          ...(isCompleted ? wizardCircleCompletedStyle : {}),
        }}
      >
        {isCompleted ? "✓" : step}
      </div>
      <div style={wizardLabelStyle}>{label}</div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 6. TABLE + FILTERS LAYOUT                                          */
/* ------------------------------------------------------------------ */

const sampleRows = [
  { id: 1, name: "Alpha", status: "Active", owner: "Michael" },
  { id: 2, name: "Beta", status: "Paused", owner: "Claudia" },
  { id: 3, name: "Gamma", status: "Active", owner: "Team A" },
];

const TableWithFiltersExample: React.FC = () => {
  return (
    <div style={shellVerticalStyle}>
      <header style={contentHeaderStyle}>
        <h2 style={{ margin: 0 }}>Table + Filters Layout</h2>
        <div>
          Use this pattern for back-office data, admin tools, and analytics.
        </div>
      </header>

      <section
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div style={cardStyle}>
          <h3 style={{ marginTop: 0 }}>Filters</h3>
          <div style={filtersRowStyle}>
            <WireframeInput label="Search" />
            <WireframeSelect label="Status">
              <option>Any</option>
              <option>Active</option>
              <option>Paused</option>
            </WireframeSelect>
            <WireframeSelect label="Owner">
              <option>Any</option>
              <option>Michael</option>
              <option>Claudia</option>
              <option>Team A</option>
            </WireframeSelect>
            <button style={primaryButtonStyle}>Apply</button>
          </div>
        </div>

        <div style={cardStyle}>
          <h3 style={{ marginTop: 0 }}>Results Table</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Owner</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sampleRows.map((row) => (
                <tr key={row.id}>
                  <td style={tdStyle}>{row.name}</td>
                  <td style={tdStyle}>{row.status}</td>
                  <td style={tdStyle}>{row.owner}</td>
                  <td style={tdStyle}>
                    <button style={secondaryButtonSmallStyle}>View</button>
                    <button style={secondaryButtonSmallStyle}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* SMALL REUSABLE UI PRIMITIVES                                       */
/* ------------------------------------------------------------------ */

interface InputProps {
  label: string;
}

const WireframeInput: React.FC<InputProps> = ({ label }) => (
  <div style={{ marginBottom: 12 }}>
    <label style={fieldLabelStyle}>{label}</label>
    <input type="text" style={fieldInputStyle} />
  </div>
);

interface SelectProps extends InputProps {
  children: React.ReactNode;
}

const WireframeSelect: React.FC<SelectProps> = ({ label, children }) => (
  <div style={{ marginBottom: 12 }}>
    <label style={fieldLabelStyle}>{label}</label>
    <select style={fieldInputStyle}>{children}</select>
  </div>
);

/* ------------------------------------------------------------------ */
/* INLINE STYLES (KEEPING IT SIMPLE FOR WIREFRAME DEMO)               */
/* ------------------------------------------------------------------ */

const rootStyle: React.CSSProperties = {
  display: "flex",
  minHeight: "100vh",
  fontFamily:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  backgroundColor: "#0F172A",
  color: "#E5E7EB",
};

const navStyle: React.CSSProperties = {
  width: 260,
  padding: 16,
  borderRight: "1px solid #1F2937",
  boxSizing: "border-box",
};

const navTitleStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 600,
  marginBottom: 12,
};

const navButtonStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "left",
  padding: "8px 10px",
  borderRadius: 6,
  border: "none",
  backgroundColor: "transparent",
  color: "#D1D5DB",
  cursor: "pointer",
  marginBottom: 4,
  fontSize: 14,
};

const navButtonActiveStyle: React.CSSProperties = {
  backgroundColor: "#1D4ED8",
  color: "#FFFFFF",
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  padding: 16,
  boxSizing: "border-box",
};

const shellStyle: React.CSSProperties = {
  display: "flex",
  minHeight: "100%",
  borderRadius: 12,
  overflow: "hidden",
  border: "1px solid #1F2937",
};

const shellVerticalStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  borderRadius: 12,
  overflow: "hidden",
  border: "1px solid #1F2937",
};

const sidebarStyle: React.CSSProperties = {
  width: 220,
  backgroundColor: "#020617",
  padding: 12,
  boxSizing: "border-box",
};

const sidebarHeaderStyle: React.CSSProperties = {
  fontWeight: 600,
  fontSize: 16,
  marginBottom: 12,
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  backgroundColor: "#020617",
  display: "flex",
  flexDirection: "column",
};

const contentHeaderStyle: React.CSSProperties = {
  padding: 16,
  borderBottom: "1px solid #1F2937",
  backgroundColor: "#020617",
};

const contentBodyStyle: React.CSSProperties = {
  padding: 16,
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "#020617",
  border: "1px solid #1F2937",
  borderRadius: 10,
  padding: 16,
};

const topbarStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 16,
  borderBottom: "1px solid #1F2937",
  backgroundColor: "#020617",
};

const topContentStyle: React.CSSProperties = {
  padding: 16,
};

const topbarSearchStyle: React.CSSProperties = {
  padding: "6px 10px",
  borderRadius: 999,
  border: "1px solid #374151",
  background: "#020617",
  color: "#E5E7EB",
  fontSize: 14,
};

const avatarStyle: React.CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  backgroundColor: "#1D4ED8",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
  fontWeight: 600,
};

const kpiRowStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: 12,
};

const kpiCardStyle: React.CSSProperties = {
  ...cardStyle,
  padding: 12,
};

const kpiLabelStyle: React.CSSProperties = {
  fontSize: 12,
  color: "#9CA3AF",
};

const kpiValueStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  marginTop: 4,
};

const masterColumnStyle: React.CSSProperties = {
  width: 260,
  borderRight: "1px solid #1F2937",
  backgroundColor: "#020617",
  display: "flex",
  flexDirection: "column",
};

const detailColumnStyle: React.CSSProperties = {
  flex: 1,
  backgroundColor: "#020617",
  display: "flex",
  flexDirection: "column",
};

const columnHeaderStyle: React.CSSProperties = {
  padding: 12,
  borderBottom: "1px solid #1F2937",
  fontWeight: 500,
};

const masterRowStyle: React.CSSProperties = {
  padding: 10,
  borderBottom: "1px solid #111827",
  cursor: "pointer",
};

const masterRowActiveStyle: React.CSSProperties = {
  backgroundColor: "#111827",
};

const primaryButtonStyle: React.CSSProperties = {
  padding: "8px 12px",
  borderRadius: 6,
  border: "none",
  backgroundColor: "#1D4ED8",
  color: "#FFFFFF",
  fontSize: 14,
  cursor: "pointer",
  marginRight: 8,
};

const secondaryButtonStyle: React.CSSProperties = {
  padding: "8px 12px",
  borderRadius: 6,
  border: "1px solid #4B5563",
  backgroundColor: "transparent",
  color: "#E5E7EB",
  fontSize: 14,
  cursor: "pointer",
  marginRight: 8,
};

const secondaryButtonSmallStyle: React.CSSProperties = {
  ...secondaryButtonStyle,
  padding: "4px 8px",
  fontSize: 12,
};

const wizardProgressRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 24,
};

const wizardStepStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: 12,
  color: "#9CA3AF",
};

const wizardCircleStyle: React.CSSProperties = {
  width: 28,
  height: 28,
  borderRadius: "50%",
  border: "2px solid #4B5563",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 4,
  fontSize: 13,
};

const wizardCircleActiveStyle: React.CSSProperties = {
  borderColor: "#1D4ED8",
  backgroundColor: "#1D4ED8",
  color: "#FFFFFF",
};

const wizardCircleCompletedStyle: React.CSSProperties = {
  borderColor: "#16A34A",
  backgroundColor: "#16A34A",
  color: "#FFFFFF",
};

const wizardLabelStyle: React.CSSProperties = {
  textAlign: "center",
};

const wizardButtonRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 16,
};

const filtersRowStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: 12,
  alignItems: "flex-end",
};

const fieldLabelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  color: "#9CA3AF",
  marginBottom: 4,
};

const fieldInputStyle: React.CSSProperties = {
  width: "100%",
  padding: "6px 8px",
  borderRadius: 6,
  border: "1px solid #374151",
  backgroundColor: "#020617",
  color: "#E5E7EB",
  fontSize: 14,
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: 8,
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  fontSize: 12,
  color: "#9CA3AF",
  padding: "8px 6px",
  borderBottom: "1px solid #111827",
};

const tdStyle: React.CSSProperties = {
  fontSize: 13,
  padding: "8px 6px",
  borderBottom: "1px solid #111827",
};

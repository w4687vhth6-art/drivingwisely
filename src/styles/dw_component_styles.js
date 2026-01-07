import { css } from "lit";

export const sharedStyles = [
  css`
    :host {
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
        sans-serif;
      color: #0f172a;
    }

    .dw-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1.5rem 1rem;
    }

    /* Remove global red styling */
    h1 {
      margin: 0 0 0.75rem;
      font-size: 2rem;
      color: #0f172a;
      letter-spacing: -0.02em;
    }

    h2 {
      margin: 0 0 0.75rem;
      font-size: 1.2rem;
      color: #0f172a;
    }

    button {
      font: inherit;
    }

    /* ===== Account Page ===== */

    .account-page {
      padding: 0.5rem 0 2rem;
    }

    .account-header {
      margin-bottom: 1.5rem;
    }

    .muted {
      color: #64748b;
    }

    .account-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1.25rem;
      align-items: start;
    }

    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 1.25rem;
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    label {
      font-size: 0.9rem;
      color: #334155;
    }

    input {
      padding: 0.6rem 0.7rem;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      outline: none;
    }

    input:focus {
      border-color: #94a3b8;
      box-shadow: 0 0 0 4px rgba(148, 163, 184, 0.25);
    }

    .toggle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0.75rem;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      margin-bottom: 0.75rem;
      background: #fff;
    }

    .primary {
      margin-top: 0.75rem;
      background: #0f172a;
      color: #fff;
      border: none;
      padding: 0.65rem 1rem;
      border-radius: 12px;
      cursor: pointer;
      width: auto;
      height: auto;
    }

    .danger {
      margin-top: 0.75rem;
      background: #e11d48;
      color: #fff;
      border: none;
      padding: 0.65rem 1rem;
      border-radius: 12px;
      cursor: pointer;
      width: auto;
      height: auto;
    }

    hr {
      border: none;
      border-top: 1px solid #e2e8f0;
      margin: 1rem 0;
    }

    @media (max-width: 900px) {
      .account-grid {
        grid-template-columns: 1fr;
      }
      .form-row {
        grid-template-columns: 1fr;
      }
    }
      /* ===== Account layout (screenshot style) ===== */

.acct-shell{
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 18px;
  margin-top: 18px;
}

.acct-left{
  display: flex;
  justify-content: center;
}

.acct-card{
  width: 100%;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 10px 22px rgba(15,23,42,0.06);
  text-align: center;
}

.acct-avatar{
  width: 86px;
  height: 86px;
  border-radius: 999px;
  margin: 6px auto 12px;
  background: #e5e7eb;
  border: 1px solid #e2e8f0;
}

.acct-name{
  font-weight: 700;
  margin-bottom: 6px;
}

.acct-email{
  margin-bottom: 14px;
}

.btn{
  border: none;
  border-radius: 12px;
  padding: 10px 14px;
  cursor: pointer;
  font-weight: 600;
}

.btn-ghost{
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #0f172a;
}

.acct-panel{
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 22px rgba(15,23,42,0.06);
}

.acct-row{
  display: grid;
  grid-template-columns: 160px 1fr 70px;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-top: 1px solid #eef2f7;
}

.acct-row:first-child{
  border-top: none;
}

.acct-row-head{
  background: #fbfdff;
  grid-template-columns: 1fr 70px;
}

.acct-title{
  font-weight: 700;
}

.acct-label{
  color: #334155;
  font-size: 0.92rem;
}

.acct-value{
  color: #0f172a;
  font-size: 0.95rem;
}

.acct-edit{
  justify-self: end;
  font-size: 0.9rem;
  color: #2563eb;
  text-decoration: none;
}

.acct-edit:hover{
  text-decoration: underline;
}

.acct-section{
  border-top: 10px solid #f1f5f9;
}

.pill{
  display: inline-block;
  padding: 4px 8px;
  border-radius: 999px;
  background: #eef2ff;
  color: #1e40af;
  font-weight: 700;
  font-size: 0.8rem;
  margin-right: 8px;
}

.acct-summary{
  display: flex;
  gap: 18px;
  justify-self: end;
  color: #475569;
  font-size: 0.92rem;
}

@media (max-width: 900px){
  .acct-shell{
    grid-template-columns: 1fr;
  }
  .acct-row{
    grid-template-columns: 1fr;
  }
  .acct-edit{
    justify-self: start;
  }
  .acct-row-head{
    grid-template-columns: 1fr;
  }
  .acct-summary{
    justify-self: start;
    flex-wrap: wrap;
  }
}
  /* ===== Top Navbar (matches your reference image) ===== */

.topnav {
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);
  padding: 10px 14px;
}

.topnav__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.topnav__brand {
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #0f172a;
  text-decoration: none;
}

.topnav__center {
  display: flex;
  gap: 22px;
  justify-content: center;
}

.topnav__link {
  font-size: 0.92rem;
  color: #64748b;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 10px;
}

.topnav__link:hover {
  background: #f1f5f9;
  color: #0f172a;
}

.topnav__link.is-active {
  color: #0f172a;
  font-weight: 700;
}

.topnav__right {
  display: flex;
  justify-content: flex-end;
}

.topnav__avatar {
  text-decoration: none;
}

.topnav__avatarCircle {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: #e5e7eb;
  border: 1px solid #e2e8f0;
  color: #0f172a;
  font-weight: 800;
  font-size: 0.85rem;
}

@media (max-width: 720px) {
  .topnav__inner {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .topnav__center {
    grid-column: 1 / -1;
    justify-content: flex-start;
    overflow-x: auto;
    padding-top: 8px;
  }
}
 /* ===== Home (Hero) ===== */

.hero-card{
  background:#fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 10px 22px rgba(15,23,42,0.06);
  padding: 34px;
  margin-top: 18px;
}

.hero{
  display:grid;
  grid-template-columns: 1.05fr 1.2fr;
  gap: 22px;
  align-items:center;
  min-height: 360px;
}

.hero-title{
  font-size: 2.4rem;
  line-height: 1.05;
  margin: 0 0 14px;
  letter-spacing: -0.03em;
}

.hero-sub{
  margin: 0 0 18px;
  color:#64748b;
  line-height: 1.4;
  max-width: 420px;
}

/* Search bar like the image (connected input + blue button) */
.hero-search{
  display:flex;
  align-items:stretch;
  width: 420px;
  max-width: 100%;
  box-shadow: 0 10px 22px rgba(15,23,42,0.08);
  border-radius: 12px;
  overflow:hidden;
}

.hero-input{
  flex: 1;
  border: 1px solid #e2e8f0;
  border-right: none;
  padding: 12px 14px;
  font-size: 0.95rem;
  outline:none;
  background:#fff;
}

.hero-btn{
  background:#2563eb;
  color:#fff;
  border:none;
  padding: 0 18px;
  font-weight: 700;
  cursor:pointer;
}

.hero-right{
  display:flex;
  justify-content:flex-end;
  align-items:center;
}

.hero-image{
  width: 100%;
  max-width: 560px;
  height:auto;
  border-radius: 12px;
}

/* If you’re still using the placeholder DIV */
.hero-image-placeholder{
  width: 100%;
  max-width: 560px;
  height: 260px;
  border-radius: 12px;
  background: linear-gradient(135deg, #dbeafe, #f8fafc);
}

@media (max-width: 900px){
  .hero{ grid-template-columns: 1fr; }
  .hero-right{ justify-content:center; }
  .hero-search{ width: 100%; }
}

/* ===== Bookings (polished) ===== */

.book-shell {
  display: grid;
  grid-template-columns: 1.25fr 0.85fr;
  gap: 18px;
  margin-top: 18px;
}

.book-title {
  margin: 0 0 6px;
  font-size: 2.2rem;
  letter-spacing: -0.03em;
}

.book-sub {
  margin: 0 0 16px;
}

.book-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);
}

.book-h2 {
  margin: 0 0 12px;
  font-size: 1.05rem;
  font-weight: 800;
}

.book-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.book-notes {
  grid-column: 1 / -1;
}

.book-actions {
  display: flex;
  gap: 10px;
  margin-top: 14px;
  align-items: center;
}

/* Inputs */
.book-input,
.book-select,
.book-textarea {
  width: 100%;
  padding: 0.7rem 0.8rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  outline: none;
  background: #fff;
  font-size: 0.95rem;
}

.book-input:focus,
.book-select:focus,
.book-textarea:focus {
  border-color: #94a3b8;
  box-shadow: 0 0 0 4px rgba(148, 163, 184, 0.25);
}

/* Make selects look clean */
.book-select {
  appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, #64748b 50%),
    linear-gradient(135deg, #64748b 50%, transparent 50%);
  background-position:
    calc(100% - 18px) calc(50% - 3px),
    calc(100% - 12px) calc(50% - 3px);
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
  padding-right: 36px;
}

.book-textarea {
  resize: vertical;
  min-height: 110px;
}

/* Right column list */
.book-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.book-item {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
  padding: 14px;
  border: 1px solid #eef2f7;
  border-radius: 12px;
  background: #fff;
}

.book-when {
  font-weight: 800;
  letter-spacing: -0.01em;
}

.book-who {
  margin-top: 2px;
}

.badge {
  font-size: 0.82rem;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid #e2e8f0;
  white-space: nowrap;
  height: fit-content;
}

.badge-upcoming {
  background: #ecfeff;
  border-color: #a5f3fc;
  color: #155e75;
}

.badge-done {
  background: #ecfdf5;
  border-color: #a7f3d0;
  color: #065f46;
}

@media (max-width: 900px) {
  .book-shell {
    grid-template-columns: 1fr;
  }
  .book-grid {
    grid-template-columns: 1fr;
  }
}
`,
];

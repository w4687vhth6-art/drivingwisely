import { css } from "lit";

export const sharedStyles = [
  css`
    /* =========================
       Global / Page shell
    ========================== */

    :host {
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
        sans-serif;
      color: #0f172a;
    }

    :global(html, body) {
      margin: 0;
      padding: 0;
      background: #eaf6e3; /* light lime green page background */
    }

    /* Main container used across pages */
    .dw-wrapper {
      max-width: 1180px;
      margin: 0 auto;
      padding: 18px 1rem 60px;
    }

    /* A reusable “surface” background for sections/cards */
    .surface {
      background: rgba(255, 255, 255, 0.75);
      border: 1px solid rgba(15, 23, 42, 0.1);
      border-radius: 18px;
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
      backdrop-filter: blur(6px);
    }

    h1 {
      margin: 0 0 0.75rem;
      font-size: 2rem;
      letter-spacing: -0.02em;
      color: #0f172a;
    }

    h2 {
      margin: 0 0 0.75rem;
      font-size: 1.25rem;
      color: #0f172a;
    }

    button {
      font: inherit;
    }

    input,
    select,
    textarea {
      font: inherit;
    }

    /* =========================
       Top Navbar
    ========================== */

    .topnav {
  background: #dff7e3; /* same green as free-call */
  border: 1px solid #cfe8d2;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(34, 197, 94, 0.25);
  padding: 12px 16px;
}

    .topnav__inner {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
    }

    .topnav__brand {
      font-weight: 900;
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
  color: #0f172a;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 10px;
}

    .topnav__link:hover {
  background: rgba(255, 255, 255, 0.6);
}

    .topnav__link.is-active {
      color: #0f172a;
      font-weight: 800;
    }

    .topnav__right {
      display: flex;
      justify-content: flex-end;
    }

    .topnav__avatarCircle {
      width: 34px;
      height: 34px;
      border-radius: 999px;
      display: grid;
      place-items: center;
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(15, 23, 42, 0.12);
      color: #0f172a;
      font-weight: 900;
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

    /* =========================
       HOME PAGE
    ========================== */

    .hero-card {
      margin-top: 18px;
      padding: 28px;
      border-radius: 22px;
      background: rgba(255, 255, 255, 0.75);
      border: 1px solid rgba(15, 23, 42, 0.1);
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
    }

    .hero {
  text-align: center;
  padding: 3.5rem 1rem 2.5rem;
  max-width: 720px;
  margin: 0 auto;
  background: none;        /* removes bubble */
  border-radius: 0;
}

.hero-title {
  font-size: 2.6rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
}

.hero-sub {
  font-size: 1.05rem;
  color: #334155;
  margin-bottom: 1.5rem;
}
    }

    .hero-search {
  display: flex;
  gap: 14px;
  margin-top: 1.75rem;
  width: 100%;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}

.hero-search input {
  flex: 1;
  padding: 15px 18px;
  border-radius: 16px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  outline: none;
  background: #ffffff;
}

.hero-search input:focus {
  border-color: #22c55e;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);
}

.hero-search button {
  background: #22c55e;
  color: #ffffff;
  border: none;
  padding: 15px 26px;
  border-radius: 16px;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 10px 24px rgba(34, 197, 94, 0.35);
}

.hero-search button:hover {
  background: #16a34a;
}
}

    
    }

    .hero-right {
      display: flex;
      justify-content: center;
    }

    .hero-svg {
      width: min(460px, 100%);
      height: auto;
      display: block;
    }

    @media (max-width: 900px) {
      .hero {
        grid-template-columns: 1fr;
      }
      .hero-right {
        order: -1;
      }
    }

    /* FAQ (Accordion style) */

    .faq {
      margin-top: 26px;
    }

    .faq h2 {
      margin-bottom: 0.75rem;
    }

    details.faq-item {
      background: rgba(255, 255, 255, 0.75);
      border: 1px solid rgba(15, 23, 42, 0.1);
      border-radius: 14px;
      padding: 0.9rem 1rem;
      margin-bottom: 0.9rem;
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
    }

    details.faq-item summary {
      cursor: pointer;
      font-weight: 800;
      list-style: none;
    }

    details.faq-item summary::-webkit-details-marker {
      display: none;
    }

    details.faq-item p {
      margin: 0.75rem 0 0;
      color: #475569;
      line-height: 1.5;
    }
    details.faq-item summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.faq-chevron {
  font-weight: 900;
  color: #64748b;
  transition: transform 0.2s ease;
}

details[open] .faq-chevron {
  transform: rotate(180deg);
}

    /* Free call section */

    .free-call {
      margin-top: 28px;
    }

    .free-call-inner {
      background: #dff7e3; /* green like hero theme */
      border: 1px solid #cfe8d2;
      border-radius: 22px;
      padding: 28px;
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 20px;
      align-items: center;
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
    }

    .free-call-title {
      margin: 0 0 10px;
      font-size: 2.1rem; /* bigger */
      font-weight: 900;
      letter-spacing: -0.02em;
      color: #0f172a;
    }

    .free-call-sub {
      margin: 0 0 16px;
      color: #334155;
      line-height: 1.5;
    }

    .free-call-actions {
      display: flex;
      gap: 14px;
      align-items: center;
      flex-wrap: wrap;
    }

    .free-call-btn {
      background: #0f172a;
      color: #fff;
      border: none;
      padding: 12px 16px;
      border-radius: 14px;
      font-weight: 900;
      cursor: pointer;
    }

    .free-call-btn:hover {
      opacity: 0.92;
    }

    .free-call-link {
      color: #0f172a;
      font-weight: 800;
      text-decoration: none;
      padding: 10px 12px;
      border-radius: 12px;
      border: 1px solid rgba(15, 23, 42, 0.18);
      background: rgba(255, 255, 255, 0.55);
    }

    .free-call-link:hover {
      background: rgba(255, 255, 255, 0.85);
    }

    .free-call-right {
      display: flex;
      justify-content: center;
    }

    .free-call-svg {
      width: min(420px, 100%);
      height: auto;
      display: block;
    }

    @media (max-width: 900px) {
      .free-call-inner {
        grid-template-columns: 1fr;
      }
      .free-call-right {
        order: -1;
      }
    }

    /* Footer info */

    .footer-info {
      margin-top: 34px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      padding-bottom: 0;
    }
    .footer-link {
      color: #0f172a;
      text-decoration: underline;
      font-weight: 600;
    }
    .footer-link:hover {
      opacity: 0.8;
    }
}

    .footer-info ul {
      list-style: none;
      padding: 0;
      margin: 0.75rem 0 0;
    }

    .footer-info li {
      margin-bottom: 0.5rem;
      color: #475569;
    }

    @media (max-width: 900px) {
      .footer-info {
        grid-template-columns: 1fr;
      }
    }

    /* =========================
       ACCOUNT PAGE (kept)
    ========================== */

    .account-page {
      padding: 0.5rem 0 2rem;
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

    @media (max-width: 900px) {
      .account-grid {
        grid-template-columns: 1fr;
      }
    }

    /* =========================
       BOOKINGS (kept)
    ========================== */

    .book-shell {
      display: grid;
      grid-template-columns: 1.25fr 0.85fr;
      gap: 18px;
      margin-top: 18px;
    }

    .book-card {
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 18px;
      box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);
    }

    @media (max-width: 900px) {
      .book-shell {
        grid-template-columns: 1fr;
      }
    }
  `,
];

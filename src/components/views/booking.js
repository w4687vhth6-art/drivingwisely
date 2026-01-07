import { LitElement, html } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "./navbar.js";

class BookingComponent extends LitElement {
  static styles = sharedStyles;

  static properties = {
    postcode: { type: String },
    selectedInstructor: { type: String },
    lessonType: { type: String },
    date: { type: String },
    time: { type: String },
    notes: { type: String },
  };

  constructor() {
    super();
    this.postcode = "";
    this.selectedInstructor = "";
    this.lessonType = "60";
    this.date = "";
    this.time = "";
    this.notes = "";
  }

  render() {
    return html`
      <div class="dw-wrapper">
        <dw-nav-bar></dw-nav-bar>

        <section class="book-shell">
          <!-- LEFT COLUMN -->
          <div>
            <h1 class="book-title">Bookings</h1>
            <p class="muted book-sub">
              Request a lesson, pick a time, and manage upcoming bookings.
            </p>

            <div class="book-card">
              <h2 class="book-h2">New booking</h2>

              <div class="book-grid">
                <div class="field">
                  <label>Postcode / area</label>
                  <input
                    class="book-input"
                    type="text"
                    placeholder="e.g. SW1A 1AA"
                    .value=${this.postcode}
                    @input=${(e) => (this.postcode = e.target.value)}
                  />
                </div>

                <div class="field">
                  <label>Instructor</label>
                  <select
                    class="book-select"
                    .value=${this.selectedInstructor}
                    @change=${(e) =>
                      (this.selectedInstructor = e.target.value)}
                  >
                    <option value="">Select instructor</option>
                    <option value="Charlie">Charlie</option>
                    <option value="Ollie">Ollie</option>
                    <option value="Sam">Sam</option>
                  </select>
                </div>

                <div class="field">
                  <label>Lesson length</label>
                  <select
                    class="book-select"
                    .value=${this.lessonType}
                    @change=${(e) => (this.lessonType = e.target.value)}
                  >
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="120">120 minutes</option>
                  </select>
                </div>

                <div class="field">
                  <label>Date</label>
                  <input
                    class="book-input"
                    type="date"
                    .value=${this.date}
                    @input=${(e) => (this.date = e.target.value)}
                  />
                </div>

                <div class="field">
                  <label>Time</label>
                  <input
                    class="book-input"
                    type="time"
                    .value=${this.time}
                    @input=${(e) => (this.time = e.target.value)}
                  />
                </div>

                <div class="field book-notes">
                  <label>Notes (optional)</label>
                  <textarea
                    class="book-textarea"
                    placeholder="Any details for the instructor…"
                    .value=${this.notes}
                    @input=${(e) => (this.notes = e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div class="book-actions">
                <button class="primary">Request booking</button>
                <button class="btn btn-ghost">Clear</button>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN -->
          <aside>
            <div class="book-card">
              <h2 class="book-h2">Upcoming</h2>

              <div class="book-list">
                <div class="book-item">
                  <div>
                    <div class="book-when">Tue 16 Jan · 10:00</div>
                    <div class="book-who">With Charlie · 60 mins</div>
                    <div class="muted">Pickup: SW1A 1AA</div>
                  </div>
                  <span class="badge badge-upcoming">Upcoming</span>
                </div>

                <div class="book-item">
                  <div>
                    <div class="book-when">Thu 18 Jan · 14:30</div>
                    <div class="book-who">With Ollie · 90 mins</div>
                    <div class="muted">Pickup: E1 6AN</div>
                  </div>
                  <span class="badge badge-upcoming">Upcoming</span>
                </div>
              </div>
            </div>

            <div class="book-card">
              <h2 class="book-h2">Past</h2>

              <div class="book-list">
                <div class="book-item">
                  <div>
                    <div class="book-when">Mon 8 Jan · 09:00</div>
                    <div class="book-who">With Sam · 60 mins</div>
                    <div class="muted">Pickup: N1 9GU</div>
                  </div>
                  <span class="badge badge-done">Completed</span>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    `;
  }
}

customElements.define("dw-booking", BookingComponent);
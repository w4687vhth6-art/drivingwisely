import { LitElement, html } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "../views/navbar.js";

class InstructorSignupComponent extends LitElement {
  static styles = sharedStyles;

  render() {
    return html`
      <div class="dw-wrapper">
        <dw-nav-bar></dw-nav-bar>

        <div class="page">
          <section class="card">
            <h1>Become an instructor</h1>
            <p class="muted">
              Join DrivingWisely and make managing lessons simpler, faster, and more
              efficient.
            </p>

            <h2>Why teach with DrivingWisely?</h2>
            <ul>
              <li>Get discovered by learners near you</li>
              <li>Manage bookings in one place</li>
              <li>Reduce admin and spend more time teaching</li>
              <li>Flexible schedule and availability</li>
            </ul>

            <h2>How it works</h2>
            <ol>
              <li>Create your instructor profile</li>
              <li>Set the areas you cover and your availability</li>
              <li>Receive booking requests and confirm lessons</li>
            </ol>

            <button class="primary" type="button">Request to join</button>
          </section>
        </div>
      </div>
    `;
  }
}

customElements.define("dw-instructor-signup", InstructorSignupComponent);
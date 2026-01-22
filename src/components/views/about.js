import { LitElement, html } from "lit";
import { sharedStyles } from "../../styles/dw_component_styles.js";
import "./navbar.js";

class AboutComponent extends LitElement {
  static styles = sharedStyles;

  render() {
    return html`
      <div class="dw-wrapper page-bg">
        <dw-nav-bar></dw-nav-bar>

        <div class="page">
          <section class="card">
            <h1>About DrivingWisely</h1>

            <p>
              DrivingWisely was established in <strong>2025</strong> with one clear goal:
              to make learning to drive and booking driving lessons simpler, faster,
              and less stressful than it has ever been.
            </p>

            <p>
              Learning to drive is a major milestone. It gives people independence,
              opens up opportunities for work and education, and plays a huge role
              in everyday life. With more and more vehicles on the road, driving
              safely and confidently has never been more important.
            </p>

            <p>
              At DrivingWisely, we focus on helping new drivers build strong foundations
              — not just to pass their test, but to become safe, confident, and
              responsible drivers for life.
            </p>

            <h2>For Learners</h2>
            <p>
              Whether you’re a complete beginner or returning to driving after time
              away, DrivingWisely helps you find trusted instructors, book lessons
              easily, and manage everything in one place.
            </p>

            <h2>For Instructors</h2>
            <p>
              DrivingWisely is also built for instructors who want a more efficient
              way to work. Instructors can sign up, create a professional profile,
              manage bookings, and reduce admin time — allowing them to focus on
              teaching.
            </p>

            <p>
              Our platform helps instructors connect with learners more easily and
              keep their schedules organised.
            </p>
          </section>
        </div>
      </div>
    `;
  }
}

customElements.define("dw-about", AboutComponent);
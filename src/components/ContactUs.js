import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    return (
      // <section id="contact">
      //     <div className="row section-head">
      //       <div className="ten columns">
      //         <p className="lead">
      //         Feel free to contact me for any work or suggestions below
      //         </p>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <aside className="eigth columns footer-widgets">
      //         <div className="widget">
      //           <h4>Linked in :
      //             {resumeData.linkedinId}
      //           </h4>
      //         </div>
      //       </aside>
      //     </div>
      //   </section>
      <section id="contact">
      <form className="form-container" action="https://submit-form.com/aQzPl043">
        <label for="name">Name</label>
        <input
        className="form-input"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required=""
        />
        <label for="email">Email</label>
        <input
        className="form-input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required=""
        />
        <label for="message">Message</label>
        <textarea
        className="form-input"
          id="message"
          name="message"
          placeholder="Message"
          required=""
        />
        <button type="submit">Send</button>
      </form>
    </section>
    );
  }
}

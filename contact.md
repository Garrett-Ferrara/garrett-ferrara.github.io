---
layout: page
title: "Contact"
description: "Get in touch."
---

I'm open to inquiries about research collaboration, consulting, speaking engagements, and other professional opportunities.

## Send a Message

Use the form below to send me a message directly via [Formspree](https://formspree.io/). I'll respond as soon as possible.

<form class="contact-form" action="https://formspree.io/f/TODO-YOUR-FORMSPREE-ID" method="POST">
  <div class="form-group">
    <label for="name">Your Name</label>
    <input type="text" id="name" name="name" required>
  </div>

  <div class="form-group">
    <label for="email">Your Email</label>
    <input type="email" id="email" name="email" required>
  </div>

  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" required></textarea>
  </div>

  <!-- Honeypot spam filter -->
  <div class="form-group honeypot">
    <label for="website">Website (leave blank)</label>
    <input type="text" id="website" name="website">
  </div>

  <button type="submit" class="btn btn-accent form-submit">Send Message</button>
</form>

## Other Ways to Connect

{% if site.data.site.email %}
- **Email:** [{{ site.data.site.email }}](mailto:{{ site.data.site.email }})
{% else %}
- **Email:** [Add your email to site data]
{% endif %}

{% if site.data.site.linkedin %}
- **LinkedIn:** [View my profile]({{ site.data.site.linkedin }})
{% else %}
- **LinkedIn:** [Add your LinkedIn URL to site data]
{% endif %}

- **GitHub:** [garrett-ferrara]({{ site.data.site.github }})
- **Location:** {{ site.data.site.location }}

---

**Note:** To enable the contact form, sign up for a free [Formspree](https://formspree.io/) account, create a new form, and replace the `action` URL in the form above with your Formspree endpoint ID.

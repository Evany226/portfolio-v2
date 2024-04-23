<template>
  <section id="contacts" class="contacts-section">
    <h3 class="contacts-title">Contact Me</h3>
    <div class="contact-form">
      <form class="form">
        <input
          required
          name="name"
          placeholder="Name"
          type="text"
          autocomplete="off"
        />
        <input
          required
          name="email"
          placeholder="E-mail"
          type="email"
          autocomplete="off"
        />
        <textarea name="message" rows="4" placeholder="Message"></textarea>
        <button class="button">Send</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacts",
};
</script>

<style>
.contacts-section {
  width: 100%;
  background-color: var(--main);
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 5rem 0rem;
  padding-bottom: 10rem;
}

.contacts-title {
  color: var(--text2);
  margin-bottom: 2rem;
  font-weight: 600;
}

.contacts-subtitle {
  color: var(--text2);
  font-weight: 400;
  margin-bottom: 8rem;
}

.contact-form {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: "Roboto", sans-serif;
  padding: 10px 7px;
  margin-bottom: 1rem;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: var(--red);
  border: solid 0.1rem var(--red);
  color: white;
  cursor: pointer;
  padding: 1rem 5rem;
  text-align: center;

  font-weight: 500;
  font-family: "Montserrat", sans-serif;
}

.contact-form .button:hover {
  background: #da3434;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
  margin: 1rem 0rem;
  font-family: "Montserrat", sans-serif;
}
</style>

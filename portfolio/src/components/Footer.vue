<template>
  <section class="footer-section">
      <div class="footer-container">
          <div class="footer-col">
              <h5 class="footer-copyright">Copyright © Evan Yang 2021</h5>
          </div>
          <div class="footer-col">
                <a href="https://www.linkedin.com/in/evan-yang-9bb856201/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/Evany226" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
                <a href="" onclick="return false;"><i class="fab fa-twitter-square"></i></a>
          </div>
          <div class="footer-col">
              <ul class="footer-links">
                  <li><a href="#about" v-smooth-scroll>About</a></li>
                  <li><a href="#skills" v-smooth-scroll>Skills</a></li>
                  <li><a href="#projects" v-smooth-scroll>Projects</a></li>
              </ul>
          </div>
      </div>
  </section>
</template>

<script>
export default {
name: "Footer",
}
</script>

<style>
.footer-section {
    background-color: var(--light);
    width: 100vw;
    display: flex;
}

.footer-container {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin: 1rem;
}

.footer-col {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 33.33333333%;
    margin: 1rem 3rem;
}

.fa-twitter-square {
    font-size: 5rem;
    color: var(--text)
}

.fa-twitter-square:hover {
    color: var(--red);
    transition: 0.3s;
}

.footer-links {
    display: flex;
}

.footer-copyright {
    font-weight: 600;
}

.footer-links a {
    margin: 1rem;
    text-decoration: none;
    color: var(--red);

}

.footer-links a:hover {
    text-decoration: underline;
}

.footer-links li {
    list-style: none;
    font-size: 2.2rem;
    font-weight: 500;
}


</style>
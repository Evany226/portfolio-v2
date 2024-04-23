<template>
  <section id="about" class="about-section">
    <div
      class="about-container-first"
      data-aos="slide-right"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <img src="../assets/newpic.jpg" class="container-portrait" />
    </div>

    <div
      class="about-container-second"
      data-aos="slide-left"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div class="second-title-container">
        <h3 class="second-container-name">Evan Yang</h3>
        <h4 class="second-container-subtitle">Stevens 26' Computer Science</h4>
      </div>

      <div class="second-desc-container">
        <h4 class="description">
          Hey, I'm Evan. I'm currently a sophomore studying Computer Science at
          Stevens Institute of Technology. I'm interested in a career in the
          tech industry, related to full-stack web or software development. My
          main hobbies include video games, basketball and rock climbing.
        </h4>
      </div>

      <h4 class="work-title">Learn more about my work:</h4>

      <div class="work-container">
        <a class="work-button" href="#skills" v-smooth-scroll>Skills</a>
        <a class="work-button" href="#projects" v-smooth-scroll>Projects</a>
        <a class="work-button" id="resume" v-smooth-scroll>Resume</a>
      </div>

      <div class="about-container-icon">
        <a
          href="https://www.linkedin.com/in/eyang26/"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a
          href="https://github.com/Evany226"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="fab fa-github-square"></i
        ></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  props: {},
};
</script>

<style>
.about-section {
  padding: 8rem 0rem;
  background-color: var(--light);
  display: flex;
  overflow: hidden;
}

.about-container-first {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-container-second {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-portrait {
  width: 50%;
  border-radius: 0.5rem;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.about-container-icon {
  display: flex;
  margin-bottom: 3rem;
}

.fa-linkedin {
  font-size: 5rem;
  color: var(--text);
}

.fa-linkedin:hover {
  color: var(--red);
  transition: 0.2s;
}

.fa-github-square {
  font-size: 5rem;
  margin: 0rem 3rem;
  color: var(--text);
}

.fa-github-square:hover {
  color: var(--red);
  transition: 0.2s;
}

.second-title-container {
  display: flex;
  flex-direction: column;
}

.second-container-name {
  color: var(--text);
  margin-top: 0rem;
}

.second-container-subtitle {
  color: var(--accent);
  margin-top: 1.5rem;
}

.description {
  font-weight: 500;
  margin-top: 5rem;
  max-width: 90%;
  font-size: 2rem;
}

.work-title {
  margin-top: 5rem;
  font-weight: 600;
  font-size: 2rem;
}

.work-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 5rem;
}

#resume {
  background-color: var(--main);
  color: var(--text2);
  text-shadow: none;
}

#resume:hover {
  color: var(--text);
  background-color: var(--light);
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  border: 0.1em solid #000000;
}

.work-button {
  display: inline-block;
  padding: 0.6rem 2rem;
  border: 0.1em solid #000000;
  margin-right: 2.5rem;
  border-radius: 0.1rem;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #000000;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  background-color: #ffffff;
  text-align: center;
  transition: all 0.15s;
  font-size: 1.75rem;
  border-radius: 0.5rem;
}

.work-button:hover {
  color: var(--text2);
  border-color: var(--text2);
  background-color: var(--main);
  cursor: pointer;
}
</style>

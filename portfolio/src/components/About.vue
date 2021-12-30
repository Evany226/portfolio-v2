<template>
  <section id="about" class="about-section">
      <div class="about-container-first" data-aos="slide-right"  data-aos-duration="1000" data-aos-once="true">
            <img src="../assets/pfp.png" class="container-portrait">
      </div>

      <div class="about-container-second" data-aos="slide-left"  data-aos-duration="1000" data-aos-once="true">
          <div class="second-title-container">
              <h3 class="second-container-name">Evan Yang</h3>
              <h4 class="second-container-subtitle">SITHS 22 Student Web Developer</h4>
          </div>

            <div class="second-desc-container" >
                <h4 class="description" >I’m a student at Staten Island Technical Highschool and I have  a passion for computer science. I am interested in a career in the tech industry, related to web design or software development.
                </h4>
            </div>

            <h4 class="work-title">Learn more about my work:</h4>

            <div class="work-container">
                <a class="work-button" href="#skills" v-smooth-scroll>Skills</a>
                <a class="work-button" href="#projects" v-smooth-scroll>Projects</a>
                <a class="work-button" id="resume" v-smooth-scroll>Resume</a>
            </div>

            <div class="about-container-icon">
                <a href="https://www.linkedin.com/in/evan-yang-9bb856201/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/Evany226" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
            </div>
      </div>


  </section>
</template>

<script>
export default {
  name: 'About',
  props: {
  }
}
</script>

<style>
.about-section{
    padding: 5rem 0rem;
    background-color: var(--light);
    display: flex;
       overflow: hidden;
}

.about-container-first {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7rem;
}

.about-container-second {
    width: 50%;
    display: flex;
    flex-direction: column;
}

.container-portrait {
    width: 20vw;
    border-radius: 2rem;
    border: solid 0.3rem var(--nav);
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
    transition: 0.3s;
}

.fa-github-square {
    font-size: 5rem;
    margin: 0rem 3rem;
    color: var(--text);
}

.fa-github-square:hover {
    color: var(--red);
    transition: 0.3s;
}

.second-title-container {
    display: flex;
    flex-direction: column;
}

.second-container-name {
    color: var(--text);
    margin-top: 7rem;
}

.second-container-subtitle{
    color: var(--accent);
    margin-top: 1.5rem;
}


.description {
    font-weight: 400;
    margin-top: 5rem;
    max-width: 90%;
}

.work-title {
    margin-top: 5rem;
    font-weight: 600;
    font-size: 2.8rem;
}

.work-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    margin-bottom: 5rem;
}

#resume {
    background-color: var(--dark);
    color: var(--text2);
    text-shadow: none;
}

.work-button {
    display:inline-block;
    padding: 0.8rem 2.5rem;
    border:0.1em solid #000000;
    margin-right: 2.5rem;
    border-radius: 0.1rem;
    box-sizing: border-box;
    text-decoration:none;
    font-weight:300;
    color:#000000;
    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
    background-color:#FFFFFF;
    text-align:center;
    transition: all 0.15s;
    font-size: 2rem;
}

.work-button:hover{
    text-shadow: 0 0 2em rgba(255,255,255,1);
    color: var(--text2);
    border-color: var(--text2);
    background-color: var(--nav);
    cursor: pointer;
}


</style>
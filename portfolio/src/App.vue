<template>
  <div id="app">
    <nav class="nav">
      <div class="logo">Evan<span>Yang</span> </div>
      <ul class="links" ref="close">
        <li><a href="#about" v-smooth-scroll> About </a></li>
        <li><a href="#skills" v-smooth-scroll> Skills </a></li>
        <li><a href="#projects" v-smooth-scroll> Projects </a></li>
        <li><a href="#about" id="contact" v-smooth-scroll> Contact </a></li>
      </ul>

      <a class="navbar-toggle" @click="toggle">
        <i class="fas fa-bars"></i>
      </a>
    </nav>
        <Intro/>
        <About/>
        <Skills/>
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue';
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';

export default {
  name: 'App',
  components: {
    Intro,
    About,
    Skills
  },

  methods: {
    toggle() { 
      this.$refs.close.classList.toggle("active");
    },

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
}

html, body, *{
  font-size: 62.5%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  --nav: #363535;
  --dark: #292929;
  --light: #F6F4F2;
  --red: #D64848;
  --text: #000000;
  --text2: #ffffff;
  --accent: #6A6868;

  --h1: 7.594rem;
  --h2: 5.063rem;
  --h3: 3.375rem;
  --h4: 2.3rem;
  --h5: 1.5rem;

}

h1{
  font-size: var(--h1);
}
h2{
  font-size: var(--h2);
}
h3{
  font-size: var(--h3);
}
h4{
  font-size: var(--h4);
}
h5{
  font-size: var(--h5);
}

nav {
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 3%;
  background-color: var(--nav);
  height: 6rem;
}

nav .logo {
  float: left;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 3.2rem;
  color: var(--text2);
  font-weight: 500;
}

span {
  color: var(--red);
  font-size: 3.2rem;
  font-weight: 600;
}

.fa-bars {
  font-size: 3rem;
  color: var(--text2);
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  display: none;
}

nav .links {
  float: right;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
}

nav .links li {
  list-style: none;
}

nav .links a:hover {
  color: var(--red);
  transition: 0.3s;
}

nav .links a {
  display: block;
  font-size: 2rem;
  text-decoration: none;
  color: var(--text2)
}

#contact {
  color: var(--dark);
  background-color: var(--red);
  padding: 0.5rem 1rem;
}

@media screen and (max-width:768px) {
  nav .logo {
    float: none;
    width: auto;
    justify-content: center;
  }

  nav .links {
    float: none;
    position: fixed;
    width: 60%;
    z-index: 9;
    background-color: rgba(0, 0, 0,.8);
    left: 0;
    right: 0;
    bottom: 100%;
    top: 6rem;
    flex-direction: column;
    height: auto;
    width: auto;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }

  nav .links a {
    font-size: 2.5rem;
    font-weight: 500;
  }

  .fa-bars {
    display: block;
  }

  nav .links.active {
    bottom: 0rem;
  }
}

</style>



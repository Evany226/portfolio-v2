<template>
  <section class="flex-container">
      <div class="first-container">
        <h1 class="name">Evan Yang</h1>
          <h3 class="school">Staten Island Technical Highscool</h3>
          <h4 class="title">Student Web Developer</h4>
      </div>

      <div class="bounce">
        <i class="fas fa-chevron-down"></i>
      </div>
      
      <div class="second-container">
      </div>

  </section>
</template>

<script>

export default {
  name: 'Intro',
  props: {
  }
}

</script>

<style>
.flex-container {
  height: 100vh;
  background-color: var(--dark);
  display: flex;
}

.first-container {
  width: 50%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 text-align: center;
}

.second-container {
  width: 50%;
  background-image: url("../assets/design2.jpg");
  background-size: cover;
}


.name {
  font-family: 'Lobster Two', cursive;
  font-size: 10rem;
  color: var(--text2);
  font-weight: 300;
  padding: 2rem;
}

.school {
  color: #C1BDBD;
  font-weight: 500;
  padding: 0.5rem;
}

.title {
  color: var(--text2);
  font-weight: 400;
  font-size: 2.5rem;
}

.fa-chevron-down {
  font-size: 5rem;
  color: var(--text2);
}

.bounce {
	position: absolute;
	bottom: 3rem;
	left: 50%;
	animation: bounce 2s infinite;
	-webkit-animation: bounce 2s infinite;
	-moz-animation: bounce 2s infinite;
	-o-animation: bounce 2s infinite;
}

@-webkit-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}	
	40% {-webkit-transform: translateY(-30px);}
	60% {-webkit-transform: translateY(-15px);}
}
 
@-moz-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-moz-transform: translateY(0);}
	40% {-moz-transform: translateY(-30px);}
	60% {-moz-transform: translateY(-15px);}
}
 
@-o-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-o-transform: translateY(0);}
	40% {-o-transform: translateY(-30px);}
	60% {-o-transform: translateY(-15px);}
}
@keyframes bounce {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}

.fa-chevron-down:hover {
  animation-name: bounce;
  -moz-animation-name: bounce;
}




</style>

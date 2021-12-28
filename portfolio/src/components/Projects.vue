<template>
  <section id="projects" class="projects-section">
      <h4 class="projects-subtitle">PORTFOLIO</h4>
      <h3 class="projects-title">Personal Projects</h3>

      <div class="collection">
            <a class="collection-item">
                <div class="collection-content">
                    <h4 class="collection-title">GG.15</h4>
                    <h5 class="collection-subtitle">Displays league of legends account information</h5>
                </div>
                <img src="../assets/gg.png" alt="" class="collection-image">   
            </a>
            <a class="collection-item">
                <div class="collection-content">
                    <h4 class="collection-title">Project 2</h4>
                    <h5 class="collection-subtitle">Description of Project 2</h5>
                </div>
                <img src="../assets/portfolio-pic-2.jpg" alt="" class="collection-image">
            </a>
            <a class="collection-item">
                <div class="collection-content">
                    <h4 class="collection-title">Project 3</h4>
                    <h5 class="collection-subtitle">Description of Project 3</h5>
                </div>
                <img src="../assets/portfolio-pic-3.jpg" alt="" class="collection-image">
            </a>
            <a class="collection-item">
                <div class="collection-content">
                    <h4 class="collection-title">Project 4</h4>
                    <h5 class="collection-subtitle">Description of Project 4</h5>
                </div>
                <img src="../assets/portfolio-pic-4.jpg" alt="" class="collection-image">
            </a>
            <a class="collection-item">
                <div class="collection-content">
                    <h4 class="collection-title">Project 5</h4>
                    <h5 class="collection-subtitle">Description of Project 5</h5>
                </div>
                <img src="../assets/portfolio-pic-5.jpg" alt="" class="collection-image">
            </a>
            <a class="collection-item">
                <div class="collection-content">
                    <h4 class="collection-title">Project 6</h4>
                    <h5 class="collection-subtitle">Description of Project 6</h5>
                </div>
                <img src="../assets/portfolio-pic-6.jpg" alt="" class="collection-image">
            </a>
      </div>
  </section>
</template>

<script>
export default {
name: "Projects",
}
</script>

<style>
.projects-section {
    background-color: var(--light);
    text-align: center;
    padding-bottom: 6rem;
}

.projects-title {
    font-weight: 600;
    margin-bottom: 4rem;
}
.projects-subtitle {
    color: var(--red);
    padding-top: 3rem;
}

.collection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.collection-item {
    width: 25vw;
    margin: 2rem;
    position: relative;
    transition: all 0.3s;
    overflow: hidden;
}

.collection-content {
    position: absolute;
    z-index: 1;
    bottom: 10%;
    position: absolute;
    z-index: 1;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
}

.collection-title {
    color: var(--red);
    margin-bottom: 1rem;
    font-weight: 700;
}

.collection-subtitle {
    color: var(--text2);
    font-weight: 600;
}

.collection-image {
    filter:brightness(40%);
    width: 100%;
    height: 100%;
    transition: all 0.3s;
}

.collection-item:hover .collection-content{
    display: none;
}

.collection-item:hover .collection-image {
    filter:brightness(100%);
    transform: scale(1.25);
}




</style>
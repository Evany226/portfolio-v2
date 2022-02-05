<template>
    <section id="skills" class="skills-section">
        <h3 class="skills-title" data-aos="zoom-in-right" data-aos-duration="500" data-aos-once="true">Skills</h3>
        <h4 class="skills-desc" data-aos="fade-in" data-aos-duration="500" data-aos-once="true">Below are some of my skills and areas of expertise</h4>
        <div class="skills-container">
            <div class="arrow-container">
                <i id="left-arrow" class="fas fa-chevron-down"></i>
            </div>
            <div class="skills-container-row">
                <div class="skills-container-column" data-aos="flip-up" data-aos-duration="1000" data-aos-once="true">
                    <img class="skills-image" src="../assets/html icon.png" >
                    <h4 class="skills-container-subtitle">HTML + CSS + JS</h4>
                    <h5 class="skills-container-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
                </div>

                <div class="skills-container-column" data-aos="flip-up" data-aos-duration="1000" data-aos-once="true">
                    <img class="skills-image" src="../assets/vue icon.png">
                    <h4 class="skills-container-subtitle">Vue JS</h4>
                    <h5 class="skills-container-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
                </div>

                <div class="skills-container-column" data-aos="flip-up" data-aos-duration="1000" data-aos-once="true">
                    <img class="skills-image" src="../assets/mobile icon.png">
                    <h4 class="skills-container-subtitle">Mobile-friendly</h4>
                    <h5 class="skills-container-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
                </div>
            </div>

            <div class="arrow-container">
                <i id="right-arrow" class="fas fa-chevron-down"></i>
            </div>

        </div>
    </section>
</template>

<script>
export default {
  name:  'Skills',

}
</script>

<style>
.skills-section {
    background-color: var(--main);
    display: flex;
    flex-direction: column;
    
}

.skills-title {
    color: var(--text2);
    text-align: center;
    font-weight: 600;
    margin-top: 5rem;
}

.skills-desc {
    text-align: center;
    margin-bottom: 8rem;
    margin-top: 2rem;
    font-weight: 500;
    color: var(--text2);

}

.skills-container {
    height: 70%;
    display: flex;
    justify-content: center;
    margin-bottom: 10rem;
}

.arrow-container {
    width: 12.5%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#left-arrow {
    transform: rotate(90deg);
}

#right-arrow {
   transform: rotate(-90deg); 
}

.skills-container-row {
    background-color: var(--light);
    width: 75%;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.skills-container-column {
    background-color: var(--light);
    width: 33.33333%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.skills-image {
    margin-top: 7rem;
    width: 35%;
}

.skills-container-subtitle {
    font-weight: 700;
    color: var(--text);
    margin: 3rem;
}       

.skills-container-desc {
    max-width: 80%;
    font-weight: 400;
    color: var(--text);
    margin-bottom: 7rem;
}




</style>
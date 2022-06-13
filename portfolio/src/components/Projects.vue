<template>
  <section id="projects" class="projects-section">
      <h4 class="projects-subtitle" data-aos="fade-in" data-aos-duration="500" data-aos-delay="250" data-aos-once="true">PORTFOLIO</h4>
      <h3 class="projects-title" data-aos="fade-int" data-aos-duration="1000" data-aos-once="true">Personal Projects</h3>

      <div class="collection">
            <Modal v-show="isModalVisible"
            @close="closeModal" :data="modalData">
                <template v-slot:header>
                </template>
            </Modal>
            <a class="collection-item" v-for="proj in projArr" :key="proj.projName" data-aos="slide-up" data-aos-duration="500" data-aos-once="true" @click="showModal(proj)" >
                <div class="collection-content">
                    <h4 class="collection-title">{{proj.projName}}</h4>
                    <h5 class="collection-subtitle">{{proj.projDesc}}</h5>
                </div>
                <img :src="proj.projImg" alt="" class="collection-image">
            </a>


<!--            <a class="collection-item" data-aos="slide-up" data-aos-duration="1000" data-aos-once="true" @click="showModal1">
                <div class="collection-content">
                    <h4 class="collection-title">Project 2</h4>
                    <h5 class="collection-subtitle">Description of Project 2</h5>
                </div>
                <img src="../assets/portfolio-pic-2.jpg" alt="" class="collection-image">
            </a>

            <a class="collection-item" data-aos="slide-up" data-aos-duration="1500" data-aos-once="true" @click="showModal">
                <div class="collection-content">
                    <h4 class="collection-title">Project 3</h4>
                    <h5 class="collection-subtitle">Description of Project 3</h5>
                </div>
                <img src="../assets/portfolio-pic-3.jpg" alt="" class="collection-image">
            </a>

            <a class="collection-item" data-aos="slide-up" data-aos-duration="500" data-aos-once="true" @click="showModal">
                <div class="collection-content">
                    <h4 class="collection-title">Project 4</h4>
                    <h5 class="collection-subtitle">Description of Project 4</h5>
                </div>
                <img src="../assets/portfolio-pic-4.jpg" alt="" class="collection-image">
            </a>

            <a class="collection-item" data-aos="slide-up" data-aos-duration="1000" data-aos-once="true"> 
                <div class="collection-content">
                    <h4 class="collection-title">Project 5</h4>
                    <h5 class="collection-subtitle">Description of Project 5</h5>
                </div>
                <img src="../assets/portfolio-pic-5.jpg" alt="" class="collection-image">
            </a>

            <a class="collection-item" data-aos="slide-up" data-aos-duration="1500" data-aos-once="true">
                <div class="collection-content">
                    <h4 class="collection-title">Project 6</h4>
                    <h5 class="collection-subtitle">Description of Project 6</h5>
                </div>
                <img src="../assets/portfolio-pic-6.jpg" alt="" class="collection-image">
            </a>

            <a class="collection-item" data-aos="slide-up" data-aos-duration="500" data-aos-once="true">
                <div class="collection-content">
                    <h4 class="collection-title">Project 7</h4>
                    <h5 class="collection-subtitle">Description of Project 7</h5>
                </div>
                <img src="../assets/portfolio-pic-7.jpg" alt="" class="collection-image">
            </a>

            <a class="collection-item" data-aos="slide-up" data-aos-duration="1000" data-aos-once="true">
                <div class="collection-content">
                    <h4 class="collection-title">Project 8</h4>
                    <h5 class="collection-subtitle">Description of Project 8</h5>
                </div>
                <img src="../assets/portfolio-pic-8.jpg" alt="" class="collection-image">
            </a>

            <a class="collection-item" data-aos="slide-up" data-aos-duration="1500" data-aos-once="true">
                <div class="collection-content">
                    <h4 class="collection-title">Project 9</h4>
                    <h5 class="collection-subtitle">Description of Project 9</h5>
                </div>
                <img src="../assets/portfolio-pic-9.jpg" alt="" class="collection-image">
            </a>    -->
      </div>     
  </section> 
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
name: "Projects",
data() {
    return {
        projArr: [
            {
                projName: "GG.15",
                projDesc: "Displays league of legends account information",
                projImg: "../assets/portfolio-pic-2.jpg",
            },
            {
                projName: "Project 2",
                projDesc: "Description of Project 2",
                projImg: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            },
            {
                projName: "Project 3",
                projDesc: "Description of Project 3",
                projImg: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80",
            },
            {
                projName: "Project 4",
                projDesc: "Description of Project 4",
                projImg: "https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            },
            {
                projName: "Project 5",
                projDesc: "Description of Project 5",
                projImg: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            },
            {
                projName: "Project 6",
                projDesc: "Description of Project 6",
                projImg: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            },
            {
                projName: "Project 7",
                projDesc: "Description of Project 7",
                projImg: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            },
            {
                projName: "Project 8",
                projDesc: "Description of Project 8",
                projImg: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            },
            {
                projName: "Project 9",
                projDesc: "Description of Project 9",
                projImg: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            },
        ],
        isModalVisible: false,
        modalData: null,
    }
},
methods: {
      showModal(data) {
        this.isModalVisible = true; 
        this.modalData = data;
      },
      closeModal() {
        this.isModalVisible = false;
      },
},
components: {
    Modal,
},

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
<template>
  <section id="projects" class="projects-section">
    <h4
      class="projects-subtitle"
      data-aos="fade-in"
      data-aos-duration="500"
      data-aos-delay="250"
      data-aos-once="true"
    >
      PORTFOLIO
    </h4>
    <h3
      class="projects-title"
      data-aos="fade-int"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      Personal Projects
    </h3>

    <div class="collection">
      <a
        class="collection-item"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-once="true"
        @click="showModal1"
      >
        <div class="collection-content">
          <h4 class="collection-title">DragNDrop</h4>
          <h5 class="collection-subtitle">
            A project management application to help organize your workflow and
            track tasks. Created using React, Express.js, Node.js, Sequelize and
            PostgreSQL
          </h5>
          <div class="view-button-wrapper">
            <a
              class="view-button"
              href="https://dragndrop226.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
            <a
              class="view-button"
              href="https://github.com/Evany226/Drag-and-Drop-v2"
              target="_blank"
              rel="noopener noreferrer"
              >View on Github</a
            >
          </div>
        </div>
        <img src="../assets/proj1.jpg" alt="" class="collection-image" />
      </a>

      <a
        class="collection-item"
        data-aos="slide-up"
        data-aos-duration="500"
        data-aos-once="true"
        @click="showModal"
      >
        <div class="collection-content">
          <h4 class="collection-title">Inkwell</h4>
          <h5 class="collection-subtitle">
            A note taking app made to be simple and efficient. Created using
            React, Typescript, Tailwind and Firebase
          </h5>
          <div class="view-button-wrapper">
            <a
              class="view-button"
              href="https://inkwell1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
            <a
              class="view-button"
              href="https://github.com/Evany226/Inkwell"
              target="_blank"
              rel="noopener noreferrer"
              >View on Github
            </a>
          </div>
        </div>
        <img src="../assets/inkwell.jpg" alt="" class="collection-image" />
      </a>

      <a
        class="collection-item"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-once="true"
        @click="showModal1"
      >
        <div class="collection-content">
          <h4 class="collection-title">QXChange</h4>
          <h5 class="collection-subtitle">
            A forums app created for a 24 hr hackathon to help students with
            homework. Created using the MERN Stack (MongoDB, Express.js, React,
            Node.js)
          </h5>
          <div class="view-button-wrapper">
            <a
              class="view-button"
              href="https://hackru23-gb9a.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
            <a
              class="view-button"
              href="https://github.com/ZhangTerrence/qxchange"
              target="_blank"
              rel="noopener noreferrer"
              >View on Github
            </a>
          </div>
        </div>
        <img src="../assets/qxchange.jpg" alt="" class="collection-image" />
      </a>

      <a
        class="collection-item"
        data-aos="slide-up"
        data-aos-duration="1500"
        data-aos-once="true"
        @click="showModal"
      >
        <div class="collection-content">
          <h4 class="collection-title">Kairos</h4>
          <h5 class="collection-subtitle">
            A forums app created for a 24 hr hackathon to help students with
            homework. Created using the MERN Stack (MongoDB, Express.js, React,
            Node.js)
          </h5>
          <div class="view-button-wrapper">
            <a
              class="view-button"
              href="https://github.com/ZhangTerrence/qxchange"
              target="_blank"
              rel="noopener noreferrer"
              >View on Github
            </a>
          </div>
        </div>
        <img src="../assets/kairos.jpg" alt="" class="collection-image" />
      </a>

      <a
        class="collection-item"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div class="collection-content">
          <h4 class="collection-title">Project 5</h4>
          <h5 class="collection-subtitle">Description of Project 5</h5>
        </div>
        <img
          src="../assets/portfolio-pic-5.jpg"
          alt=""
          class="collection-image"
        />
      </a>

      <a
        class="collection-item"
        data-aos="slide-up"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="collection-content">
          <h4 class="collection-title">Project 6</h4>
          <h5 class="collection-subtitle">Description of Project 6</h5>
        </div>
        <img
          src="../assets/portfolio-pic-6.jpg"
          alt=""
          class="collection-image"
        />
      </a>

      <a
        class="collection-item"
        data-aos="slide-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div class="collection-content">
          <h4 class="collection-title">Project 7</h4>
          <h5 class="collection-subtitle">Description of Project 7</h5>
        </div>
        <img
          src="../assets/portfolio-pic-7.jpg"
          alt=""
          class="collection-image"
        />
      </a>

      <a
        class="collection-item"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div class="collection-content">
          <h4 class="collection-title">Project 8</h4>
          <h5 class="collection-subtitle">Description of Project 8</h5>
        </div>
        <img
          src="../assets/portfolio-pic-8.jpg"
          alt=""
          class="collection-image"
        />
      </a>

      <a
        class="collection-item"
        data-aos="slide-up"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="collection-content">
          <h4 class="collection-title">Project 9</h4>
          <h5 class="collection-subtitle">Description of Project 9</h5>
        </div>
        <img
          src="../assets/portfolio-pic-9.jpg"
          alt=""
          class="collection-image"
        />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projArr: [
        {
          projName: "GG.15",
          projDesc: "Displays league of legends account information",
          projImg: "../assets/newpic.jpg",
        },
        {
          projName: "Project 2",
          projDesc: "Description of Project 2",
          projImg:
            "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          projName: "Project 3",
          projDesc: "Description of Project 3",
          projImg:
            "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80",
        },
        {
          projName: "Project 4",
          projDesc: "Description of Project 4",
          projImg:
            "https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        },
        {
          projName: "Project 5",
          projDesc: "Description of Project 5",
          projImg:
            "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          projName: "Project 6",
          projDesc: "Description of Project 6",
          projImg:
            "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          projName: "Project 7",
          projDesc: "Description of Project 7",
          projImg:
            "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          projName: "Project 8",
          projDesc: "Description of Project 8",
          projImg:
            "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        },
        {
          projName: "Project 9",
          projDesc: "Description of Project 9",
          projImg:
            "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
      ],
      isModalVisible: false,
      modalData: null,
    };
  },
};
</script>

<style>
a {
  color: inherit;
}

.fa-link {
  font-size: 1rem;
}

.fa-github {
  font-size: 1rem;
}

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
  width: 27.5%;
  height: 30rem;
  margin: 2rem;
  position: relative;
  transition: all 0.3s;
  overflow: hidden;
}

.collection-content {
  position: absolute;
  z-index: 1;
  position: absolute;
  z-index: 1;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%);
  width: 90%;
}

.view-button-wrapper {
  margin-top: 3rem;
}

.view-button {
  padding: 1rem 1.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  margin: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #fff;
  cursor: pointer;
  text-decoration: none;
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
  filter: brightness(40%);
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}
</style>

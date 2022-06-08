<template>
    <transition name="modal-fade">
    <div class="modal-backdrop" @click=close>
        <div class="modal"
            role="dialog"
            aria-labelledby="modalTitle"
            aria-describedby="modalDescription"
            @click.stop="">

        <header class="modal-header" id="modalTitle">
            <slot name="header">
                <h3>{{projArr.projName}}</h3>
            </slot>
        </header>
        

        <div class="modal-image">
            <slot name="image">
                <img src="../assets/gg15.png" id="modal-img">
            </slot>
        </div>

        <section class="modal-body" id="modalDescription">
            <slot name="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </slot>
        </section>

        <footer class="modal-footer">
            <slot name="footer">
            </slot>
            <button
            type="button"
            class="btn-green"
            @click="close"
            aria-label="Close modal"
          >
            Close Modal
          </button>
        </footer>
        
        </div>
    </div>
    </transition>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
    props: ["projArr"],
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: var(--text2);
    box-shadow: 2px 2px 15px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 75%;
    max-height: 70%;
  }

  .modal-header,
  .modal-footer {
    padding: 2rem;
    display: flex;
  }

  .modal-header {
    font-size: 3rem;
    position: relative;
    color: var(--red);
    justify-content: space-between;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .modal-footer {
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 5rem 2rem;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }

  #modal-img {
      width: 50vw;
  }

  .modal-image {
      padding: 3rem;
      display: flex;
      justify-content: center;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--red);
    background: transparent;
  }

  .btn-green {
    color: white;
    background: var(--red);
    border: 1px solid var(--red);
    border-radius: 0.25rem;
    font-size: 2rem;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }

    .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .3s ease;
  }
</style>
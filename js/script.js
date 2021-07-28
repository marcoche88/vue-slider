Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        activeNumber: 0,
        images: [
            "./img/image1.jpg",
            "./img/image2.jpg",
            "./img/image3.jpg",
            "./img/image4.jpg"
        ],
    },
    methods: {
        isActive(index) {
            return (index === this.activeNumber) ? 'active' : '';
        },
        slideRight() {
            this.activeNumber = (this.activeNumber === this.images.length - 1) ? 0 : this.activeNumber + 1;
        },
        slideLeft() {
            this.activeNumber = (this.activeNumber === 0) ? this.images.length - 1 : this.activeNumber - 1;
        },
    },
});
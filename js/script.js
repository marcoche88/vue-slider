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
            return (index === this.activeNumber) ? 'active' : ''
        },
    },
});
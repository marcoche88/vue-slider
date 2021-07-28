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
        // verifica se l'indice dell'array corrisponde con quello del numero attivo
        isActive(index) {
            return (index === this.activeNumber) ? 'active' : '';
        },
        // fa scorrere lo slider a destra fino alla lunghezza massima dell'array per poi riiniziare da 0
        slideRight() {
            this.activeNumber = (this.activeNumber === this.images.length - 1) ? 0 : this.activeNumber + 1;
        },
        // fa scorrere lo slider a sinistra fino allo 0 per poi riiniziare dalla lunghezza massima dell'array 
        slideLeft() {
            this.activeNumber = (this.activeNumber === 0) ? this.images.length - 1 : this.activeNumber - 1;
        },
        changeImage(index) {
            this.activeNumber = index;
        },
    },
});
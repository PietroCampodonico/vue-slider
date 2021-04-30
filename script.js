const app = new Vue ({
    
    el: "#root",
    data: {
        images: [
            "img/farfalla_1280.jpg",
            "img/mandorlo_1280.jpg",
            "img/mare1280.jpg",
            "img/occhio_1280.jpg",
            "img/tulipani_1280.jpg",
        ],
        activeImage: 0,
    },
    methods: {
        slideRight: function (){
            if (this.activeImage == this.images.length-1) {
                return this.activeImage = 0
            } else {
                return this.activeImage++
            }
        },

        slideLeft: function () {

            if (this.activeImage == 0) {
                return this.activeImage = 4
            } else {
                return this.activeImage--
            }
        },

        onDotClick: function() {
            return index = this.activeImage

        }
    }
})
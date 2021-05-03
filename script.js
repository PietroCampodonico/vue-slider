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
        dotStyles: "",
        reelMessage: "Start Showreel",
        stopReel: false,
    },

    mounted() {
        document.querySelector("#caroselContainer").focus().innerHTML;
    },

    methods: {
        slideRight: function (){
            if (this.activeImage == this.images.length - 1) {
                return this.activeImage = 0
            } else {
                return this.activeImage++
            }
        },

        slideLeft: function () {
            if (this.activeImage == 0) {
                return this.activeImage = this.images.length - 1
            } else {
                return this.activeImage--
            }
        },

        onDotClick: function(index) {
            this.activeImage = index
            return this.activeImage
        },

        dotStyleSetter(index) {
            if (this.activeImage == index) {
                return this.dotStyles = "activeDot"
            }
        },

        autoReel: function () {
            setInterval(this.slideRight, 3000);
        },  
    }   
})  


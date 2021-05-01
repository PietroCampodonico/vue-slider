let automation = setInterval(autoReel, 3000);

function autoReel() {
    return slideRight() {
        if (this.activeImage == this.images.length - 1) {
            return this.activeImage = 0
        } else {
            return this.activeImage++
        }
    },

}
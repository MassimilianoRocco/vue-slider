const { createApp } = Vue

createApp({

    data() {
        return {
            index:0,
            autoCheck: true,
            timer: null,
            slides: [
                {
                    image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ]

        }
    },
    methods: {
        propShow(index) {
            if(index == this.index){
                return "active";
            }else{
                return "";
            }
        },
        propShowThumb(index) {
            if(index == this.index){
                return "thumb activeThumb";
            }else{
                return "thumb opacityLow";
            }
        },
        showNextIndexImg(){
            this.index ++;
            if(this.index>4){
                this.index=0;
            }
        },
        showPrevIndexImg(){
            this.index --;
            if(this.index<0){
                this.index = 4;
            }
        },
        setAsIndex(index){
            this.index = index;
        },
        autoPlay(){
            if(this.autoCheck == false){
                console.log("Sono nell'IF")
                clearInterval(this.timer);
                this.autoCheck=true;
            }
            else if(this.autoCheck==true){
                console.log("Sono nell'ELSE")
                this.autoCheck=false;
                this.timer = setInterval(this.showNextIndexImg, 3000)
            }     
        }
       
    },
    mounted() {
        
    }

}).mount('#app')
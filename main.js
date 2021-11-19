var app = new Vue({
    el:'#root',
       data:{
           messaggio:'PRIMO ESERCIZIO CON VUEJS',
            visibility:'none',
               foto:'https://res.cloudinary.com/practicaldev/image/fetch/s--ON6smotD--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/xa7en7o59vtxdhgte92u.jpeg'
       },

       methods:{
            show:function(){
                if(this.visibility==='none'){
                        this.visibility='show'
                } else {
                    this.visibility='none'
                }
            } 
       }
})

const __renderPlaceholders = {

    render: ( placeholder ) => {
        $(".helperComplement").remove();

        if(placeholder ===  'instagram') __renderPlaceholders.methods.renderInsta();
        if(placeholder ===  'novidades') __renderPlaceholders.methods.renderNovidades();

    },
    
    methods: {
        renderInsta: function(){
          const  options = {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            infinite: false
          }
           setTimeout(()=>{
            $('.e-instagram .e-image:not(.slick-initialized, .slick-dots)').slick(options);
           }, 1000)


        },
        renderSlick: function(){

        },
        renderNovidades: function(){
            const options = {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                autoplay: false,
                infinite: false
              }
            $('.e-novidades .shelf > ul:not(.slick-initialized, .slick-dots)').slick(options);
        }
   
    }
}

export default  __renderPlaceholders;
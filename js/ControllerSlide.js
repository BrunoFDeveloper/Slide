function ControllerSlide(){
 var _this = this;
 // elementos de configuracao
 _this.element = $('.hidden-window');
 _this.elementChild = _this.element.find('.slide-note');
 _this.elementArrowNext = $('.arrow-control.arrow-next');
 _this.elementArrowPrevius = $('.arrow-control.arrow-previus');
 //end
 var itens = _this.elementChild.length;
 var current = itens - itens;

   _this.start = function() {
   _this.events();
   }
   _this.events = function(){
   _this.elementArrowNext.on('click', function(){
    _this.nextSlide();
   });
   _this.elementArrowPrevius.on('click', function(){
    _this.previusSlide();
   });
   $(".content-bullets span").on('click', function(){
    var dataThis = $(this).data();
    $('.content-bullets span').removeClass('active');
    $(this).addClass('active');
    _this.bulletsTo(dataThis.slide);
    current = dataThis.slide;
   });
   }
   _this.nextSlide = function(){
   if (current >= (itens - 1) ) {
    _this.element.find('.slide-note').removeClass('active').eq(0).addClass('active');
    current = 0;
   } else {
    _this.element.find('.slide-note.active').removeClass('active').next().addClass('active');
    current++;
   }
   _this.bulletsReload(current);
   }
   _this.previusSlide = function(){
   if (current == 0) {
    _this.elementChild.removeClass("active");
    _this.element.find('.slide-note').last().addClass('active');
    current = (itens - 1);
   } else {
    _this.element.find('.slide-note.active').removeClass('active').prev().addClass('active');
    current--;
   }
   _this.bulletsReload(current);
   }
   _this.bulletsReload = function(active){
   $(".content-bullets span").removeClass('active');
   $(".content-bullets span").eq(active).addClass('active');
   }
   _this.bulletsTo = function(position){
   _this.elementChild.removeClass('active');
   _this.elementChild.each(function(){
    _this.elementChild.eq(position).addClass('active');
   });
   }
}

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') onmouseover(){
    this.render.setStyle(this.element.nativeElement,'border-bottom','4px solid')
    this.render.setStyle(this.element.nativeElement,'transition','0.5s')
    
    //console.log('Entro al Hover');
  }
  
  @HostListener('mouseleave') onmouseout(){ 
    this.render.removeStyle(this.element.nativeElement,'border-bottom' )
    this.render.setStyle(this.element.nativeElement,'transition','0.5s')
   // console.log('Salio del Hover');
  }
}

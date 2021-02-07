import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  colors: string[] = ['red', 'yellow', 'blue', 'seagreen', 'tan', 'orange'];

  @HostListener('click') onMouseClick() {
    let index = Math.floor(Math.random() * this.colors.length);
    this.changeColor(this.colors[index]);
  }

  constructor(
    private el: ElementRef
  ) {
    this.changeColor('yellow');
  }

  changeColor(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @Input() set appHighlight(color: string) {
    this.changeColor(color)
  }
}

import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
@Directive({
  selector: 'app-my-look'
})
export class MyLookDirective  implements OnInit{

  constructor() { }
ngOnInit() {}
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.componet.html'
})
export class PhotoComponet {
  @Input () description = '';
  @Input () url = '';
}

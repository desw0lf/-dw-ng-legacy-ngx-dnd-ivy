import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableDirective } from './directives/ngx-draggable.directive';
import { DroppableDirective } from './directives/ngx-droppable.directive';
import { DragHandleDirective } from './directives/ngx-drag-handle.directive';
import { ContainerComponent } from './components/container/container.component';
import { ItemComponent } from './components/item/item.component';
import { DrakeStoreService } from './services/drake-store.service';
import { DragulaModule } from 'ng2-dragula';

const components = [ContainerComponent, ItemComponent];
const directives = [DraggableDirective, DroppableDirective, DragHandleDirective];

@NgModule({
  imports: [CommonModule, DragulaModule.forRoot()],
  declarations: [...components, ...directives],
  exports: [...components, ...directives]
})
export class NgxDnDModule {
  static forRoot(): ModuleWithProviders<NgxDnDModule> {
    return {
      ngModule: NgxDnDModule,
      providers: [DrakeStoreService]
    };
  }
}

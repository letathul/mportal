import { CommonModule } from '@angular/common';
import { Job } from '../../job/job.model';
import { CamelPipe } from '../pipe/camel.pipe';
import { SamlpeDataService } from './../service/samlpe-data.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-jboxitem',
  standalone: true,
  imports: [CamelPipe, CommonModule],
  templateUrl: './jboxitem.component.html',
  styleUrl: './jboxitem.component.css',
})
export class JboxitemComponent {
  @Input() job: Job | undefined;
  @Input() isAdmin: boolean = false;

  @Output() notifyParent: EventEmitter<{ value: string }> = new EventEmitter();

  DeletethisItem() {
    this.notifyParent.emit({ value: '' + this.job?.id });
  }
}

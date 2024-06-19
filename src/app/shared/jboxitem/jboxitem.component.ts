import { Job } from '../../job/job.model';
import { CamelPipe } from '../pipe/camel.pipe';
import { SamlpeDataService } from './../service/samlpe-data.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jboxitem',
  standalone: true,
  imports: [CamelPipe],
  templateUrl: './jboxitem.component.html',
  styleUrl: './jboxitem.component.css',
})
export class JboxitemComponent {
  @Input() job: Job | undefined;
}

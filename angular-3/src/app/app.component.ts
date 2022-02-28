import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Construction } from './model/construction';
import { ConstructionService } from './service/construction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-3';

  list$: Observable<Construction[]> = this.constructionService.getAll();


  constructor(
    private constructionService: ConstructionService,
    private router: Router
  ) { }
  onDelete(c: Construction): void {
    this.constructionService.delete(c).subscribe(
      construction => this.list$ = this.constructionService.getAll()
    );
  }

}

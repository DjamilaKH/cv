import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cv } from 'src/app/models/cv.model';
import { CvService } from 'src/app/service/cv.service';

@Component({
  selector: 'app-listcv',
  templateUrl: './listcv.component.html',
  styleUrls: ['./listcv.component.css']
})
export class ListcvComponent {
  Cv!: Cv[];

  constructor(private cvService: CvService,
    private router:Router) {}

  ngOnInit() {
    this.fetchCVs();
  }

  fetchCVs(): void {
    this.cvService.getAll()
      .subscribe({
        next: (data) => {
          this.Cv = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  goToCv(cv: Cv){
    this.router.navigate(['/cv', cv.id])
   }
  }



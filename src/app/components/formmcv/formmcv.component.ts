import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from 'src/app/models/cv.model';
import { CvService } from 'src/app/service/cv.service';
@Component({
  selector: 'app-formmcv',
  templateUrl: './formmcv.component.html',
  styleUrls: ['./formmcv.component.css']
})
export class FormmcvComponent implements OnInit {
  @Input() cv!:Cv
  cvForm!: FormGroup;
  isAddCv!: boolean;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private cvService: CvService){
      this.cvForm = this.formBuilder.group({
        nom: '' ,
        prenom: '',
        email:  '',
        telephone:'',
        titCV:'',
        profilCv: '',
        objecCarri:'',
      });
       } 

      //  constructor(private formBuilder: FormBuilder,
      //   private router: Router,
      //   private cvService: CvService){
      //     this.cvForm = this.formBuilder.group({
      //       nom: ([null, Validators.required]) ,
      //       prenom: ([null, Validators.required]),
      //       email:   ([null, [Validators.required, Validators.email]]),
      //       telephone:([null, [Validators.required, this.validateTelephoneFormat]]),
      //       titCV: ([null, Validators.required]),
      //       profilCv: ([null, Validators.required]),
      //       objecCarri:([null, [Validators.required]]),
      //     });
      //      } 
  ngOnInit() {
    this.isAddCv=this.router.url.includes('add')
  }
  validateTelephoneFormat(control: AbstractControl): { [key: string]: boolean } | null {
    const phoneNumberPattern = /^\d{2}-\d{3}-\d{3}$/;
    if (control.value && !phoneNumberPattern.test(control.value)) {
      return { 'telephoneFormat': true };
    }
    return null;
  }  
  Submit() {
    if (this.isAddCv) {
      this.cvService.create(this.cv)   
      .subscribe((cv:Cv)=>this.router.navigate(['/list']))      
    }
    else {
      this.cvService.update(this.cv, this.cv.id).subscribe(()=>this.router.navigate(['/cv',this.cv.id]),
      ); 
  } 
    }

     // *****edit  ({
      //   next: (cv) => {
      //     console.log(cv);
      //   },
      //   error: (e) => console.error(e)
      // })
      
    // ****** add {
      //   next:(res)=>{
      //     console.log(res);

          
      //     this.router.navigate(['/']);

      //   },
      //   error: (e) => console.error(e)
      // }
  
}

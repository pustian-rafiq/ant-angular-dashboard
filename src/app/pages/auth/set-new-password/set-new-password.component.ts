import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.scss'],
})
export class SetNewPasswordComponent {
  // productForm!: FormGroup;

  productForm: FormGroup = new FormGroup({
    mobile: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      mobile: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.productForm.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    console.log(this.productForm.value);
    if (this.productForm.invalid) {
      return;
    }
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    }
  }
}

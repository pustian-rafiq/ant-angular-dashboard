import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent {
  isVisible = false;
  showOtpComponent = true;
  focusToFirstElementAfterValueUpdate: boolean = false;
  @ViewChild('NgOtpInputComponent', { static: false })
  ngOtpInput!: NgOtpInputComponent;
  // @ViewChild('valInput')
  // private elementRef!: ElementRef;
  config: NgOtpInputConfig = {
    allowNumbersOnly: false,
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
  };

  constructor(private elementRef: ElementRef) {
    console.log('click');
  }
  ngAfterViewChecked() {
    console.log(this.elementRef.nativeElement.innerHTML);
    setTimeout(() => {
      this.elementRef.nativeElement.focus();
    }, 1000);
    // this.elementRef.nativeElement.focus();
  }
  onOtpChange(otp: any) {
    // this.otp = otp;
    console.log(otp);
  }

  showModal(): void {
    this.isVisible = true;
    this.showOtpComponent = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

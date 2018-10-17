import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-rective-form',
  templateUrl: './rective-form.component.html',
  styleUrls: ['./rective-form.component.css']
})
export class RectiveFormComponent implements OnInit {

  contactForm: FormGroup;

  message = new ReactiveMessage();
  toys = ['LEGO mindstorm', 'Dash i Dot', 'Scottie Go', 'BeCreo', 'żadne z powyższych'];


  constructor() { }

  ngOnInit() {
      this.contactForm = new FormGroup({
        topic: new FormControl(null, Validators.required),
        message: new FormControl(null, [ Validators.required, Validators.minLength(50)]),
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        toys: new FormControl(this.toys[0]),
        like: new FormControl(null),
        questions: new FormArray([new FormControl(null), new FormControl(null)], this.questionsValidator)

      });
    }

    addQuestion() {
      const arr = <FormArray>this.contactForm.get('questions');
      arr.push(new FormControl(null));
    }

    questionsValidator(control: AbstractControl): ValidationErrors {
        const arr = <[string]>control.value;
        if (arr.includes('nic')) {
          return {'forbbidentoy': true};
        }
    }

    onSubmit() {
console.log(this.contactForm);
this.message.topic = this.contactForm.value.topic; // this.contactForm.get('topic').value
this.message.message = this.contactForm.value.message;
this.message.name = this.contactForm.value.name;
this.message.email = this.contactForm.value.email;
this.message.toys = this.contactForm.value.toys;
this.message.like = this.contactForm.value.like;
}

  onReset() {
this.contactForm.reset({
  topic: 'Fajne materiały',
  toy: this.toys[2]
});
  }

}

class ReactiveMessage {
  constructor(
    public topic?: string,
    public message?: string,
    public name?: string,
    public email?: string,
    public toys = 'Dash i Dot',
    public like?: boolean
     ) {}






}

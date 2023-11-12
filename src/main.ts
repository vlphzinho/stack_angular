import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
   <header>
     <h1>Hello from {{ name }}!</h1>
    </header>
    <section>
      <header>
        <h2>Poster</h2>
      </header>
       <article> 
       <header>
        <h3>Poste #1</h3>
      </header>
         <p>
         
         </p>
       </article>
    </section>
    
    
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

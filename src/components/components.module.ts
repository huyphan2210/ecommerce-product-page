import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Header } from "./header/header.comonent";
import { Main } from "./main/main.component";
import { Footer } from "./footer/footer.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Header,
    Main,
    Footer
  ],
  exports: [
    Header,
    Main,
    Footer
  ]
})

export class ComponentsModule {}

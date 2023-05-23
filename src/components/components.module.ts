import { NgModule } from "@angular/core";

import { Header } from "./header/header.comonent";
import { Main } from "./main/main.component";
import { Footer } from "./footer/footer.component";

@NgModule({
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

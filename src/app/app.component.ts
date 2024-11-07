import {
  Component,
  OnInit,
  inject,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { CartService } from "./cart/data-access/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent],
})
export class AppComponent implements OnInit {
  title = "ALTEN SHOP";
  cartItemCount: number = 0;
  cartService = inject(CartService);
  
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(cartItems => {
    this.cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  });
  }
}

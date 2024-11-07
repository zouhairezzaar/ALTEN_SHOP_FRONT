
import { Routes } from "@angular/router";
import { CartComponent } from "./features/cart/cart/cart.component";

export const CART_ROUTES: Routes = [
	{
		path: "",
		component: CartComponent,
	},
	{ path: "**", redirectTo: "cart" },
];

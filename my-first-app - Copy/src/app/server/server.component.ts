
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipes/recipe.service'

@Component({
    // selector: 'app-server',
    // templateUrl: './server.component.html'
    // //selector: 'app-recipe-detail',
    // //templateUrl: '../recipes/recipe-detail/recipe-detail.component.html',

    selector: 'app-recipe-detail',
    templateUrl: '../recipes/recipe-detail/recipe-detail.component.html',
    styleUrls: ['../recipes/recipe-detail/recipe-detail.component.css']
})

export class ServerCompnent implements OnInit {
    constructor(private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router) {
    }
    serverID: number = 10;
    serverStatus: string = 'online';
    recipe: Recipe;
    id: number;


    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.recipe = this.recipeService.getRecipe(this.id);
                }
            );
    }
    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe?.ingredients);
    }

    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
        this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }

    GetServerStatus() {
        return this.serverStatus;
    }
}

// import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';

// @Component({
//     selector: 'app-recipe-detail',
//     // templateUrl: './recipe-detail.component.html',
//     //styleUrls: ['./recipe-detail.component.css']
// })
// export class RecipeDetailComponent implements OnInit {
//     recipe: Recipe;
//     //     id: number;

//     //     // constructor(private recipeService: RecipeService,
//     //     //     private route: ActivatedRoute,
//     //     //     private router: Router) {
//     //     // }

//     ngOnInit() { }
//     //         // this.route.params
//     //         //     .subscribe(
//     //         //         (params: Params) => {
//     //         //             this.id = +params['id'];
//     //         //             this.recipe = this.recipeService.getRecipe(this.id);
//     //         //         }
//     //         //     );
//     //     }

//     //     onAddToShoppingList() {
//     //         // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
//     //     }

//     //     onEditRecipe() {
//     //         // this.router.navigate(['edit'], { relativeTo: this.route });
//     //         // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
//     //     }

//     //     onDeleteRecipe() {
//     //         // this.recipeService.deleteRecipe(this.id);
//     //         // this.router.navigate(['/recipes']);
//     //     }

// }

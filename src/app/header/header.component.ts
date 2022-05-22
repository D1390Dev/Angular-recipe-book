import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy{
    private userSub: Subscription;
    isAuthenticated = false;

    // @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }

    constructor(private dataStorageService: DataStorageService,
                private authService: AuthService){}

    ngOnInit(){
        this.userSub = this.authService.user.subscribe({
            next: user => { 
                this.isAuthenticated = !user ? false : true;//(!!user) Otra forma de expresar (!user ? false : true;)
                console.log(!user);
                console.log(!!user);
            }
        });
    }

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
}
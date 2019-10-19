import {Component} from "@angular/core";
var Sqlite = require("nativescript-sqlite");
// backend code
@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    private database: any;
    public people: Array<any>;

    public constructor() {
        this.people = [];
        (new Sqlite("my.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)").then(id => {
                this.database = db;
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }

    public insert() {
        this.database.execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)", ["Nic", "Raboy"]).then(id => {
            console.log("INSERT RESULT", id);
            this.fetch();
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }
    // more backend code
    public fetch() {
        this.database.all("SELECT * FROM people").then(rows => {
            this.people = [];
            for(var row in rows) {
                this.people.push({
                    "firstname": rows[row][1],
                    "lastname": rows[row][2]
                });
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

}
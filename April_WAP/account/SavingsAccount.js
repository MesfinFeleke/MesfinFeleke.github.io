



    "use strict";


    class SavingAccount extends Account {


        constructor(number, interest) {
            super(number);
            this.intrest = interest;
        }

        get Interest() {
            return this._interest;
        }

        set Interest(value) {
            this._interest = value;
        }

        addInterest() {
            this.interest = this._balance * this._interest / 100;
        }
        toString(){
            return "Saving account " + this._number + ": balance " + this._balance + " Interest: " + this._interest;
        }

        endOfMonth(){
            this.addInterest();
            return `Interest added SavingsAccount 2: balance: ${this._balance} interest: ${this.interest}`;
        }

    }







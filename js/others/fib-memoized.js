var collector = {

    memo : [],

    fibonacci : function(n) {
        if (n < 2) {
            return n;
        } else if (!this.memo[n]) {
            this.memo[n] = this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }

        return this.memo[n];
    }
};

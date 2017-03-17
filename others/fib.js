var collector = {
    fibonacci : function(n) {
        if (n < 2) {
            return n;
        } else {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
    }
};

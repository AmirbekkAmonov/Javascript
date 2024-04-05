let logic = {
    and: (a, b) => {
        if (a == 1) {
            if (b == 1) {
                return true;
            } else {
                return false
            }
        } else {
            return false;
        }
    },
    or: (a, b) => {
        if (a == 0) {
            if (b == 0) {
                return false;
            } else {
                return true
            }
        } else {
            return true;
        }
    },
    not: (Boolean) => {
        if (Boolean) return false;
        else return true;
    }
}
console.log(logic.or(0, 0))

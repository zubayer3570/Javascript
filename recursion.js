//this is what happen in recursion


/*
function sum(i) {
    return i + sum(--i)
}

sum(5)
return 5 + sum(4)
           return 4 + sum(3)
                      return 3 + sum(2)
                                 return 2 + sum(1)
                                            return 1 + sum(0)
                                                       return 0 + sum(-1)
                                                                  return -1 + sum(-2)
                                                                              ...............
                                                                                      ...............


it will continue for ever!
so we need a stopping condition.

function sum(i) {
    if (i == 1){
        return 1
    }
    return i + sum(--i)
}

sum(5)
if (i == 1){
    return 1
}
return 5 + sum(4)
            if (i == 1){
                return 1
            }
            return 4 + sum(3)
                        if (i == 1){
                            return 1
                        }
                        return 3 + sum(2)
                                    if (i == 1){
                                        return 1
                                    }
                                    return 2 + sum(1)
                                                if (i == 1){
                                                    return 1
                                                }
in the line 44, it has found the condition true!
so it reurns the value inside the if condition.
after that this happens...

---1st step---
return 5 + sum(4)
            if (i == 1){
                return 1
            }
            return 4 + sum(3)
                        if (i == 1){
                            return 1
                        }
                        return 3 + sum(2)
                                    if (i == 1){
                                        return 1
                                    }
                                    return 2 + 1

---2nd step---
return 5 + sum(4)
            if (i == 1){
                return 1
            }
            return 4 + sum(3)
                        if (i == 1){
                            return 1
                        }
                        return 3 + 3

---3rd step---
return 5 + sum(4)
            if (i == 1){
                return 1
            }
            return 4 + 6

---4th step---
return 5 + 10

---5th step---
return 15

*/

import * as R from "ramda";

declare global {
    interface ObjectConstructor {
        isNull(value: any): boolean;
        isUndefined(value: any): boolean;
        isUndefinedOrNull(value: any): boolean;
        isBlank(value: any): boolean;
    }

    interface Object {
        isEmpty(): boolean;
        isBlank(): boolean;
        let<T, R>(this: T, block: (arg: T) => R): R;
        apply<T>(this: T, block: (this: T) => void): T;
        run<T, R>(this: T, block: (this: T) => R): R;
        also<T>(this: T, block: (arg: T) => void): T;
    }

    interface String { 
        isEmpty(): boolean; isBlank(): boolean;
        inRange(min: number, max: number): boolean;
        containsPattern(pattern: RegExp): boolean;
    }
    interface Number { 
        isEmpty(): boolean; isBlank(): boolean;
        inRange(min: number, max: number): boolean;
        upTo(limit: number): boolean;
        downTo(limit: number): boolean;
        removeMinus(): number;
    }
    interface Boolean { isEmpty(): boolean; isBlank(): boolean; }
    interface Array<T> { isEmpty(): boolean; isBlank(): boolean; }
    interface Map<K, V> { isEmpty(): boolean; isBlank(): boolean; }
    interface Set<T> { isEmpty(): boolean; isBlank(): boolean; }
    interface Date { 
        isEmpty(): boolean; isBlank(): boolean;
        inRange(min: Date, max: Date): boolean;
    }
}

// 1. PROTECTION WRAPPER
function protect(isTested: boolean, func: Function): Function {
    if (!isTested) {
        return function (this: any, ...args: any[]) {
            console.warn(`%c Function ${func.name} is not tested`, 'color: red; font-weight: bold;');
            throw new Error(`Function ${func.name} is not tested`);
        };
    }
    return func;
}

// 2. KOTLIN SCOPE FUNCTIONS (on Object.prototype)
Object.defineProperties(Object.prototype, {
    let: { value: function <T, R>(this: T, block: (arg: T) => R) { return block(this); }, enumerable: false },
    apply: { value: function <T>(this: T, block: (this: T) => void) { block.call(this); return this; }, enumerable: false },
    run: { value: function <T, R>(this: T, block: (this: T) => R) { return block.call(this); }, enumerable: false },
    also: { value: function <T>(this: T, block: (arg: T) => void) { block(this); return this; }, enumerable: false }
});

// 3. GLOBAL UTILITIES
Object.defineProperties(Object, {
    isUndefined: { value: protect(true, (value: any) => value === undefined), enumerable: false },
    isNull: { value: protect(true, (value: any) => value === null), enumerable: false },
    isUndefinedOrNull: { value: protect(true, (value: any) => R.isNil(value)), enumerable: false },
    isBlank: { 
        value: protect(true, (value: any) => {
            if (R.isNil(value)) return true;
            if (typeof value === 'string') return value.trim().length === 0;
            if (Array.isArray(value)) return value.length === 0;
            if (value instanceof Map || value instanceof Set) return value.size === 0;
            if (value instanceof Date) return isNaN(value.getTime());
            if (typeof value === 'object') return Object.keys(value).length === 0;
            return false;
        }), enumerable: false 
    }
});

// 4. ATTACH BLANK/EMPTY TO PROTOTYPES
const addBase = (proto: any, emptyLogic: Function, blankLogic: Function) => {
    Object.defineProperties(proto, {
        isEmpty: { value: protect(true, emptyLogic), enumerable: false },
        isBlank: { value: protect(true, blankLogic), enumerable: false }
    });
};

addBase(String.prototype, function(this: string) { return this.trim().length === 0; }, function(this: string) { return this.trim().length === 0; });
addBase(Number.prototype, function(this: number) { return this.valueOf() === 0; }, function(this: number) { return this.valueOf() === 0; });
addBase(Boolean.prototype, function(this: boolean) { return !this.valueOf(); }, function(this: boolean) { return !this.valueOf(); });
addBase(Array.prototype, function(this: any[]) { return this.length === 0; }, function(this: any[]) { return this.length === 0; });
addBase(Map.prototype, function(this: Map<any, any>) { return this.size === 0; }, function(this: Map<any, any>) { return this.size === 0; });
addBase(Set.prototype, function(this: Set<any>) { return this.size === 0; }, function(this: Set<any>) { return this.size === 0; });
addBase(Date.prototype, function(this: Date) { return isNaN(this.getTime()); }, function(this: Date) { return isNaN(this.getTime()); });
addBase(Object.prototype, function(this: object) { return Object.keys(this).length === 0; }, function(this: object) { return Object.keys(this).length === 0; });

// 5. EXTENSIONS
Object.defineProperties(String.prototype, {
    inRange: { value: protect(true, function(this: string, min: number, max: number) { return this.length >= min && this.length <= max; }), enumerable: false },
    containsPattern: { value: protect(true, function(this: string, pattern: RegExp) { return pattern.test(this); }), enumerable: false }
});

Object.defineProperties(Number.prototype, {
    inRange: { value: protect(true, function(this: number, min: number, max: number) { return this.valueOf() >= min && this.valueOf() <= max; }), enumerable: false },
    upTo: { value: protect(true, function(this: number, limit: number) { return this.valueOf() <= limit; }), enumerable: false },
    downTo: { value: protect(true, function(this: number, limit: number) { return this.valueOf() >= limit; }), enumerable: false },
    removeMinus: { value: protect(true, function(this: number) { return Math.abs(this.valueOf()); }), enumerable: false }
});

Object.defineProperties(Date.prototype, {
    inRange: { value: protect(true, function(this: Date, min: Date, max: Date) { return this.getTime() >= min.getTime() && this.getTime() <= max.getTime(); }), enumerable: false }
});



console.log({
    theme: "light",
    port: 8080
}.apply(function() {
    // Inside this block, 'this' refers to the config object
    this.theme = "dark";
    this.port = 3000;
})); // { theme: "dark", port: 3000 }





//Any
let anyVar: any;

anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar; //? Wrong value
anyVar.todoSomething();
anyVar.toUpperCase();


//Unknow
let unknowVar: unknown;

unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

// unknowVar.todoSomething();

if ( typeof unknowVar === 'string' ) {
  unknowVar.toUpperCase();
}

if ( typeof unknowVar === 'boolean' ) {
  let isNew: boolean = unknowVar; //? right value
}

const parse = ( str: string ): unknown => {
  return JSON.parse( str )
}

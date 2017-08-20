
const args = require('yargs').argv;
const operation = require('./operation');
const fs=require('fs');

switch(args.action){
    case "add":
        operation.appendObject({title : args.title, desc: args.desc});
        break;
    case "update":
        operation.updateObj({title : args.title, desc: args.desc});
        break;
    case "delete":
        operation.deleteObj({title : args.title, desc: args.desc});
        break;
    case "view":
        operation.viewObj();
        break;
    default:
        break
}




// console.log('1111');
// console.log(global);
// //passing arhuments = > node first.js 'smriti'
// console.log(process);
// const ar=process.argv;
//
// console.log(ar);
// 2) node first.js --name='smriti'
// 3) node first.js --name 'smriti'

 // const args = require('yargs').argv;
// const os=require('os');
// const fs=require('fs');

// fs.writeFileSync('abc.txt', 'test string');
// fs.mkdirSync('abc');
// fs.writeFileSync('abc/abc.txt', 'test string');
// fs.writeFileSync('abc.json', json.stringify({name:'abc'}));
// const text  = fs.readFileSync('abc.txt', 'utf8');
// console.log(text);
// console.log(os.userInfo());
// console.log(args);
//node first.js --name='smriti' --isVal

// console.log(args.name);

const args = require('yargs').argv;

// console.log(args.operation == 'add');
// console.log(args.operation);
const fs=require('fs');
// var myObj = {};
//
// var data = {
//     title: args.title,
//     desc: args.desc
// };
// console.log(data)
// myObj['booksDetail'] = [];
// myObj['booksDetail'].push(data);
//
// console.log(myObj, args.title, args.desc,111111111111);
//
// fs.writeFileSync('book.json', JSON.stringify(myObj), 'utf-8', function (err) {
//     console.error(err)
// });


function appendObject(obj){
    var configFile = fs.readFile('book.json','utf-8', function(err, data) {
            if (err) {
                var book = [];
                book.push(obj);
                var json = JSON.stringify(book);
                console.log("book file does not exist, creating one.");
                fs.writeFile('book.json', json, 'utf8');
                return;
            }
            else {
                book = JSON.parse(data);
                console.log(JSON.parse(data), 11111, typeof data, JSON.parse(data));
                var idx;
                book.map(function(item, index){
                    if(item.title == obj.title) {

                        idx =index;
                    }
                });
                if(idx) {
                    console.log("this book record already exists");
                }
                else {
                    book.push(obj);

                    json = JSON.stringify(book);
                    fs.writeFile('book.json', json, 'utf8');
                    return;
                }

            }
    });

}

function deleteObj(obj){
    var configFile = fs.readFile('book.json','utf-8', function(err, data) {
        if (err) {
            console.log("book file does not exist.");
            return;
        }
        else {
            book = JSON.parse(data);
            
            if(book.length == 0){
                console.log('No data exists');
                return;
            }
            console.log(JSON.parse(data), 2222222222, book);
            book.map(function(item, index){
               if(item.title == obj.title && item.desc == obj.desc) {
                 console.log(index);
                  book.pop(index);
               }; 
            });
            json = JSON.stringify(book);
            fs.writeFile('book.json', json, 'utf8');
            return;
        }
    });
}

function updateObj(obj){
    var configFile = fs.readFile('book.json','utf-8', function(err, data) {
        if (err) {
            console.log("book file does not exist.");
            return;
        }
        else {
            book = JSON.parse(data);
            if(book.length == 0){
                console.log('No data exists.');
                return;
            }
            console.log(JSON.parse(data), 2222222222, book);
            book.map(function(item, index){
                if(item.title == obj.title) {
                    console.log(index);
                    book[index].desc = obj.desc;
                };
            });
            json = JSON.stringify(book);
            fs.writeFile('book.json', json, 'utf8');
            return;
        }
    });
}

function viewObj(){
    var configFile = fs.readFile('book.json','utf-8', function(err, data) {
        if (err) {
            console.log("book file does not exist.");
            return;
        }
        else {
            // book = JSON.parse(data);
            console.log("Book record:",data);
            return;
        }
    });
}

switch(args.action){
    case "add":
        appendObject({title : args.title, desc: args.desc});
        break;
    case "update":
        updateObj({title : args.title, desc: args.desc});
        break;
    case "delete":
        deleteObj({title : args.title, desc: args.desc});
        break;
    case "view":
        viewObj();
        break;
    default:
        break
}




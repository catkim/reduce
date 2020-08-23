const shortWords = ['cat', 'hat', 'hi', 'red', 'by', 'pop', 'I', 'supercalifragilisticexpialidocious'];
const msgs = ["is a short word ", "let's go", "around the ", "git is weird", "Javascript is cool"]

let getSupershortWords = shortWords.filter(function(item){
  if(item.length <= 2){
    return item;
  }
});
console.log(getSupershortWords);

const peopleArr  = [
    {
        username:    'glestrade',
        displayname: 'Inspector Lestrade',
        email:       'glestrade@met.police.uk',
        authHash:    'bdbf9920f42242defd9a7f76451f4f1d',
        lastSeen:    '2019-05-13T11:07:22+00:00',
    },
    {
        username:    'mholmes',
        displayname: 'Mycroft Holmes',
        email:       'mholmes@gov.uk',
        authHash:    'b4d04ad5c4c6483cfea030ff4e7c70bc',
        lastSeen:    '2019-05-10T11:21:36+00:00',
    },
    {
        username:    'iadler',
        displayname: 'Irene Adler',
        email:       null,
        authHash:    '319d55944f13760af0a07bf24bd1de28',
        lastSeen:    '2019-05-17T11:12:12+00:00',
    },
];


let newObj = peopleArr.reduce(function(acc, item){
   acc[item.username] = item.authHash;
   console.log(acc)
   return acc;
}, {});

let peopleWithEmail = peopleArr.filter(function(item){
  if(item.email){
    return item
  }
})

let lastSeen = peopleWithEmail.map(function(item){
  return item.lastSeen;
})

function fetchUsers(){
  return fetch('users.json').then(response => response.json()).then(function(data){return data});
}

let userData = fetchUsers();
var anotherMethod;
async function fetchWithAsync(){
  let response = await fetch('users.json');
  let data = await response.json();
  anotherMethod = data;
  return data;
}

fetchWithAsync();


let nameObjHolder = []
let getNames = userData.then(result => result.reduce((obj, item) => {
  obj['name'] = item.name;
  return obj
}, {}));

const king = { name: 'Mufasa', age: 55, kingdom: 'Pride Lands' };

Object.freeze(king); // if freeze can't modify, add or delete.

Object.seal(king); // if seal can't add or delete only modify.

delete king.age; // objs proparty delete.
delete king.kingdom;

king.queen = 'Sarabi';
king.name = 'King Simba';
console.log(king);
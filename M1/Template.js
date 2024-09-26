const farstName = 'Kamrul';
const lastName = "Islam";
const greet = `Welcome!`;

// const Name ='Hello,' + 'and' + greet + farstName + lastName                                        // All The item print without spacing.
// const Name = 'Hello,' + ' ' + 'and' + ' ' + greet + ' ' + farstName + ' ' + lastName;           // it will work but  a very time spoiling and not a beautiful way.
// const Name = ` Hello, and ${greet}  ${farstName}  ${lastName} . `;                              //  with  `_____`  it is  time saving and easy to read code.
const Name = `
Hello, and 
${greet}  
${farstName}  ${lastName} . 
`;                                                                                                                                                      //  with  `___${--}___`  can write in multi line also.  it is called TEMPLATE  STRONG.

console.log(Name);
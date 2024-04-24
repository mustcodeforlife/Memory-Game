
export let details = [
    {
        Name: "Rick Sanchez ",
        id:1,
    },
    {
        Name : "Morty Smith",
        id: 2,
    },
    {
        Name : "Summer Smith",
        id: 3,
    },
    {
        Name : "Beth Smith",
        id: 4,
    },
    {
        Name : "Jerry Smith",
        id: 5,
    },{
        Name : "Meeseeks",
        id: 242,
    }
];

export function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        let j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]] = [array[j],array[i]];
    }
}


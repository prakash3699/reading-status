var library = [ 
	{ author: 'Bill Gates', 
	title: 'The Road Ahead',
	readingStatus: true },
	
	{ author: 'Steve Jobs',
	title: 'Walter Isaacson', 
	readingStatus: true },

	{ author: 'Suzanne Collins',
	title: 'Mockingjay: The Final Book of The Hunger Games',
	readingStatus: false }
	];
	
	
var a=library.map(function(b){
		if(b.readingStatus===true){
			console.log(`Already read ${b.author} by ${b.title}`);
		}
		else{
			console.log(`You still need to read ${b.title } by ${b.author}`);
		}	
	});

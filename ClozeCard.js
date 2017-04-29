function ClozeCard(text, cloze) {
	this.clozeDeleted = cloze;
	this.fullText = text;
	
	var clozePos = text.indexOf(cloze);

	if (clozePos == -1) {
		console.log(cloze + " doesn't appear in " + text);
	} else{
		this.partial = text.slice(0, clozePos) + "..." + text.slice(clozePos + cloze.length, text.length);
		console.log(this.partial);
	}

	// console.log(this.partial[0]);
	// console.log(this.partial[1]);
	// console.log(this.partial);
}

module.exports = ClozeCard;
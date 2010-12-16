////////////////////////////////////////////////////////////////////////////////
// class Document
////////////////////////////////////////////////////////////////////////////////

function Document() {
	this.world = new World();
	this.undoStack = new UndoStack();
}

Document.prototype.setCell = function(x, y, type) {
	this.undoStack.push(new SetCellCommand(this.world, x, y, type));
};

Document.prototype.addPlaceable = function(placeable) {
	this.undoStack.push(new AddPlaceableCommand(this.world, placeable));
};
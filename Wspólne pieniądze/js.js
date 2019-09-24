
        var droppedFiles = null;
        
        function fileContainerChangeFile(e) {
            document.getElementById('fileSelectBox').classList.remove( 'fileContainerDragOver' );
            try {
                droppedFiles = document.getElementById('fs').files;
                document.getElementById('fileName').textContent = droppedFiles[0].name;
            } catch (error) { ; }
            // you can also use the property from the fs field, but this won't work
            // with good old IE.
            try {
                aName = document.getElementById('fs').value;
                if (aName !== '') {
                    document.getElementById('fileName').textContent = aName;
                }
            } catch (error) {
                ;
            }
        }
        
        function onDrop(e) {
            document.getElementById('fileSelectBox').classList.remove( 'fileContainerDragOver' );
            try {
                droppedFiles = e.dataTransfer.files;
                document.getElementById('fileName').textContent = droppedFiles[0].name;
            } catch (error) { ; }
        }
    
        function dragOver(e) {
            document.getElementById('fileSelectBox').classList.add( 'fileContainerDragOver' );
            e.preventDefault();
            e.stopPropagation();
        }
    
        function leaveDrop(e) {
            document.getElementById('fileSelectBox').classList.remove( 'fileContainerDragOver' );
        }
    
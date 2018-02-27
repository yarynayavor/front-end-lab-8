var rootNode = document.getElementById("root");

function getTreeFromStructure(struct) {
	let treeList=document.createElement("ul");
	for (let i = 0; i <struct.length; i++) {
		let f=document.createElement("li");
	    if(struct[i].folder) {
	    	f.innerHTML=`<div class="main"><i class="material-icons folder-close">folder</i><div class="title">${struct[i].title}</div></div>`;
	    	if(!struct[i].children) {
	    		f.innerHTML+='<ul class="empty"><li>Folder is empty</li></ul>';
	    	}
	    } else {
	    	f.innerHTML=`<div class="main"><i class="material-icons drive">insert_drive_file</i><div class="title">${struct[i].title}</div></div>`;
	    }
	    if(struct[i].children) {
	    	let child=getTreeFromStructure(struct[i].children);
	    	f.appendChild(child);
	    } 
	    treeList.appendChild(f);
	}
	document.body.appendChild(treeList);
	return treeList;
}

let list=getTreeFromStructure(structure);
rootNode.appendChild(list);
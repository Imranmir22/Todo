 add=() => {
    var val = document.getElementById('txt').value;
    if (localStorage.getItem('itemsjson') == null) {
        console.log("sfgds");
        items = [];
        items.push([val]);
        localStorage.setItem('itemsjson', JSON.stringify(items));
    } else {
        itemsjsonstr = localStorage.getItem('itemsjson');
        itemsjsonstr = JSON.parse(itemsjsonstr);
        items.push([val]);
        localStorage.setItem('itemsjson', JSON.stringify(items));

    }
    update();

}


update = () => {
    var ritem = localStorage.getItem('itemsjson');
    ritem = JSON.parse(ritem);
     str = "";
    for (let i = 0; i < ritem.length; i++) {
        console.log(ritem.length);
       
        str += `
                <li>${ritem[i]}<button class="btn btn-sm btn-primary" onclick="deleted(${i})">Delete</button></li>`;





    }

    list_item.innerHTML = str;
}


deleted = (i) => {
    var ditem = localStorage.getItem('itemsjson');
    ditem = JSON.parse(ditem);
    ditem.splice(i, 1);
    localStorage.setItem('itemsjson', JSON.stringify(ditem));
    update();


}










/*

add = () => {

    if (cnt == "notdefined") {
        cnt = 1;
    } else {
        cnt++;
    }


    console.log("jhas")
        //  let pre = document.querySelector('.contain')
    var iDiv = document.createElement('div');
    iDiv.id = cnt;
    iDiv.className = 'block';
    document.getElementsByTagName('cnt')[0].appendChild(iDiv);

    let pre = document.querySelector('.cnt')

    para = document.createElement('p');
    var val = document.getElementById('txt').value;
    para.innerText = val;
    pre.appendChild(para);
    //localStorage.setItem('val');


    del = document.createElement('BUTTON');
    del.id = "delete";
    del.className = 'block';
    document.getElementById('block').appendChild(del);
    del.innerText = "delete";
    pre.appendChild(del);

    //document.getElementById('deleted').setAttribute("onclick", "fun2(this)");
    document.getElementById('block').setAttribute("onclick", "fun2(this)");
    //del.innerText

}

function fun2(elem) {
    // elem.parentNode().remove();
    console.log(elem.childNode);

}*/
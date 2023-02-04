const alertError = document.getElementById('alertError')
var totalProd = 0
var totalVal = 0

const validation = () => {
    let user = document.getElementById('email')
    let pass = document.getElementById('password')

    if (user.value === pass.value) {
        location.href = "social.html";
    } else {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-danger alert-dismissible" role="alert">`,
            `   <div>Usuario y contraseña NO coinciden</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button>',
            '</div>'
        ].join('')

        alertError.append(wrapper)
        user.value = ""
        pass.value = ""
    }
}

const more = (val, type) => {
    let element = document.getElementById(val)
    let elementText = document.getElementById(val+'text')
    let elementVal = document.getElementById(val+'val')
    let total = document.getElementById('total_prod')
    let totalPago = document.getElementById('totalPago')

    if(type == 'more'){
        element.innerText = ++element.value
        elementText.innerText = element.value
        elementVal.innerText = (element.value*133990).toLocaleString()
        total.innerText = ++totalProd
    }else if(type == 'less'){
        if (element.value > 0) {
            element.innerText = --element.value
            elementText.innerText = element.value
            total.innerText = --totalProd
        }
      
    }

    if(totalProd > 0) totalPago.innerText = (totalProd*133990).toLocaleString()
    

    
}   

const closeModal = () =>{
    setTimeout(() => {
        $('#exampleModal').modal('hide');
    }, 5000);
    
}

const agregar = () => {
    let newUl
    let text = document.getElementById('texto')
    let ulExist = document.getElementsByTagName('ul');
    let newLi = document.createElement('li');
    newLi.setAttribute("onclick", "eliminar(id)");
    newLi.innerText = text.value
    if(ulExist.length == 0){
        newUl = document.createElement('ul');
        newUl.setAttribute("id", "lista");
        newUl.appendChild(newLi)
        newLi.setAttribute("id", "1");
        document.body.appendChild(newUl);
    }else{
        let lis = document.getElementById('lista').getElementsByTagName('li');
        newLi.setAttribute("id", lis.length+1);
        document.getElementById('lista').appendChild(newLi)
   }
}

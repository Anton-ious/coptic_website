// save data in local storage
window.addEventListener("DOMContentLoaded",function(){
    const save_name= localStorage.getItem("savename")
    if (save_name) {
        Name.innerHTML= save_name;
    }
    //  save list
    const save_list_1= localStorage.getItem("savedata")
    if (save_list_1) {
        View.innerHTML+= save_list_1;
    }
    // 
    const save_list_2= localStorage.getItem("savedata1")
    if (save_list_2) {
        View.innerHTML+= save_list_2;
    }
    // // 
    const save_list_3= localStorage.getItem("savedata2")
    if (save_list_3) {
        View.innerHTML+= save_list_3;
    }
    // 
    const save_list_4= localStorage.getItem("savedata3")
    if (save_list_4) {
        View.innerHTML+= save_list_4;
    }
    // 
    const save_list_5= localStorage.getItem("savedata4")
    if (save_list_5) {
        View.innerHTML+= save_list_5;
    }
    // 
    const save_list_6= localStorage.getItem("savedata5")
    if (save_list_6) {
        View.innerHTML+= save_list_6;
    }
});

// edit name of user list

    // create
const Name= document.getElementById("currentname")
const l_n= document.getElementById("listname")


    // read & update
function edit_listname(){
    if (l_n.value == ""){
        alert ("من فضلك ادخل اسم للتعديل")
    }else if (l_n.value != ""){
        Name.innerHTML=`
        <h2>${l_n.value}</h2>
        `
        localStorage.setItem("savename",l_n.value)
        l_n.value=""
        return Name
    }
}


// add item in list

    // create
const View= document.getElementById("view")

let list=[
    {video:"https://www.youtube.com/embed/61JQZ5rM32c?si=ClM85Y0bBjGKynaB&amp;start=2",tarnema:"بقى انا استاهل",say:"فريق ctv",source:"ctv"},
    {video:"https://www.youtube.com/embed/aaNVMaj9vgA?si=XcOStz2Ol3uzHHKk",tarnema:"سنين طويلة مضت",say:"فريق ctv",source:"ctv"},
    {video:"https://www.youtube.com/embed/BnsBvJk73h8?si=QJSe3heBzCKrrfBW",tarnema:"مرة تهت بعيداً",say:"فريق ctv",source:"ctv"},
    {video:"https://www.youtube.com/embed/f79vDDRHMII?si=C_RSTOdz-VNexzdY",tarnema:"متعولش الهم",say:"فريق mesat",source:"mesat"},
    {video:"https://www.youtube.com/embed/sivDccWiI2Y?si=SL2MqUA6x9v0iBZR",tarnema:"باب السماء مفتوح",say:"فريق ctv",source:"ctv"},
    {video:"https://www.youtube.com/embed/Iq236XeGY_c?si=fYgUMk0YUvyFuo5y",tarnema:"مين  احن منك",say:"يوسف حليم",source:"كورال ابناء الملكوت"},
    {video:"https://www.youtube.com/embed/E3ifQedqCMU?si=zGZQNCEHj4BTb5Ku",tarnema:"البوم ترانيم Aghapy",say:"فريق Aghapy",source:"Aghapy"},
]

    // read   
function add_list_1(){
    let f= list[0];
    let v=`
        <div class="item">
            <iframe width="450" height="300" src="${f.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h4>
            ترنيمة :
            <span>${f.tarnema}</span>
            </h4>
            <h4>
            القائل :
            <span>${f.say}</span>
            </h4>
            <h4>
            المصدر :
            <span>${f.source}</span>
            </h4>
            <button class="delete" onclick="delete_1()">
            حذف من القاءمة
            </button>
        </div>
    `;
    if (View.innerHTML != v){
        localStorage.setItem("savedata",v)
        v=""
        return View.innerHTML=v
    }else{
        return alert("تمت الاضافة بنجاح ✓")
    }

} 

function add_list_2(){
    let s= list[1];
    let a=`
        <div class="item">
            <iframe width="450" height="300" src="${s.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h4>
            ترنيمة :
            <span>${s.tarnema}</span>
            </h4>
            <h4>
            القائل :
            <span>${s.say}</span>
            </h4>
            <h4>
            المصدر :
            <span>${s.source}</span>
            </h4>
            <button class="delete" onclick="delete_2()">
            حذف من القاءمة
            </button>
        </div>
    `;
    if (View.innerHTML != a){
        localStorage.setItem("savedata1",a)
        a=""
        return View.innerHTML=a
    }else{
        return alert("تمت الاضافة بنجاح ✓")
    }

} 

function add_list_3(){
    let t= list[2];
    let a=`
        <div class="item">
            <iframe width="450" height="300" src="${t.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h4>
            ترنيمة :
            <span>${t.tarnema}</span>
            </h4>
            <h4>
            القائل :
            <span>${t.say}</span>
            </h4>
            <h4>
            المصدر :
            <span>${t.source}</span>
            </h4>
            <button class="delete" onclick="delete_3()">
            حذف من القاءمة
            </button>
        </div>
    `;
    if (View.innerHTML != a){
        localStorage.setItem("savedata2",a)
        a=""
        return View.innerHTML=a
    }else{
        return alert("تمت الاضافة بنجاح ✓")
    }
    
} 

function add_list_4(){
    let t= list[3];
    let a=`
        <div class="item">
            <iframe width="450" height="300" src="${t.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h4>
            ترنيمة :
            <span>${t.tarnema}</span>
            </h4>
            <h4>
            القائل :
            <span>${t.say}</span>
            </h4>
            <h4>
            المصدر :
            <span>${t.source}</span>
            </h4>
            <button class="delete" onclick="delete_4()">
            حذف من القاءمة
            </button>
        </div>
    `;
    if (View.innerHTML != a){
        localStorage.setItem("savedata3",a)
        a=""
        return View.innerHTML=a
    }else{
        return alert("تمت الاضافة بنجاح ✓")
    }
    
}
function add_list_5(){
    let t= list[4];
    let a=`
        <div class="item">
            <iframe width="450" height="300" src="${t.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h4>
            ترنيمة :
            <span>${t.tarnema}</span>
            </h4>
            <h4>
            القائل :
            <span>${t.say}</span>
            </h4>
            <h4>
            المصدر :
            <span>${t.source}</span>
            </h4>
            <button class="delete" onclick="delete_5()">
            حذف من القاءمة
            </button>
        </div>
    `;
    if (View.innerHTML != a){
        localStorage.setItem("savedata4",a)
        a=""
        return View.innerHTML=a
    }else{
        return alert("تمت الاضافة بنجاح ✓")
    }
    
}

function add_list_6(){
    let t= list[5];
    let a=`
        <div class="item">
            <iframe width="450" height="300" src="${t.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h4>
            ترنيمة :
            <span>${t.tarnema}</span>
            </h4>
            <h4>
            القائل :
            <span>${t.say}</span>
            </h4>
            <h4>
            المصدر :
            <span>${t.source}</span>
            </h4>
            <button class="delete" onclick="delete_6()">
            حذف من القاءمة
            </button>
        </div>
    `;
    if (View.innerHTML != a){
        localStorage.setItem("savedata5",a)
        a=""
        return View.innerHTML=a
    }else{
        return alert("تمت الاضافة بنجاح ✓")
    }
    
}

function add_list_7(){
    let t= list[6];
    let a=`
        <div class="item">
            <iframe width="450" height="300" src="${t.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h4>
            ترنيمة :
            <span>${t.tarnema}</span>
            </h4>
            <h4>
            القائل :
            <span>${t.say}</span>
            </h4>
            <h4>
            المصدر :
            <span>${t.source}</span>
            </h4>
            <button class="delete" onclick="delete_6()">
            حذف من القاءمة
            </button>
        </div>
    `;
    if (View.innerHTML != a){
        localStorage.setItem("savedata5",a)
        a=""
        return View.innerHTML=a
    }else{
        return alert("تمت الاضافة بنجاح ✓")
    }
    
}

    // delete
function delete_1(){
    localStorage.removeItem("savedata",add_list_1().v)
    alert("سوف نقوم باعادة تشغيل الصفحة لمشاهدة القائمة الجديدة")
    window.location.href="page-3.html"
}

function delete_2(){
    localStorage.removeItem("savedata1",add_list_2().a)
    alert("سوف نقوم باعادة تشغيل الصفحة لمشاهدة القائمة الجديدة")
    window.location.href="page-3.html"
}

function delete_3(){
    localStorage.removeItem("savedata2",add_list_3().a)
    alert("سوف نقوم باعادة تشغيل الصفحة لمشاهدة القائمة الجديدة")
    window.location.href="page-3.html"
}

function delete_4(){
    localStorage.removeItem("savedata3",add_list_4().a)
    alert("سوف نقوم باعادة تشغيل الصفحة لمشاهدة القائمة الجديدة")
    window.location.href="page-3.html"
}

function delete_5(){
    localStorage.removeItem("savedata4",add_list_5().a)
    alert("سوف نقوم باعادة تشغيل الصفحة لمشاهدة القائمة الجديدة")
    window.location.href="page-3.html"
}

function delete_6(){
    localStorage.removeItem("savedata5",add_list_6().a)
    alert("سوف نقوم باعادة تشغيل الصفحة لمشاهدة القائمة الجديدة")
    window.location.href="page-3.html"
}

function delete_7(){
    localStorage.removeItem("savedata5",add_list_7().a)
    alert("سوف نقوم باعادة تشغيل الصفحة لمشاهدة القائمة الجديدة")
    window.location.href="page-3.html"
}